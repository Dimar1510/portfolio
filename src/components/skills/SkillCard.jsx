import { motion } from "framer-motion";
import { forwardRef } from "react";

const SkillCard = motion(
  forwardRef(({ name, icon }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center justify-center gap-2 w-full border border-title-dark-clr p-4 rounded-lg shadow-[rgba(255,255,255,0.2)_2px_2px_6px_1px] transition-transform duration-500 will-change-transform
      hover:-translate-y-2 [&>*:nth-child(5)]:col-start-2"
      >
        <i className={`${icon} text-7xl text-title-dark-clr`}></i>
        {name}
      </div>
    );
  })
);

export default SkillCard;
