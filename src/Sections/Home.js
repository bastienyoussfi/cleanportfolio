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
            </motion.div>
        </div>
    )
}