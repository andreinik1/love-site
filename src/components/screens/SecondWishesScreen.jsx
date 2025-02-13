// src/components/screens/WishesScreen.jsx

import React from "react";
import { motion } from "framer-motion";
import "./WishesScreen.css";
import giftImage from "../../assets/SecondWishesScreen.png"; // Путь к изображению подарка

const WishesScreen = () => {
  return (
    <div className="wishes-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="wishes-header"
      >
        Для той, кому больше всех доверяю{" "}
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
          Я безумно рад, что увидел в тебе - тебя. Не идеализированный образ, не
          в ту, какой мне нужна бы была ты, до встречи с тобой, я увидел и
          влюбился в настоящую тебя. Хотя изначально меня просто что-то
          зацепило, что-то превосходящее банальное желание поиграть с тобой в
          доту, а потом я уже понял, что незаметно для себя поуши влюбился. Рад,
          что смог показать, что я хочу видеть в тебе ту, кто ты есть, любить,
          какую есть, всегда принимать, какую есть, быть рядом вне зависимости
          от обстоятельств. Да встречаемся мы меньше двух месяцев, нооо, я
          думаю, что наши отношения куда крепче, чем двухмесячные, и я уверен,
          что мы будем становиться ближе и ближе друг для друга.
        </motion.p>
      </div>
    </div>
  );
};

export default WishesScreen;
