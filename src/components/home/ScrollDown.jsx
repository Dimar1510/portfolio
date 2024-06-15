import SvgScroll from "../../assets/icons/Scroll";


function ScrollDown() {
    return (  
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <SvgScroll/>
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    );
}

export default ScrollDown;