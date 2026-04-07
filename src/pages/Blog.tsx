import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Tape from "../components/Tape";
import BlogCard, { type BlogPost } from "../components/BlogCard";
import BgGreen from "../assets/bg-green.svg";
import ObjectSvg from "../assets/object.svg";
import Image1 from "../assets/services/Image1.webp";
import Image2 from "../assets/services/Image2.webp";
import Image3 from "../assets/services/Image3.webp";
import Image4 from "../assets/services/Image4.webp";
import Image5 from "../assets/services/Image5.webp";
import Image6 from "../assets/services/Image6.webp";
import { fetchBlogPosts } from "../api/blog";

const FALLBACK_POSTS: BlogPost[] = [
  {
    image: Image1,
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    authorName: "Olivia Rhye",
    date: "20 Jan 2022",
  },
  {
    image: Image2,
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    authorName: "Phoenix Baker",
    date: "19 Jan 2022",
  },
  {
    image: Image3,
    category: "Software engineering",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for designing, testing, and mocking them.",
    authorName: "Lana Steiner",
    date: "18 Jan 2022",
  },
  {
    image: Image4,
    category: "Management",
    title: "Bill Walsh leadership lessons",
    description:
      "Live to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning dynasty.",
    authorName: "Alec Whitten",
    date: "17 Jan 2022",
  },
  {
    image: Image5,
    category: "Product",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes. Here's how to use them for product decisions.",
    authorName: "Demi Wilkinson",
    date: "16 Jan 2022",
  },
  {
    image: Image6,
    category: "Design",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn how to use wireframes in your design process.",
    authorName: "Candice Wu",
    date: "16 Jan 2022",
  },
  {
    image: Image1,
    category: "Design",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger and our individual designs better. Here's how.",
    authorName: "Natali Craig",
    date: "15 Jan 2022",
  },
  {
    image: Image2,
    category: "Product",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and benefits. Here are the top 10.",
    authorName: "Drew Cano",
    date: "15 Jan 2022",
  },
  {
    image: Image3,
    category: "Customer Success",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated. Tips for building a thriving customer community.",
    authorName: "Orlando Diggs",
    date: "14 Jan 2022",
  },
];

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
        setPosts(data.length > 0 ? data : FALLBACK_POSTS);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load posts");
        setPosts(FALLBACK_POSTS);
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
        <div className="relative z-10 flex flex-col items-center text-center max-w-[602px] lg:mt-[200px] mt-[105px] lg:mb-[72px] mb-12">
          <Tape
            text="OUR BLOG"
            textColor="#1F3C15"
            textStyle={{
              fontSize: "16px",
              letterSpacing: "6.4px",
              fontWeight: 700,
            }}
          />
          <h1
            className="mt-8 text-[#1F3C15] font-medium text-[48px] sm:text-[64px] lg:text-[96px] leading-[93%] tracking-[-0.96px]"
            style={{ fontFamily: "Neue Haas Grotesk Display Pro, sans-serif" }}
          >
            Resources and Insights
          </h1>
        </div>
      </section>

      <section className="relative z-10 lg:px-20 px-5 py-12 lg:py-16">
        <div className="max-w-[1353px] mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[34px]">
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
          ) : (
            <>
              {error && (
                <p className="text-[#475467] text-[17px] text-center mb-8">
                  Showing cached content. {error}
                </p>
              )}
              {posts.length === 0 ? (
                <p className="text-[#475467] text-[17px] text-center py-16">
                  No blog posts yet. Check back soon.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[34px]">
                  {posts.map((post, index) => (
                    <BlogCard key={post.link ?? index} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
