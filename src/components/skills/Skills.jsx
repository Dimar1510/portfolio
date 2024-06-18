import { motion } from "framer-motion";
import { forwardRef } from "react";

const SkillCard = motion(
  forwardRef(({ name, icon }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-2 w-full border border-title-dark-clr p-4 rounded-lg shadow-[rgba(255,255,255,0.2)_2px_2px_6px_1px] transition-transform
    hover:scale-105"
      >
        <i className={`${icon} text-7xl text-title-dark-clr`}></i>
        {name}
      </div>
    );
  })
);

function Skills({}) {
  const skills = [
    {
      name: "JavaScript",
      icon: "bx bxl-javascript",
    },
    {
      name: "React",
      icon: "bx bxl-react",
    },
    {
      name: "Express",
      icon: "devicon-express-original",
    },
    {
      name: "TypeScript",
      icon: "bx bxl-typescript",
    },
    {
      name: "Sass",
      icon: "bx bxl-sass",
    },
    {
      name: "Tailwind",
      icon: "bx bxl-tailwind-css",
    },
    {
      name: "Node JS",
      icon: "bx bxl-nodejs",
    },
    {
      name: "MongoDB",
      icon: "bx bxl-mongodb",
    },
  ];

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
    <motion.section
      className="section flex flex-col gap-10 py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      id="skills"
    >
      <motion.h2
        custom={1}
        variants={textAnimation}
        className="text-center font-medium text-4xl"
      >
        <span className="text-accent-clr">Стек</span> технологий
      </motion.h2>

      <motion.div
        custom={2}
        variants={textAnimation}
        className="grid grid-cols-4 gap-10"
      >
        {skills.map((item, index) => {
          return (
            <SkillCard
              name={item.name}
              icon={item.icon}
              key={item.name}
              variants={cardAnimation}
              custom={index + 1}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Skills;
