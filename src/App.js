import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import WishesScreen from "./components/screens/WishesScreen";
import SecondWishesScreen from "./components/screens/SecondWishesScreen";
import ThirdWishesScreen from "./components/screens/ThirdWishesScreen";
import StarMapScreen from "./components/screens/StarMapScreen";
import PlansScreen from "./components/screens/PlansScreen";
import FinalScreen from "./components/screens/FinalScreen";
import NavigationArrows from "./components/common/NavigationArrows";
import AnimatedTransition from "./components/common/AnimatedTransition";
import BackgroundAnimation from "./components/common/BackgroundAnimation";
import DocumentLayout from "./components/common/DocumentLayout";
import phoneImg from "./assets/phoneImg.png";
import "./App.css"; // Стили для мобильной заглушки
import PoetScreen from "./components/screens/PoemScreen";

// Список экранов
const screens = [
  WelcomeScreen,
  WishesScreen,
  SecondWishesScreen,
  ThirdWishesScreen,
  StarMapScreen,
  PlansScreen,
  PoetScreen,
  FinalScreen,
];

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-screen">
        <img
          src={phoneImg}
          alt="Для просмотра нужен компьютер"
          className="mobile-image"
        />
        <p className="mobile-text">
          Любимая моя, прости, но нужен компьютер, чтобы посмотреть ❤️
        </p>
      </div>
    );
  }

  // Переключение на следующий экран
  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen((prev) => prev + 1);
    }
  };

  // Переключение на предыдущий экран
  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen((prev) => prev - 1);
    }
  };

  // Получение текущего экрана
  const ScreenComponent = screens[currentScreen];

  return (
    <div className="app">
      {/* Фоновая анимация */}
      <BackgroundAnimation />

      {/* Плавный переход между экранами */}
      <AnimatedTransition>
        <DocumentLayout>
          {/* Отображение текущего экрана */}
          <ScreenComponent />
        </DocumentLayout>
      </AnimatedTransition>

      {/* Стрелки навигации */}
      <NavigationArrows
        onNext={nextScreen}
        onPrev={prevScreen}
        isFirstScreen={currentScreen === 0} // Первый экран
        isLastScreen={currentScreen === screens.length - 1} // Последний экран
      />
    </div>
  );
};

export default App;
