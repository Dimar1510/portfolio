import { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            
            form.current, {
                publicKey:  import.meta.env.VITE_PUBLIC_KEY,
            })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
          e.target.reset()
    };


    return (  
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@gmail.com</span>

                            <a href="#" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">123-456-789</span>

                            <a href="#" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fb112</span>

                            <a href="#" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="contact__form-input" 
                            placeholder="Your name"/>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="contact__form-input" 
                            placeholder="Your email"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea 
                                name="message" 
                                cols="30" 
                                rows="10" 
                                className="contact__form-input " 
                                placeholder="Write about your idea">
                            </textarea>
                        </div>
                        <button type="submit" className='button button--flex'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;