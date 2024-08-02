import coffeeshop from "../assets/images/coffeeshop.jpg";
import cards from "../assets/images/cards.jpg";
import battleship from "../assets/images/battleship.jpg";
import weather from "../assets/images/weather.jpg";
import todo from "../assets/images/todo.jpg";
import social from "../assets/images/social.jpg";
import money from "../assets/images/money.jpg";
import resume from "../assets/images/resume.jpg";
import travel from "../assets/images/travel.jpg";
import portfolio from "../assets/images/portfolio.png";
export interface IProject {
  title: string;
  img: string;
  desc?: string;
  live: string;
  source: string;
  short?: string;
  tags: string[];
}

export const items: IProject[] = [
  {
    title: "Chirickter",
    img: social,
    desc: "Fullstack приложение, вдохновленное социальной сетью X/Twitter. Создание/удаление постов, лайки, комментарии, авторизация JWT, оформление 'подписок' на других пользователей. Среди других особенностей - возможность загрузки изображения для аватара или поста.",
    live: "https://chirickter.vercel.app/",
    source: "https://github.com/Dimar1510/social",
    short: "Fullstack приложение, вдохновленное социальной сетью X/Twitter.",
    tags: [
      "MERN Stack",
      "React",
      "NextUI",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind",
    ],
  },
  {
    title: "Where's the money?",
    img: money,
    desc: "Fullstack приложение для отслеживания домашних расходов и доходов. Позволяет вести учет и собирать статистику по времени и категориям. Используются библиотеки AG Grid и AG Charts для работы с таблицами и диаграммами соответственно. Присутствует возможность экспорта данных в Excel.",
    live: "https://wherethemoney.vercel.app/",
    source: "https://github.com/Dimar1510/money-tracker",
    short:
      "Fullstack приложение для отслеживания домашних финансов и ведения статистики.",
    tags: [
      "MERN Stack",
      "React",
      "NextUI",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind",
      "Framer Motion",
    ],
  },
  {
    title: "Coffee shop",
    img: coffeeshop,
    desc: "Макет интернет-магазина, специализирующегося на продаже кофейных зерен. Приложение работает с внешним API для получения данных о продуктах и ​​предлагает базовые функции корзины с локальным хранилищем.",
    live: "https://coffeeshop-house.netlify.app",
    source: "https://github.com/Dimar1510/shopping-cart",
    short: "Макет интернет-магазина по продаже кофейных зерен.",
    tags: ["React", "Redux Toolkit", "RTK Query", "Tailwind", "MUI", "API"],
  },
  {
    title: "Portfolio",
    img: portfolio,
    desc: "Вы сейчас здесь...",
    live: "https://dimarportfolio.netlify.app/",
    source: "https://github.com/Dimar1510/portfolio",
    short: "Вы сейчас здесь...",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Memory cards",
    img: cards,
    desc: "SPA на React. Простая игра 'на память', смысл которой состоит в том, чтобы не нажать одну и ту же карточку больше одного раза. Работа с React хуками, библиотекой React Parallax и взаимодействие с внешним API. ",
    live: "https://hearthstone-memory.netlify.app/",
    source: "https://github.com/Dimar1510/memory-card",
    short:
      "Простая игра 'на память', смысл которой состоит в том, чтобы не нажать одну и ту же карточку больше одного раза.",
    tags: ["React", "SCSS", "Игра", "API"],
  },
  {
    title: "Battleship",
    img: battleship,
    desc: "Игра 'Морской бой' против компьютера. Присутствует автоматическая расстановка кораблей и ручная drag'n'drop. Противник делает выводы касательно возможного расположения корабля после первого попадания и пробует наносить новые удары соответственно.",
    live: "https://dimar1510.github.io/battleship/",
    source: "https://github.com/Dimar1510/battleship",
    short:
      "Игра 'Морской бой' против компьютера. Противник делает выводы касательно возможного расположения корабля.",
    tags: ["Vanilla JS", "SCSS", "Игра"],
  },
  {
    title: "Weather App",
    img: weather,
    desc: "Минималистичное приложение прогноза погоды, адаптированное под небольшие экраны. Фон меняется в зависимости от времени суток в искомой локации. Используются базовые методы асинхронного JS и работы с API.",
    live: "https://dimar1510.github.io/weather-app/",
    source: "https://github.com/Dimar1510/weather-app",
    short:
      "Минималистичное приложение прогноза погоды, адаптированное под небольшие экраны.",
    tags: ["Vanilla JS", "SCSS", "API"],
  },
  {
    title: "Vanilla JS Todo",
    img: todo,
    desc: "Приложение для отслеживания задач, написанное на vanilla JS. Присутствует возможность добавлять, изменять, удалять задачи, управлять категориями (проектами),производить сортировку задач на главном экране.",
    live: "https://dimar1510.github.io/todo/",
    source: "https://github.com/Dimar1510/todo",
    short:
      "Приложение для отслеживания задач с возможностью деления их на категории и управления проектами.",
    tags: ["Vanilla JS", "SCSS"],
  },
  {
    title: "CV Builder",
    img: resume,
    live: "https://dimar-resume.netlify.app/",
    source: "https://github.com/Dimar1510/cv-project",
    short:
      "Конструктор, позволяющий легко и быстро создать современное резюме для последующей печати или сохранения в PDF.",
    tags: ["React", "Redux Toolkit", "SCSS"],
  },
  {
    title: "Mountain Explorer",
    img: travel,
    live: "https://explore-mountains.netlify.app/",
    source: "https://github.com/Dimar1510/travel-landing",
    short:
      "Лендинг компании, предоставляющей услуги по организации горных экспедиций.",
    tags: ["React", "Tailwind", "Landing", "Framer Motion"],
  },
];
