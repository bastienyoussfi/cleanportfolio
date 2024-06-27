import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="relative min-h-screen opacity-80 select-none">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                exit={{ opacity: 0 }}
                >
            <div className="absolute bottom-0 right-0 text-left mb-[110px] min-w-40">
                <div className="text-sm font-medium leading-5">
                    Hello, I'm <br></br>Bastien <br></br>Youssfi. <br></br>I'm a Full Stack <br></br>Developer. I'm passionate<br></br> about coding <br></br>and I love <br></br>to learn <br></br>new things. 
                </div>
                {/* Add the rest of your text here */}
            </div>
            </motion.div>
        </div>
    )
}