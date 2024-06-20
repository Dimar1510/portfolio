import { useRef } from "react";
import ThemeSwitch from "../hero/ThemeSwitch";
import HeaderItem from "./HeaderItem";
import { navItems } from "./navItems";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Header = ({ inView, dark, setDark }) => {
  const header = useRef(null);

  return (
    <header
      className={twMerge(
        "w-full fixed left-0 z-50  h-16  items-center px-4 transition-transform duration-500 backdrop-blur-md laptop:backdrop-blur-none laptop:bg-body-clr  flex",
        !inView ? "translate-y-0" : "-translate-y-[110%]"
      )}
      ref={header}
    >
      <nav className="flex justify-end items-center gap-4 custom-container">
        <div className="flex justify-between w-full px-8 tablet:px-2 ">
          <ul className="flex gap-8 justify-end items-center text-lg desktop:text-base laptop:justify-between phone:gap-4">
            <HeaderItem title={"Домой"} icon={"estate"} href={"home"} />
            {navItems.map((item) => {
              return (
                <HeaderItem
                  title={item.title}
                  icon={item.icon}
                  href={item.href}
                  key={item.title}
                />
              );
            })}
          </ul>
          <div className="border-title-clr border-2 size-8 flex items-center justify-center rounded-[50%]">
            <ThemeSwitch dark={dark} setDark={setDark} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  inView: PropTypes.bool,
  dark: PropTypes.bool,
  setDark: PropTypes.func,
};
