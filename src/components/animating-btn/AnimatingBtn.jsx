import React from "react";
import { motion } from "framer-motion";
export default function AnimatingBtn({ children, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      {...props}>
      {children}
    </motion.button>
  );
}
