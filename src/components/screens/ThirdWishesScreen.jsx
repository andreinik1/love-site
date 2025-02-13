// src/components/screens/WishesScreen.jsx

import React from "react";
import { motion } from "framer-motion";
import "./WishesScreen.css";
import giftImage from "../../assets/ThirdWishesScreen.png"; // Путь к изображению подарка

const WishesScreen = () => {
  return (
    <div className="wishes-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="wishes-header"
      >
        Для самой любимой и желанной{" "}
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
          Вот, ты — не просто моя любовь, ты — моя радость, моя поддержка, а еще
          мечты и переживания <span>🥺</span>. Каждое мгновение с тобой — это
          настоящий подарок судьбы, и я хочу сделать всё, чтобы ты была
          счастлива, улыбалась каждый день и так было всегда. Пусть этот день
          напомнит тебе снова, что ты для меня самая лучшая и прекрасная. Пусть
          этот день будет таким же особенным, как и ты для меня, пусть он будет
          наполнен радостью и моей безграничной любовью,
          солнышко. <span>❤️</span>
        </motion.p>
      </div>
    </div>
  );
};

export default WishesScreen;
