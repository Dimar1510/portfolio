const HeaderItem = ({ title, icon, href }) => {
  return (
    <li>
      <a
        href={"#" + href}
        className="flex gap-1 items-center text-title-clr transition-all duration-300 font-medium uppercase"
      >
        <i className={"uil uil-" + icon}></i>
        {title}
      </a>
    </li>
  );
};

export default HeaderItem;
