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
    <article className="bg-white flex flex-col rounded-[8px] overflow-hidden shadow-[0px_12.684px_16.917px_0px_rgba(16,24,40,0.08),0px_4.228px_55.07px_0px_rgba(16,24,40,0.03)] transition-shadow hover:shadow-lg pt-[22px] px-[22px] pb-[29px] lg:pt-[25px] lg:px-[25px] lg:pb-[34px]">
      <Link to={href} className="flex flex-col flex-1 gap-[29px] lg:gap-[34px]">
        <div className="aspect-[405/254] w-full overflow-hidden bg-[#f0f2f5] shrink-0">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <div className="flex flex-col flex-1 gap-[11px] lg:gap-[13px]">
          <p className="text-[#30C67C] text-[13px] lg:text-[15px] font-medium leading-[18px] lg:leading-[21px] uppercase tracking-[0.02em]">
            {post.category}
          </p>
          <div className="flex flex-col gap-[7px] lg:gap-[8px] flex-1">
            <div className="flex items-start gap-[15px] lg:gap-[17px] justify-between">
              <h3 className="font-medium text-[#101828] text-[22px] lg:text-[25px] leading-[29px] lg:leading-[34px] flex-1 min-w-0">
                {post.title}
              </h3>
              <span className="shrink-0 w-[22px] h-[22px] lg:w-[25px] lg:h-[25px] flex items-center justify-center pt-[4px]" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#101828]">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <p className="text-[#475467] text-[15px] lg:text-[17px] leading-[22px] lg:leading-[25px] overflow-hidden text-ellipsis whitespace-nowrap">
              {post.description}
            </p>
          </div>
          <div className="flex items-center gap-[11px] lg:gap-[13px] pt-[5px]">
            {post.authorAvatar ? (
              <img
                src={post.authorAvatar}
                alt=""
                className="w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className="w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] rounded-full shrink-0 flex items-center justify-center text-white font-medium text-[13px] lg:text-[15px] bg-[#30C67C]"
                aria-hidden
              >
                {post.authorName.charAt(0)}
              </div>
            )}
            <div className="flex flex-col leading-[18px] lg:leading-[21px]">
              <span className="font-medium text-[#101828] text-[13px] lg:text-[15px]">{post.authorName}</span>
              <span className="text-[#475467] text-[13px] lg:text-[15px] font-normal">{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
