import SvgScroll from "../../assets/icons/Scroll";
import { forwardRef } from "react";

import { motion } from "framer-motion";

const ScrollDown = forwardRef(({}, ref) => {
  return (
    <div className="mt-8" ref={ref}>
      <a
        href="#skills"
        className="flex items-center gap-1 hover:scale-105 transition-transform w-fit py-2"
      >
        <SvgScroll />
        <span className="text-title-clr font-medium">Листай вниз</span>
        <i className="uil uil-arrow-down text-xl text-title-clr"></i>
      </a>
    </div>
  );
});

export const MScrollDown = motion(ScrollDown);
