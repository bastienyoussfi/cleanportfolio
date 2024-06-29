import { CiLink } from 'react-icons/ci';

export default function PostsDetails({ post, onBack }) {
    return (
      <div className="relative p-16 ml-96 max-w-[700px]">
        <button 
          onClick={onBack}
          className="font-montserrat text-white font-normal font text-[14px] xl:text-lg hover:text-gray-400 hover:animate-pulse transition-all duration-300 hover:cursor-pointer mb-20"
        >
          Back to posts
        </button>
        <div className="flex flex-col opacity-85 text-start mt-40 relative max-h-[500px] overflow-y-scroll scrollbar-hide">
          <div className="text-3xl">{post.title}</div>
          <div className="text-base mb-4 text-gray-400">{post.date} - Bastien Youssfi</div>
          <div className="flex flex-row flex-wrap mb-2">
            {post.badges.map((badge, key) => {
              return (
                <div key={key} className="bg-[#252424] text-white text-xs px-2 py-1 rounded-md mr-2 mb-2">{badge}</div>
              );
            }
            )}
          </div>
            {post.content.split("\n").map((t,key) => {
              return (
              <div>
                <p key={key}>
                {t.split(/(\*\*.*?\*\*)/).map((part, i) => 
                  part.startsWith('**') && part.endsWith('**') ? 
                    <strong key={i}>{part.slice(2, -2)}</strong> : 
                    part
                )}
                </p>
                <hr className="my-2 opacity-0"/>
              </div>
            )})}
            <hr className="mb-2 opacity-40"/>
            <a href={post.link} target="_blank" rel="noreferrer" className="text-3xl hover:cursor-pointer max-w-32 hover:opacity-100">
              <CiLink />
            </a>
        </div>
      </div>
    );
  };