import PropTypes from "prop-types";

const HeaderItem = ({ title, icon, href }) => {
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

HeaderItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  href: PropTypes.string,
};
