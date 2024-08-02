import { FC } from "react";

interface IProps {
  title: string;
  icon: string;
  href: string;
}

const HeaderItem: FC<IProps> = ({ title, icon, href }) => {
  return (
    <li>
      <a
        href={"#" + href}
        className="flex gap-1 items-center text-title-clr transition-all duration-300 font-medium uppercase"
      >
        <i className={"laptop:text-2xl uil uil-" + icon}></i>
        <span className="laptop:hidden">{title}</span>
      </a>
    </li>
  );
};

export default HeaderItem;
