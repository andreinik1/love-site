// src/components/screens/WishesScreen.jsx

import React from "react";
import { motion } from "framer-motion";
import "./WishesScreen.css";
import giftImage from "../../assets/FisrtWishesScreen.png"; // Путь к изображению подарка

const WishesScreen = () => {
  return (
    <div className="wishes-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="wishes-header"
      >
        Для самой особенной
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
          Очень жаль конечно, что мы не сможем встретиться в этот день. Ты не
          обнимешь меня, не поцелуешь... Но ничего не поделать, поэтому решил
          сделать тебе вот такой маленький, своеобразный подарочек. Когда
          встретимся, я дам тебе кое-что символичненькое скажем так, что должно
          тебе понравится, но пока что только так. Ну и кстати ко всему , не
          смотря на то что день влюбленности 14 февраля, я влюблен в тебя
          каждый день, безумно влюблен и люблю с каждым днём всё сильнее и сильнее.
          Моя некогда пылкая и казалось бы, слепая любовь, переросла в нечто
          большее, в привязанность, в безграничное доверие и в желании связать
          наши жизни. <span>🥰</span>
        </motion.p>
      </div>
    </div>
  );
};

export default WishesScreen;
