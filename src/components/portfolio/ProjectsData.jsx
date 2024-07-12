import coffeeshop from "../../assets/images/coffeeshop.jpg";
import cards from "../../assets/images/cards.jpg";
import battleship from "../../assets/images/battleship.jpg";
import weather from "../../assets/images/weather.jpg";
import todo from "../../assets/images/todo.jpg";
import social from "../../assets/images/social.jpg";

export const items = [
  {
    title: "Chirickter",
    img: social,
    desc: "Fullstack приложение, вдохновленное социальной сетью X/Twitter. Создание/удаление постов, лайки, комментарии, авторизация JWT, оформление 'подписок' на других пользователей. Среди других особенностей - возможность загрузки изображения для аватара или поста, переключение цветовой темы",
    live: "https://chirickter.vercel.app/",
    source: "https://github.com/Dimar1510/social",
  },
  {
    title: "Coffee shop",
    img: coffeeshop,
    desc: "Макет интернет-магазина, специализирующегося на продаже кофейных зерен. Приложение работает с внешним API для получения данных о продуктах и ​​предлагает базовые функции корзины с локальным хранилищем.",
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
    desc: "Игра 'Морской бой' против компьютера. Присутствует автоматическая расстановка кораблей и ручная drag'n'drop. Противник делает выводы касательно возможного расположения корабля после первого попадания и пробует наносить новые удары соответственно.",
    live: "https://dimar1510.github.io/battleship/",
    source: "https://github.com/Dimar1510/battleship",
  },
  {
    title: "Weather App",
    img: weather,
    desc: "Минималистичное приложение прогноза погоды, адаптированное под небольшие экраны. Фон меняется в зависимости от времени суток в искомой локации. Используются базовые методы асинхронного JS и работы с API.",
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
