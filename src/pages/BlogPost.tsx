import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BgGreen from "../assets/bg-green.svg";
import ObjectSvg from "../assets/object.svg";
import { fetchBlogPostBySlug, type BlogPostDetail } from "../api/blog";

const WORDS_PER_MINUTE = 200;

const estimateReadMinutes = (html: string): number => {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    setError(null);

    fetchBlogPostBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        if (!data) {
          setNotFound(true);
        } else {
          setPost(data);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong loading this post.",
        );
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const readMinutes = useMemo(
    () => (post?.content ? estimateReadMinutes(post.content) : 0),
    [post?.content],
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  if (notFound) {
    return (
      <main className="relative w-full bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center text-center px-5 pt-[180px] pb-24">
          <h1 className="text-[#1F3C15] font-medium text-[36px] sm:text-[48px] leading-[110%]">
            Post not found
          </h1>
          <p className="text-[#475467] text-[17px] mt-4 mb-8">
            We couldn't find the post you're looking for.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-[#1F3C15] text-white font-semibold uppercase text-sm py-3 px-8 rounded-full tracking-[0.2em] hover:scale-105 transition"
          >
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="relative w-full bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center text-center px-5 pt-[180px] pb-24">
          <h1 className="text-[#1F3C15] font-medium text-[36px] sm:text-[48px] leading-[110%]">
            Something went wrong
          </h1>
          <p className="text-[#475467] text-[17px] mt-4 mb-8">
            We couldn't load this post right now. Please try again later.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-[#1F3C15] text-white font-semibold uppercase text-sm py-3 px-8 rounded-full tracking-[0.2em] hover:scale-105 transition"
          >
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative w-full bg-white min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero: image-first on mobile (full-bleed banner above the text),
          side-by-side on desktop (text left, image right) */}
      <section
        className="relative overflow-hidden pt-[105px] lg:pt-[232px] lg:px-20 pb-8 lg:pb-0"
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
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] opacity-[0.12] pointer-events-none rotate-[34deg]"
          aria-hidden
        >
          <img src={ObjectSvg} alt="" className="w-full h-auto" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row lg:items-start gap-8 lg:gap-16">
          <div className="flex-1 min-w-0 lg:max-w-[420px] px-5 lg:px-0 lg:pb-[60px]">
            {loading ? (
              <div className="space-y-4">
                <div className="h-16 w-full bg-[#e4e7ec] rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-[#e4e7ec] rounded animate-pulse" />
              </div>
            ) : (
              <>
                {post && (
                  <p className="lg:hidden text-[#30C67C] text-[14px] font-semibold leading-[20px] mb-3">
                    {post.date}
                    {readMinutes > 0 && <> &bull; {readMinutes} min read</>}
                  </p>
                )}
                <h1
                  className="text-[#101828] font-medium text-[40px] lg:text-[56px] leading-[1.1] tracking-[-0.4px] lg:tracking-[-1.12px]"
                  style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}
                >
                  {post?.title}
                </h1>
                {post?.description && (
                  <p className="mt-4 text-[#475467] text-[18px] lg:text-[16px] leading-[1.55] lg:leading-[1.3] tracking-[0.54px] lg:tracking-[0.6px]">
                    {post.description}
                  </p>
                )}
                {post && (
                  <div className="flex items-center gap-3 lg:gap-5 mt-8 lg:mt-10">
                    {post.authorAvatar ? (
                      <img
                        src={post.authorAvatar}
                        alt=""
                        className="w-[48px] h-[48px] lg:w-[75px] lg:h-[75px] rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-[48px] h-[48px] lg:w-[75px] lg:h-[75px] rounded-full flex items-center justify-center text-white font-medium text-[18px] lg:text-[28px] bg-[#30C67C] shrink-0">
                        {post.authorName.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-semibold text-[#101828] text-[16px] lg:text-[32px] leading-[1.2]">
                        {post.authorName}
                      </span>
                      <span className="hidden lg:block text-[#475467] text-[16px] mt-1">{post.date}</span>
                      <span className="lg:hidden text-[#475467] text-[14px] mt-0.5">{post.date}</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex-1 lg:max-w-[790px]">
            {loading ? (
              <div className="aspect-[375/240] lg:aspect-[790/468] w-full bg-[#f0f2f5] lg:rounded-none animate-pulse" />
            ) : (
              post?.image && (
                <div className="aspect-[375/240] lg:aspect-[790/468] w-full overflow-hidden bg-[#f0f2f5]">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Body: rendered post content */}
      {/* No top padding at mobile — the hero section above already ends in
          pb-16, so adding pt here would double the gap before the hero's
          own bottom padding. Desktop is fine since the hero's bottom
          padding is 0 there (lg:pb-0), so lg:py-24 is the only spacing. */}
      <section className="relative z-10 lg:px-20 px-5 pb-16 lg:py-24">
        <div className="max-w-[960px] mx-auto">
          {loading ? (
            <div className="space-y-4">
              <div className="h-4 bg-[#e4e7ec] rounded w-full animate-pulse" />
              <div className="h-4 bg-[#e4e7ec] rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-[#e4e7ec] rounded w-2/3 animate-pulse" />
              <div className="aspect-square w-full bg-[#f0f2f5] rounded-[16px] animate-pulse" />
            </div>
          ) : (
            <>
              <article
                className="blog-content text-[#616161] lg:text-[#475467] text-[16px] lg:text-[20px] leading-[1.3] lg:leading-[1.55] tracking-[0.32px] lg:tracking-normal [overflow-wrap:anywhere]
                  [&_h2]:text-[#101828] [&_h2]:text-[22px] lg:[&_h2]:text-[32px] [&_h2]:leading-[1.33] lg:[&_h2]:leading-[1.27] [&_h2]:font-medium [&_h2]:mt-10 lg:[&_h2]:mt-14 [&_h2]:mb-4 lg:[&_h2]:mb-6 [&_h2]:first:mt-0
                  [&_h3]:text-[#101828] [&_h3]:text-[18px] lg:[&_h3]:text-[24px] [&_h3]:leading-[1.3] [&_h3]:font-medium [&_h3]:mt-8 lg:[&_h3]:mt-10 [&_h3]:mb-3 lg:[&_h3]:mb-4
                  [&_p]:mb-4 lg:[&_p]:mb-6
                  [&_a]:text-[#30C67C] [&_a]:underline
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 lg:[&_ul]:mb-6
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 lg:[&_ol]:mb-6
                  [&_li]:mb-2
                  [&_img]:w-full [&_img]:aspect-square [&_img]:object-cover [&_img]:rounded-[12px] lg:[&_img]:rounded-[16px] [&_img]:my-6 lg:[&_img]:my-8
                  [&_blockquote]:text-[#101828] [&_blockquote]:text-[20px] lg:[&_blockquote]:text-[26px] [&_blockquote]:leading-[1.5] [&_blockquote]:italic [&_blockquote]:font-medium [&_blockquote]:my-8 lg:[&_blockquote]:my-10"
                // Safe: content is sanitized server-side before storage (see Backend blogController.ts)
                dangerouslySetInnerHTML={{ __html: post?.content || "" }}
              />

              {post && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#EBFAF2] text-[#1F3C15] text-[13px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="border-t border-[#EAECF0] mt-10 pt-6 flex flex-col gap-4">
                <p className="text-[#333] text-[16px]">Share this post</p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex items-center gap-2 px-4 py-2.5 border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[#344054] text-[14px] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M8 8V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-2M8 8H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2M8 8h6a2 2 0 012 2v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {copied ? "Copied!" : "Copy link"}
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post?.title || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#344054]">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#344054]">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#344054]">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
