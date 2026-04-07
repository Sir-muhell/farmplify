import { Link } from "react-router-dom";

export interface BlogPost {
  image: string;
  category: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatar?: string;
  date: string;
  link?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const href = post.link ?? "#";
  return (
    <article className="bg-white flex flex-col rounded-[8px] overflow-hidden shadow-[0px_12.684px_16.917px_0px_rgba(16,24,40,0.08),0px_4.228px_55.07px_0px_rgba(16,24,40,0.03)] transition-shadow hover:shadow-lg">
      <Link to={href} className="flex flex-col flex-1">
        <div className="aspect-[405/254] w-full overflow-hidden bg-[#f0f2f5]">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <div className="pt-[25px] pb-[34px] px-[25px] flex flex-col flex-1 gap-[13px]">
          <p className="text-[#30C67C] text-[15px] font-medium leading-[21px] uppercase tracking-[0.02em]">
            {post.category}
          </p>
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="flex items-start gap-[17px] justify-between">
              <h3 className="font-medium text-[#101828] text-[25px] leading-[34px] flex-1 min-w-0">
                {post.title}
              </h3>
              <span className="shrink-0 w-[25px] h-[25px] flex items-center justify-center pt-[4px]" aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#101828]">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <p className="text-[#475467] text-[17px] leading-[25px] line-clamp-2">
              {post.description}
            </p>
          </div>
          <div className="flex items-center gap-[13px] pt-[5px]">
            {post.authorAvatar ? (
              <img
                src={post.authorAvatar}
                alt=""
                className="w-[42px] h-[42px] rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className="w-[42px] h-[42px] rounded-full shrink-0 flex items-center justify-center text-white font-medium text-[15px] bg-[#30C67C]"
                aria-hidden
              >
                {post.authorName.charAt(0)}
              </div>
            )}
            <div className="flex flex-col leading-[21px]">
              <span className="font-medium text-[#101828] text-[15px]">{post.authorName}</span>
              <span className="text-[#475467] text-[15px] font-normal">{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
