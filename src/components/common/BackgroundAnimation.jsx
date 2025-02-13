import React, { useEffect, useState } from "react";
import "./BackgroundAnimation.css";
import heart1 from "../../assets/heart1.png";
import heart2 from "../../assets/heart2.png";

const heartImages = [heart1, heart2];

const BackgroundAnimation = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    let index = 0;

    // Функция добавления нового сердечка
    const addHeart = () => {
      const id = Date.now(); // Уникальный ID
      const newHeart = {
        id,
        src: heartImages[index % heartImages.length], // Круговое переключение картинок
        top: Math.random() * window.innerHeight * 0.8, // Рандомная высота
        left: Math.random() * window.innerWidth * 0.8, // Рандомная ширина
      };
      setObjects((prevObjects) => {
        // Проверяем, чтобы сердечки не спавнились слишком близко
        const tooClose = prevObjects.some(
          (obj) =>
            Math.abs(obj.top - newHeart.top) < 30 &&
            Math.abs(obj.left - newHeart.left) < 30
        );
        if (!tooClose) {
          return [...prevObjects, newHeart];
        }
        return prevObjects;
      });
      index++;
    };

    // Интервал для добавления сердечек
    const interval = setInterval(() => {
      if (objects.length < 14) {
        addHeart();
      }
    }, Math.random() * 2000 + 3000); // Интервал 3–5 секунд

    return () => clearInterval(interval); // Удаление интервала при размонтировании
  }, [objects]);

  return (
    <div className="background-animation">
      {objects.map((obj) => (
        <img
          key={obj.id}
          src={obj.src}
          className="animated-object"
          style={{ top: `${obj.top}px`, left: `${obj.left}px` }}
          alt="Heart"
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
