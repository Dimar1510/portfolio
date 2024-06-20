import PropTypes from "prop-types";

const FooterSocialItem = ({ name, href, icon }) => {
  return (
    <div>
      <a
        aria-label={name}
        href={href}
        className="text-text-clr text-2xl inline-flex size-full rounded-lg transition-all duration-500 hover:scale-125 hover:rotate-[360deg] will-change-transform p-1"
        target="_blank"
      >
        <i className={icon}></i>
      </a>
    </div>
  );
};

export default FooterSocialItem;

FooterSocialItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
};
