import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PostsData from '../Data/PostsData';
import PostsDetails from '../Components/PostsDetails';


export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const posts = PostsData;

    const handleBack = () => {
        setSelectedPost(null);
    };
    return (
        <div className='relative min-h-screen opacity-80 bottom-0 right-[-17px] text-right mb-[110px] min-w-[70%] xl:min-w-[60%] overflow-y-scroll scroll-smooth'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                exit={{ opacity: 0 }}
                >
            {!selectedPost ? (
                <div className='flex flex-col gap-4 absolute top-[20%] w-full p-10 pb-80'>
                    <ul>
                    {posts.map((post) => (
                        <li 
                            key={post.id} 
                            className="flex flex-row-reverse items-baseline mb-4 gap-4 text-nowrap hover:text-gray-500 transition-all duration-300 hover:cursor-pointer hover:animate-pulse font-montserrat tracking-[-2.5px]"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className='text-xl 2xl:text-6xl xl:text-2xl font-extralight'>
                                {post.title}
                            </div>
                            <div className='font-bold text-sm flex-wrap tracking-normal'>
                                {post.date}
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            ) : (
                <div className="w-full">
                  <PostsDetails post={selectedPost} onBack={handleBack} />
                </div>
              )}
            </motion.div>
        </div>
    )
}
