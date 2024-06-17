import { projectsData } from "./Data";
import { MProjectItem } from "./ProjectItem";

import { motion } from "framer-motion";

const cardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.35, duration: 0.5 },
  }),
};

const Projects = () => {
  return (
    <motion.div
      className="custom-container grid grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {projectsData.map((item, index) => {
        return (
          <MProjectItem
            item={item}
            key={item.title}
            variants={cardAnimation}
            custom={index + 1}
          />
        );
      })}
    </motion.div>
  );
};

export default Projects;
