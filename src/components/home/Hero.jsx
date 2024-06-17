import { motion } from "framer-motion";
import { navItems } from "../header/Header";
import { MScrollDown } from "./ScrollDown";

const HeroLink = ({ title, href }) => {
  return (
    <a
      href={"#" + href}
      className="uppercase border border-solid border-title-clr px-3 py-1 rounded-md bg-transparent transition-colors relative z-10 duration-300 overflow-hidden
        hover:text-accent-clr hover:border-title-clr 
        before:hover:scale-x-100 before:origin-left before:transition-transform before:bg-title-clr before:border-title-clr before:absolute before:left-0 before:top-0 before:w-full before:h-full before:scale-x-0 before:-z-10 before:duration-300"
    >
      {title}
    </a>
  );
};

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

const Hero = ({ refer }) => {
  return (
    <section className="min-h-svh flex items-center section" id="home">
      <div className="flex flex-col gap-28 px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-8"
          viewport={{ once: true }}
        >
          <motion.h1 custom={1} variants={textAnimation} className="text-6xl">
            Дмитрий Мартынов
          </motion.h1>

          <motion.h2
            custom={2}
            variants={textAnimation}
            className="font-medium text-4xl"
          >
            <span className="text-accent-clr">Fullstack</span> Разработчик
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
            className="flex gap-4"
            custom={4}
            variants={textAnimation}
            ref={refer}
          >
            {navItems.map((item) => {
              return (
                <HeroLink
                  title={item.title}
                  href={item.href}
                  key={item.title}
                />
              );
            })}
          </motion.div>

          <MScrollDown custom={5} variants={textAnimation} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
