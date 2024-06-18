import aboutImg from "../../assets/images/web-developer.svg";
import CV from "../../assets/cv/cv.pdf";
import ButtonLink from "../buttons/ButtonLink";
import { motion } from "framer-motion";

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
      className="section flex flex-col gap-16 py-16"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
    >
      <motion.h2
        className="text-center font-medium text-4xl"
        custom={1}
        variants={textAnimation}
      >
        Обо <span className="text-accent-clr">мне</span>
      </motion.h2>

      <div className="custom-container flex flex-wrap gap-10">
        <motion.div
          className="flex-1 flex items-center justify-center"
          custom={2}
          variants={textAnimation}
        >
          <img
            src={aboutImg}
            alt="about image"
            className="size-[350px] min-w-[250px] object-contain "
          />
        </motion.div>

        <motion.div
          className="flex-1 p-4 flex flex-col gap-8 justify-center"
          custom={3}
          variants={textAnimation}
        >
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolore assumenda ullam quasi inventore sapiente, quibusdam nemo
            commodi tenetur dicta iusto doloremque quisquam! Dolorum non eum
            sint voluptatum tempore velit.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolore assumenda ullam quasi inventore sapiente, quibusdam nemo
            commodi tenetur dicta iusto doloremque quisquam! Dolorum non eum
            sint voluptatum tempore velit.
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
