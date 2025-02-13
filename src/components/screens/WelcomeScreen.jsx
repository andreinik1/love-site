import React from "react";
import { motion } from "framer-motion";
import "./WelcomeScreen.css";
import WelcomeScreenCat from "../../assets/WelcomeScreenCat.png"; // Путь к картинке

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="welcome-text"
      >
        Дорогая моя зайка, с 14 февраля тебя! 💜
      </motion.h1>
      <motion.div
        className="content-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src={WelcomeScreenCat} alt="Welcome Illustration" className="welcome-image" />
        <p className="welcome-subtext">
          Этот небольшой, скажем так, подарок, я сделал, чтобы показать, как ты
          мне ценна. <br />
          Напомнить каждый момент, который сделал тебя для меня самым близким и
          дорогим человеком. <br />
          Надеюсь, тебе понравится, любимая! Жмакай на стрелочки{" "}
          <span>🥺</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
