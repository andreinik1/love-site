// components/common/AnimatedTransition.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTransition = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedTransition;
