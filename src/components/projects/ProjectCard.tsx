import { FC } from "react";
import ButtonLink from "../ui/ButtonLink";
import { IProject } from "../ProjectsData";

const ProjectCard: FC<IProject> = ({
  title,
  img,
  desc,
  live,
  source,
  tags,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 w-full border border-gray-50 p-4 rounded-lg shadow-[rgba(0,0,0,0.2)_2px_2px_6px_4px] transition-transform duration-500 will-change-transform
      hover:-translate-y-2 max-w-[400px] mx-auto"
    >
      <img
        loading="lazy"
        src={img}
        alt={title}
        className="w-[320px] h-[240px] object-cover rounded-md border border-gray-500"
      />
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap gap-2 ">
          {tags.map((tag, index) => (
            <div key={index} className="border border-text-clr px-2 rounded-md">
              {tag}
            </div>
          ))}
        </div>
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="flex-1">{desc}</p>
        <div className="flex gap-2 justify-between w-full">
          <ButtonLink href={live} ext={true}>
            <div className="flex gap-1 items-center">
              <i className="bx bx-desktop"></i>
              Проект
            </div>
          </ButtonLink>
          <ButtonLink href={source} ext={true}>
            <i className="bx bx-code-alt"></i>
            Исходный код
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
