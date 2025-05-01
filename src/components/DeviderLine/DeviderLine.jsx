import React from "react";
import { motion } from "framer-motion";
function DeviderLine() {
  return (
    <div>
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="opacity-60 shadow-orange-600 absolute bottom-0 left-0 h-[1px] bg-orange-600"
      />
      </motion.div>
      
    </div>
  );
}

export default DeviderLine;
