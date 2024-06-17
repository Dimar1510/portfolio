import { useRef, useState } from "react";

const HeaderItem = ({ title, icon, href }) => {
  return (
    <li>
      <a
        href={"#" + href}
        className="flex gap-1 items-center text-title-clr transition-all duration-300 font-medium text-lg"
      >
        <i className={"uil uil-" + icon}></i>
        {title}
      </a>
    </li>
  );
};

export const navItems = [
  {
    title: "Навыки",
    icon: "file-alt",
    href: "skills",
  },
  {
    title: "Портфолио",
    icon: "scenery",
    href: "portfolio",
  },
  {
    title: "Обо мне",
    icon: "user",
    href: "about",
  },
  {
    title: "Контакты",
    icon: "message",
    href: "contact",
  },
];

const Header = ({ inView }) => {
  const header = useRef(null);
  // const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50  h-16 flex items-center px-4 transition-transform duration-500 backdrop-blur-md
      ${!inView ? "translate-y-0" : "-translate-y-[110%]"}`}
      ref={header}
    >
      <nav className="flex justify-end items-center gap-4 custom-container">
        <div>
          <ul className="flex gap-8 justify-end">
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
          {/* <div className="hidden tablet:block">
            <i
              className="uil uil-times nav__close"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div> */}
        </div>

        {/* <div
          className="hidden tablet:block font-medium"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="uil uil-apps"></i>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
