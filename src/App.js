import Homepage from "./Pages/Homepage"
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="fixed w-[100%] h-[100%] bg-[#0D0D0D]">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          exit={{ opacity: 0 }}
        >
          <Homepage />
        </motion.div>
        <div className="absolute bottom-[10px] left-9 ">
          <div className="text-[11px] text-[#F2F2F2] opacity-50 font-medium leading-5 select-none">
          Reproduction, reposting or modification of the content of this site is prohibited.
          </div>
        </div>
    </div>
  )
}