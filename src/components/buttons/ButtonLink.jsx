const ButtonLink = ({ href, children, ext }) => {
  return (
    <a
      href={href}
      target={ext ? "_blank" : ""}
      className="uppercase border border-solid border-title-clr px-3 py-1 rounded-md bg-transparent transition-colors relative z-10 duration-300 overflow-hidden cursor-pointer
          hover:text-accent-clr hover:border-title-clr
  
          before:hover:scale-x-100 before:origin-left before:transition-transform before:bg-title-clr before:border-title-clr before:absolute before:left-0 before:top-0 before:size-full before:scale-x-0 before:-z-10 before:duration-300"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
