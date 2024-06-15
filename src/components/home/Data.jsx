import SvgSend from "../../assets/icons/Send";


function Data() {
    return (  
        <div className="home__data">
            <h1 className="home__title">Dmitry Martynov
            {/* <img src={hand} className='home__icon' alt="wave" /> */}
            </h1>
            <h3 className="home__subtitle">Frontend Develover</h3>
            <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, corrupti est dolorum inventore enim, assumenda delectus beatae.</p>

            <a href="#contact" className="button button--flex">
                Say hello
                <SvgSend/>
            </a>
        </div>
    )
}

export default Data;