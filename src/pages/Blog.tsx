import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import BlogCard, { type BlogPost } from "../components/BlogCard";
import BgGreen from "../assets/bg-green.svg";
import ObjectSvg from "../assets/object.svg";
import { fetchBlogPosts } from "../api/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchBlogPosts()
      .then((data) => {
        if (cancelled) return;
        setPosts(data);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong loading blog posts.",
        );
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="relative w-full bg-white min-h-screen">
      <Navbar />

      <section
        className="relative flex flex-col items-center justify-center overflow-hidden lg:px-20 px-5 mx-auto"
        style={{
          backgroundImage: `linear-gradient(180deg, #EBFAF2 0%, #FFFFFF 100%), url("${BgGreen}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <img
          src={BgGreen}
          alt=""
          aria-hidden
          className="absolute lg:-top-[500px] pointer-events-none"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-[1400px] opacity-[0.12] pointer-events-none rotate-[34deg]"
          aria-hidden
        >
          <img src={ObjectSvg} alt="" className="w-full h-auto" />
        </div>
        <Hero text="Our Blog" head="Resources and Insights" headNum={602} />
      </section>

      <section className="relative z-10 lg:px-20 lg:pt-5 pt-5 px-5 py-12 lg:py-16">
        <div className="max-w-[1353px] mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-[34px] lg:gap-y-[51px]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[8px] overflow-hidden shadow-[0px_12.684px_16.917px_0px_rgba(16,24,40,0.08)] animate-pulse"
                >
                  <div className="aspect-[405/254] bg-[#f0f2f5]" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 w-20 bg-[#EBFAF2] rounded" />
                    <div className="h-6 bg-[#e4e7ec] rounded w-4/5" />
                    <div className="h-4 bg-[#e4e7ec] rounded w-full" />
                    <div className="h-4 bg-[#e4e7ec] rounded w-2/3" />
                    <div className="flex gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-[#e4e7ec]" />
                      <div className="flex-1 space-y-1">
                        {/* <div className="h-3 w-24 bg-[#e4e7ec] rounded" />
                        <div className="h-3 w-20 bg-[#e4e7ec] rounded" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <p className="text-[#475467] text-[17px] text-center py-16">
              We couldn't load blog posts right now. Please try again later.
            </p>
          ) : posts.length === 0 ? (
            <p className="text-[#475467] text-[17px] text-center py-16">
              No blog posts yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:gap-x-[34px] lg:gap-y-[51px]">
              {posts.map((post, index) => (
                <BlogCard key={post.link ?? index} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
