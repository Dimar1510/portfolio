import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./FormInput";
import Loading from "./Loading";

const ContactForm = () => {
  const form = useRef();

  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,

        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setMessage("Спасибо!");
          setLoad(false);
        },
        (error) => {
          setMessage("Ошибка...", error.text);
          setLoad(false);
        }
      );
    e.target.reset();
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-[350px] flex flex-col gap-4 relative"
    >
      {load ? <Loading /> : null}
      <FormInput
        type={"text"}
        name={"name"}
        placeholder={"Ваше имя"}
        load={load}
      />

      <FormInput
        type={"email"}
        name={"email"}
        placeholder={"Ваш email"}
        load={load}
      />

      <div className="relative h-44">
        <textarea
          disabled={load}
          name="message"
          cols="30"
          rows="10"
          className="absolute top-0 left-0 size-full border-title-clr border bg-transparent transition-colors duration-500 outline-none text-text-clr p-6 z-10 rounded-xl resize-none disabled:cursor-wait disabled:border-gray-400"
          placeholder="Напишите мне что-нибудь"
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-2">{load ? "" : message}</div>
        <button
          disabled={load}
          type="submit"
          className="uppercase w-max border border-solid border-title-clr px-3 py-1 rounded-md bg-transparent transition-colors relative z-10 duration-500 overflow-hidden cursor-pointer text-title-clr flex gap-2 items-center hover:text-accent-clr hover:border-title-clr before:hover:scale-x-100 before:origin-left before:transition-transform before:bg-title-clr before:border-title-clr before:absolute before:left-0 before:top-0 before:size-full before:scale-x-0 before:-z-10 before:duration-300 disabled:cursor-wait disabled:before:bg-transparent disabled:text-gray-400 disabled:border-gray-400"
        >
          {load ? (
            <>
              <i className="bx bx-loader"></i>Отправка...
            </>
          ) : (
            <>
              <i className={"uil uil-envelope-alt"}></i>Отправить
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
