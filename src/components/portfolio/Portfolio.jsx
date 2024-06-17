import Projects from "./Projects";
import { motion } from "framer-motion";

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

const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="section flex flex-col gap-10"
      id="portfolio"
    >
      <motion.h2
        custom={1}
        variants={textAnimation}
        className="text-center font-medium text-4xl"
      >
        Релевантные <span className="text-accent-clr">проекты</span>
      </motion.h2>

      <Projects />
    </motion.section>
  );
};

export default Portfolio;
