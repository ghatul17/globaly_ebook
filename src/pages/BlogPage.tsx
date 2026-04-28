import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { getAllPosts, type BlogPost } from "../lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllPosts().then(data => { setPosts(data); setLoading(false); });
  }, []);

  return (
    <>
      <SEO
        title="Blog | Globaly"
        description="Guides and insights on moving abroad, banking, visas, and building a global life."
        canonical="/blog"
      />
      <div className="pt-32 pb-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#1E293B] mb-3 tracking-tight">Blog</h1>
          <p className="text-neutral-500 mb-12 text-lg">
            Guides and insights on moving abroad, banking, visas, and building a global life.
          </p>

          {loading ? (
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-neutral-100 rounded w-32 mb-3" />
                  <div className="h-6 bg-neutral-100 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-neutral-100 rounded w-full mb-1" />
                  <div className="h-4 bg-neutral-100 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-neutral-400">No posts yet. Check back soon.</p>
          ) : (
            <ul className="space-y-10">
              {posts.map(post => (
                <li key={post._id} className="group">
                  <Link to={`/blog/${post.slug}`} className="block">
                    {post.cover && (
                      <img src={post.cover} alt={post.title}
                        className="w-full h-52 object-cover rounded-xl mb-5" />
                    )}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span>{formatDate(post.date)}</span>
                      {post.tags?.length > 0 && (
                        <>
                          <span>·</span>
                          {post.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="bg-brand-50 text-brand-900 px-2 py-0.5 rounded-full font-medium">
                              {tag}
                            </span>
                          ))}
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-[#1E293B] group-hover:text-brand-900 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <span className="inline-block mt-3 text-sm font-medium text-brand-900 group-hover:underline">
                      Read more →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
