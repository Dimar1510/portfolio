import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonLink from "../ui/ButtonLink";
import { IProject } from "../ProjectsData";

const ProjectItem = ({ item }: { item: IProject }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const cardAnimation = {
    hidden: (custom: number) => ({
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
          viewport={{ amount: 0.5 }}
          className="custom-container h-full m-auto flex items-center justify-center gap-12 laptop:flex-col"
        >
          <motion.div
            variants={cardAnimation}
            custom={true}
            className="flex-1 h-1/2 flex justify-center items-center"
            ref={ref}
          >
            <div className="-m-2 w-full rounded-xl bg-gradient-to-tr from-gray-700 to-gray-500 p-1 ring-1 ring-inset ring-gray-900/10 ">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 size-full object-cover object-center max-h-[500px]"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col gap-8"
            variants={cardAnimation}
            style={{ y }}
          >
            <h2 className="text-7xl laptop:text-accent-clr tablet:text-4xl">
              {item.title}
            </h2>
            <p className="text-title-clr text-xl">{item.desc}</p>
            <div className="flex gap-4">
              <ButtonLink href={item.live} ext={true}>
                <div className="flex gap-1 items-center">
                  <i className="bx bx-desktop"></i>
                  Проект
                </div>
              </ButtonLink>
              <ButtonLink href={item.source} ext={true}>
                <i className="bx bx-code-alt"></i>
                Исходный код
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectItem;
