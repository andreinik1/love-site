// src/components/screens/PoemScreen.jsx

import React from "react";
import { motion } from "framer-motion";
import "./PoemScreen.css";
import giftImage from "../../assets/PoemScreenCats.png"; // Путь к изображению подарка

const PoetScreen = () => {
  return (
    <div className="poem-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="poem-header"
      >
        Немношко поезии для любимой девочки <span>🥰</span>
      </motion.h1>
      <div className="poem-content">
        {/* Картинка слева */}
        <motion.img
          src={giftImage}
          alt="gift"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="poem-image"
        />

        {/* Текст справа */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="poem-text"
        >
          Ты, как солнце, в сердце светишь, <br />
          Греешь душу, как весна. <br />
          Мои чувства нежно встретишь, <br />
          Утром, если ты — одна. <br />
          Твои руки — теплый ветер, <br />
          Голос — музыка дождя. <br />
          Без тебя в огромном мире <br />
          Не смогу прожить ни дня. <br />
          Ты мой лучик, ты мой воздух, <br />
          Ты мой свет среди ночей. <br />
          Я люблю тебя так сильно, <br />
          С каждым вдохом все сильней. <br />
          В этот день пусть звезды скажут, <br />
          Что навеки мы вдвоем. <br />
          Моя нежность, мое счастье, <br />
          Ты мой мир и ты мой дом. <br />
          Каждый миг с тобой — подарок, <br />
          Каждый взгляд — огонь в груди. <br />
          Повторю: «Ты — мое счастье, <br />
          Никогда не уходи». <span>💖</span>
          <br />
        </motion.p>
      </div>
    </div>
  );
};

export default PoetScreen;
