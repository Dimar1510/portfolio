import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { items } from "../ProjectsData";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, duration: 0.5 },
  }),
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      id="portfolio"
      className="py-32 laptop:pt-12 tablet:pb-4"
      ref={ref}
    >
      <div className="sticky top-0 left-0 pt-16 pb-4 text-center bg-body-clr z-10 transition-[background-color] duration-500">
        <motion.h2
          custom={1}
          variants={textAnimation}
          className="text-center font-medium text-4xl phone:text-3xl"
        >
          Избранные <span className="text-accent-clr">проекты</span>
        </motion.h2>
        <motion.div
          custom={2}
          variants={textAnimation}
          style={{ scaleX: scrollYProgress }}
          className="h-1 bg-text-clr custom-container mt-4 transition-colors duration-500"
        ></motion.div>
      </div>
      <div className="section">
        {items.map(
          (item, index) =>
            index < 3 && <ProjectItem item={item} key={item.title} />
        )}
      </div>
    </motion.section>
  );
};

export default Portfolio;
