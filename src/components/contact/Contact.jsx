import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";

const cards = [
  {
    value: "Москва",
    icon: "uil uil-location-point",
  },
  {
    value: "dimar1150@gmail.com",
    icon: "uil uil-envelope-alt",
  },
  {
    value: "8-916-481-19-62",
    icon: "uil uil-phone-alt",
  },
];

const Contact = () => {
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
      className="section flex flex-col gap-16 py-16 laptop:gap-8"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
    >
      <motion.h2
        className="text-center font-medium text-4xl phone:text-3xl"
        custom={1}
        variants={textAnimation}
      >
        <span className="text-accent-clr">Связаться</span> со мной
      </motion.h2>

      <div className="flex gap-8 items-center laptop:flex-col">
        <motion.div
          className="flex flex-col gap-4 flex-1 items-center"
          custom={2}
          variants={textAnimation}
        >
          {cards.map((card) => {
            return (
              <ContactCard
                value={card.value}
                icon={card.icon}
                key={card.value}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 flex-1 w-full items-center"
          custom={3}
          variants={textAnimation}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
