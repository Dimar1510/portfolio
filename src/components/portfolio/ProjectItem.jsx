import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonLink from "../buttons/ButtonLink";

const ProjectItem = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const cardAnimation = {
    hidden: (custom) => ({
      x: custom ? -250 : 250,
      opacity: 0,
    }),
    visible: () => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    }),
  };

  return (
    <div className="h-screen snap-center overflow-hidden">
      <div className="flex items-center justify-center size-full overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          className="custom-container h-full m-auto flex items-center justify-center gap-12"
        >
          <motion.div
            variants={cardAnimation}
            custom={true}
            className="flex-1 h-1/2"
            ref={ref}
          >
            <img
              src={item.img}
              alt={item.title}
              className="size-full object-cover object-left-top"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col gap-8"
            variants={cardAnimation}
            style={{ y }}
          >
            <h2 className="text-7xl">{item.title}</h2>
            <p className="text-title-clr text-xl">{item.desc}</p>
            <div className="flex gap-4">
              <ButtonLink href={item.live} ext={true}>
                <div className="flex gap-1 items-center">
                  <i className="bx bx-desktop"></i>
                  Проект
                </div>
              </ButtonLink>
              <ButtonLink href={item.source} ext={true}>
                <div className="flex gap-1 items-center">
                  <i className="bx bx-code-alt"></i>
                  Исходный код
                </div>
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectItem;
