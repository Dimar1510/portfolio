import { FC, ReactNode } from "react";

interface IProps {
  href: string;
  children: ReactNode;
  ext: boolean;
}

const ButtonLink: FC<IProps> = ({ href, children, ext }) => {
  return (
    <a
      href={href}
      target={ext ? "_blank" : ""}
      className="uppercase border border-solid border-title-clr px-2 py-1 rounded-md bg-transparent transition-colors relative z-10 duration-500 overflow-hidden cursor-pointer text-title-clr flex gap-1 items-center justify-center
          hover:text-black hover:border-transparent
          before:hover:scale-x-100 before:origin-left before:transition-transform before:bg-accent-clr before:border-accent-clr before:absolute before:size-full before:scale-x-0 before:-z-10 before:duration-300"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
