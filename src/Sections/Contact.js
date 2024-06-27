import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className=''>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                exit={{ opacity: 0 }}
                >
            <div className="flex flex-col gap-2 m-8 font-bold text-xl max-w-20 opacity-80">
                <div className="hover:text-gray-400 hover:animate-pulse transition-all duration-300 hover:cursor-pointer">
                    <FaLinkedin />
                </div>
                <div className="hover:text-gray-400 hover:animate-pulse transition-all duration-300 hover:cursor-pointer">
                    <FaGithub />
                </div>
                <div className="hover:text-gray-400 hover:animate-pulse transition-all duration-300 hover:cursor-pointer">
                    <FaTwitter />
                </div>
                <a href="" className="hover:text-gray-400 hover:animate-pulse transition-all duration-300 hover:cursor-pointer">
                    <FaInstagram />
                </a>
            </div>
            </motion.div>
        </div>
    )
}