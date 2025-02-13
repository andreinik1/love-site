// src/components/screens/WishesScreen.jsx

import React from "react";
import { motion } from "framer-motion";
import "./WishesScreen.css";
import giftImage from "../../assets/PlansHeart.png"; // Путь к изображению подарка

const PlansScreen = () => {
  return (
    <div className="wishes-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="wishes-header"
      >
        Для той, с которой всегда хочу быть рядом
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
          Думаешь почему сердечко не полное, да. То что заполнено - это то что
          уже было между нами, нооо, я хочу связать с тобой свою жизнь
          <span>🥺</span>. И думаю, что наверное через наши любимые 5 лет это
          сердечко наконец-то должно быть полным, так что просто оставайся рядом
          и продолжай дарить мне счастливые моменты с тобой, дабы заполнить это сердце полностью<span>🥰</span>.
        </motion.p>
      </div>
    </div>
  );
};

export default PlansScreen;
