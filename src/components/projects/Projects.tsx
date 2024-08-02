import ProjectCard from "./ProjectCard";
import { items } from "../ProjectsData";
import { useEffect, useState } from "react";

function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (selectedTags.length > 0) {
      const newItems = items.filter((item) =>
        selectedTags.every((selectedTag) => item.tags.includes(selectedTag))
      );
      setFilteredItems(newItems);
    } else {
      setFilteredItems(items);
    }
  }, [selectedTags]);

  const handleClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags].filter((item) => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const array = new Set(items.flatMap((item) => item.tags));

  return (
    <section
      className="section flex flex-col gap-60 py-24 laptop:gap-28 laptop:py-14"
      id="allProjects"
    >
      <div className="flex flex-col gap-16">
        <h2 className="text-center font-medium text-4xl phone:text-3xl">
          <span className="text-accent-clr">Релевантные</span> проекты
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[...array].map((tag) => (
            <div
              key={tag}
              className={`border border-text-clr rounded-md hover:-translate-y-1 transition-transform will-change-transform ${
                selectedTags.includes(tag) && "bg-accent-clr text-body-clr"
              }`}
            >
              <button className=" px-4 py-2 " onClick={() => handleClick(tag)}>
                {tag}
              </button>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                img={item.img}
                desc={item.short}
                live={item.live}
                source={item.source}
                tags={item.tags}
              />
            ))
          ) : (
            <h4 className="text-2xl text-center">Ничего не найдено...</h4>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
