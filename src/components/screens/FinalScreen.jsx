// src/components/screens/WishesScreen.jsx

import React from "react";
import { motion } from "framer-motion";
import "./WishesScreen.css";
import giftImage from "../../assets/FinalScreenCats.png"; // Путь к изображению подарка

const FinalScreen = () => {
  return (
    <div className="wishes-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="wishes-header"
      >
        Люблю тебя <span>❤️</span>
      </motion.h1>
      <div className="wishes-content">
        {/* Картинка слева */}
        <motion.img
          src={giftImage}
          alt="gift"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="wishes-image"
        />

        {/* Текст справа */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="wishes-text"
        >
          Вот такая, своеобразная валентинка у меня получилась, солнышко. Не
          совсем валентинка, но чуть инная ее альтернатива, надеюсь тебе
          понравилось и тебе интересно было вспомнить, как от безразличных друг
          другу людей, мы стали парой, и безумно важными и близкими друг для
          друга. Вот ну и еще всегда помни, что ты — моя самая лучшая и
          единственная, и я так благодарен, что ты есть в моей жизни. Люблю тебя
          безмерно и навсегда!<span>💕</span>
        </motion.p>
      </div>
    </div>
  );
};

export default FinalScreen;
