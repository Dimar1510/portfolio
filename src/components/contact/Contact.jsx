import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

const Contact = () => {
  const cards = [
    {
      type: "Город",
      value: "Москва",
      icon: "uil uil-location-point",
    },
    {
      type: "Email",
      value: "dimar1150@gmail.com",
      icon: "uil uil-envelope-alt",
    },
    {
      type: "Телефон",
      value: "8-916-481-19-62",
      icon: "uil uil-phone-alt",
    },
  ];

  return (
    <section className="section flex flex-col gap-16 py-16" id="contact">
      <h2 className="text-center font-medium text-4xl">
        <span className="text-accent-clr">Связаться</span> со мной
      </h2>

      <div className="flex gap-8 items-center">
        <div className="flex flex-col gap-4 flex-1 items-center">
          {cards.map((card) => {
            return (
              <ContactCard
                type={card.type}
                value={card.value}
                icon={card.icon}
                key={card.type}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
