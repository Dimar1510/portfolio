import CV from "../../assets/cv/cv.pdf";
import ButtonLink from "../ui/ButtonLink";
import { motion } from "framer-motion";
import SvgWebDeveloper from "../../assets/images/WebDeveloper";

function About() {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };

  return (
    <motion.section
      className="section flex flex-col gap-16 py-16 tablet:pb-4 tablet:pt-14"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h2
        className="text-center font-medium text-4xl phone:text-3xl"
        custom={1}
        variants={textAnimation}
      >
        Обо <span className="text-accent-clr">мне</span>
      </motion.h2>

      <div className="custom-container flex gap-10 laptop:flex-col laptop:gap-0">
        <motion.div
          className="flex-1 flex items-center justify-center"
          custom={2}
          variants={textAnimation}
        >
          <div className="size-[350px] min-w-[250px] object-contain ">
            <SvgWebDeveloper />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 p-4 flex flex-col gap-8 justify-center"
          custom={3}
          variants={textAnimation}
        >
          <p className="text-lg">
            Привет! Меня зовут Дмитрий Мартынов, и я веб-разработчик,
            увлекающийся созданием креативных, практичных и отзывчивых
            веб-приложений. Я быстро учусь и всегда стремлюсь расширить свои
            знания и навыки.
          </p>
          <p className="text-lg">
            В моем портфолио представлены несколько избранных приложений, а по
            ссылке ниже можно ознакомиться со всеми (почти) проектами, над
            которыми мне приходилось работать.
          </p>
          <p className="text-lg">
            Моя цель — продолжать совершенствоваться как разработчик и принимать
            участие в создании качественных и эффективных продуктов.
          </p>
          <motion.div
            className="flex gap-4"
            custom={4}
            variants={textAnimation}
          >
            <ButtonLink href={CV} ext={true}>
              <i className="bx bx-file"></i>
              Резюме
            </ButtonLink>
            <ButtonLink href={"https://github.com/Dimar1510"} ext={true}>
              <i className="devicon-github-original"></i>
              Github
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
