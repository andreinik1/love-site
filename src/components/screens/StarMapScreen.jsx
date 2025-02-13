import React from "react";
import StarMap from "../common/StarMap";
import { motion } from "framer-motion";
import "./StarMapScreen.css"; // Стили для экрана

const StarMapScreen = () => {
  return (
    <div className="star-map-screen">
      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="star-map-title"
      >
        Небесная карта наших отношений
      </motion.h1>

      {/* Компонент с картой */}
      <StarMap />
    </div>
  );
};

export default StarMapScreen;
