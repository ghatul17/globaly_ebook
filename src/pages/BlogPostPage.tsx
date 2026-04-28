import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import SEO from "../components/SEO";
import { getPostBySlug, type BlogPost } from "../lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) { setPost(null); return; }
    getPostBySlug(slug).then(data => setPost(data ?? null));
  }, [slug]);

  if (post === undefined) return (
    <div className="pt-40 pb-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-4 animate-pulse">
        <div className="h-8 bg-neutral-100 rounded w-3/4" />
        <div className="h-4 bg-neutral-100 rounded w-1/2" />
        <div className="h-64 bg-neutral-100 rounded" />
      </div>
    </div>
  );

  if (post === null) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO
        title={`${post.title} | Globaly Blog`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
      />
      <div className="pt-32 pb-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-brand-900 transition-colors mb-8">
            ← Back to Blog
          </Link>

          {post.cover && (
            <img src={post.cover} alt={post.title}
              className="w-full h-64 object-cover rounded-xl mb-8" />
          )}

          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.author}</span>
            {post.tags?.length > 0 && (
              <>
                <span>·</span>
                {post.tags.map(tag => (
                  <span key={tag} className="bg-brand-50 text-brand-900 px-2 py-0.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>

          <h1 className="text-4xl font-extrabold text-[#1E293B] mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>

          <article className="prose prose-slate max-w-none text-neutral-600 leading-relaxed">
            <PortableText value={post.body} />
          </article>
        </div>
      </div>
    </>
  );
}
