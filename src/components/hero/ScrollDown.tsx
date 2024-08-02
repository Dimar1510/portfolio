import SvgScroll from "src/assets/icons/Scroll";

const ScrollDown = () => {
  return (
    <div>
      <a
        href="#about"
        className="flex items-center gap-1 hover:scale-105 transition-transform duration-300 w-fit py-2 will-change-transform"
      >
        <SvgScroll />
        <span className="text-title-clr font-medium">Листай вниз</span>
        <i className="uil uil-arrow-down text-xl text-title-clr"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
