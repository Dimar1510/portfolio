import './about.css'
import aboutImg from '../../assets/images/about.jpg'
import CV from '../../assets/cv/cv.pdf'
import Info from './info';
import SvgFiles from '../../assets/icons/Files';

function About() {
    return ( 
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={aboutImg} alt="about image" className='about__img'/>
                <div className="about__data">
                    <Info/>

                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolore assumenda ullam quasi inventore sapiente, quibusdam nemo commodi tenetur dicta iusto doloremque quisquam! Dolorum non eum sint voluptatum tempore velit.
                    </p>

                    <a download="" href={CV} className="button button--flex">
                        Download CV
                        <SvgFiles/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;