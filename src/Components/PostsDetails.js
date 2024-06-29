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
            {post.content.split("\n").map((t,key) => {
              return (
              <div>
                <p key={key}>
                  {t}
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