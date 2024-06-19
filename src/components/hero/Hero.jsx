import { motion } from "framer-motion";
import { navItems } from "../header/Header";
import ScrollDown from "./ScrollDown";
import ButtonLink from "../buttons/ButtonLink";
import ThemeSwitch from "./ThemeSwitch";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 1 },
  }),
};

const iconAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 1 },
  }),
};

const Hero = ({ refer, dark, setDark }) => {
  return (
    <section className="min-h-svh flex items-center section" id="home">
      <div className="flex flex-col gap-28 px-10 tablet:px-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-8"
          viewport={{ once: true }}
        >
          <motion.h1
            custom={1}
            variants={textAnimation}
            className="text-6xl tablet:text-4xl"
          >
            Дмитрий Мартынов
          </motion.h1>

          <motion.h2
            custom={2}
            variants={textAnimation}
            className="font-medium text-4xl tablet:text-3xl"
          >
            <span className="text-accent-clr">Frontend</span> Разработчик
          </motion.h2>

          <motion.p
            custom={3}
            variants={textAnimation}
            className="max-w-[400px]"
          >
            Веб-разработка открывает для меня бесконечные возможности для
            совершенствования в новых задачах.
          </motion.p>

          <motion.div
            className="flex gap-4 laptop:grid laptop:grid-cols-2"
            custom={4}
            variants={textAnimation}
            ref={refer}
          >
            {navItems.map((item) => {
              return (
                <ButtonLink href={"#" + item.href} key={item.title}>
                  {item.title}
                </ButtonLink>
              );
            })}
          </motion.div>
          <div className="flex justify-between items-center mt-8">
            <motion.div className="" custom={5} variants={iconAnimation}>
              <ScrollDown />
            </motion.div>
            <motion.div
              className="text-[50px] inline-flex"
              custom={6}
              variants={iconAnimation}
            >
              <ThemeSwitch dark={dark} setDark={setDark} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
