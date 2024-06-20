import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./SkillsData";
import { tools } from "./ToolsData";

function Skills() {
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

  const cardAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section
      className="section flex flex-col gap-60 py-24 laptop:gap-28 laptop:py-14"
      id="skills"
    >
      <motion.div
        className="flex flex-col gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <motion.h2
          custom={1}
          variants={textAnimation}
          className="text-center font-medium text-4xl phone:text-3xl"
        >
          <span className="text-accent-clr">Стек</span> технологий
        </motion.h2>

        <motion.div
          custom={2}
          variants={textAnimation}
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-10"
        >
          {skills.map((item, index) => {
            return (
              <SkillCard
                name={item.name}
                icon={item.icon}
                key={item.name}
                variants={cardAnimation}
                custom={index + 3}
              />
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: true }}
      >
        <motion.h2
          custom={1}
          variants={textAnimation}
          className="text-center font-medium text-4xl"
        >
          <span className="text-accent-clr">Инструменты</span> для разработки
        </motion.h2>

        <motion.div
          custom={2}
          variants={textAnimation}
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-10"
        >
          {tools.map((item, index) => {
            return (
              <SkillCard
                name={item.name}
                icon={item.icon}
                key={item.name}
                variants={cardAnimation}
                custom={index + 3}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
