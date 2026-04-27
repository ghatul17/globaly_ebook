import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  cover?: string;
  tags: string[];
  body: string;
}

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

// Simple YAML frontmatter parser — handles string, date, and list values
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim();
    // YAML list item on same line: "tags: [Banking, Finance]"
    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val.slice(1, -1).split(',').map(v => v.trim()).filter(Boolean);
    } else if (val) {
      data[key] = val.replace(/^['"]|['"]$/g, '');
    }
  }

  // Multi-line list: lines starting with "  - item"
  const listRe = /^(\w[\w-]*):\s*\n((?:\s+-\s+.+\n?)+)/gm;
  for (const m of match[1].matchAll(listRe)) {
    data[m[1]] = m[2].split('\n').map(l => l.replace(/^\s+-\s+/, '').trim()).filter(Boolean);
  }

  return { data, content: match[2] };
}

function parsePost(raw: string, filename: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);
  const slug = filename.replace(/^.*[\\/]/, '').replace(/\.md$/, '');
  return {
    slug,
    title: String(data.title ?? 'Untitled'),
    date: data.date ? new Date(String(data.date)).toISOString() : new Date().toISOString(),
    author: String(data.author ?? 'Globaly Team'),
    description: String(data.description ?? ''),
    cover: data.cover ? String(data.cover) : undefined,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    body: marked(content) as string,
  };
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(modules)
    .map(([path, raw]) => parsePost(raw as string, path))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const entry = Object.entries(modules).find(([path]) =>
    path.replace(/^.*[\\/]/, '').replace(/\.md$/, '') === slug
  );
  if (!entry) return undefined;
  return parsePost(entry[1] as string, entry[0]);
}
