import coffeshop from "../../assets/images/coffeshop.jpg";
import cards from "../../assets/images/cards.jpg";
import battleship from "../../assets/images/battleship.jpg";
import weather from "../../assets/images/weather.jpg";
import todo from "../../assets/images/todo.jpg";

export const items = [
  {
    title: "Coffee shop",
    img: coffeshop,
    desc: "Пример frontend-составляющей интернет-магазина кофе. Присутствует возможность просматривать товары, добавлять их в корзину и управлять самой корзиной. Проект выполнен на React с использованием таких технологий как React Router, Context Provider, кастомные хуки и Fetch API.",
    live: "https://coffeeshop-house.netlify.app",
    source: "https://github.com/Dimar1510/shopping-cart",
  },
  {
    title: "Memory cards",
    img: cards,
    desc: "SPA на React. Простая игра 'на память', смысл которой состоит в том, чтобы не нажать одну и ту же карточку больше одного раза. Работа с React хуками, библиотекой React Parallax и взаимодействие с внешним API. ",
    live: "https://hearthstone-memory.netlify.app/",
    source: "https://github.com/Dimar1510/memory-card",
  },
  {
    title: "Battleship",
    img: battleship,
    desc: "Классический 'Морской бой' в игре против компьютера. Присутствует ручная и случайная расстановка короблей при помощи drag'n'drop. Противник делает выводы касательно возможгного расположения корабля после первого попадания и пробует наносить новые удары соответственно.",
    live: "https://dimar1510.github.io/battleship/",
    source: "https://github.com/Dimar1510/battleship",
  },
  {
    title: "Weather App",
    img: weather,
    desc: "Минималистичное приложение прогноза погоды, адаптированное под небольшие экраны. Используются базовые методы асинхронного JS и работы с API.",
    live: "https://dimar1510.github.io/weather-app/",
    source: "https://github.com/Dimar1510/weather-app",
  },
  {
    title: "Todo List",
    img: todo,
    desc: "Приложения для отслеживания задач, написанное на vanilla JS. Присутствует возможность добавлять, изменять, удалять задачи, управлять категориями (проектами),производить сортировку задач на главном экране.",
    live: "https://dimar1510.github.io/todo/",
    source: "https://github.com/Dimar1510/todo",
  },
];
