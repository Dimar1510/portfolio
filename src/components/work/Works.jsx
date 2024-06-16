import { projectsData } from "./Data";
import ProjectItem from "./ProjectItem";

function Works() {
    return (  
        <div className="work__container container grid">
            {projectsData.map((item) => {
                return <ProjectItem item={item} key={item.id}/>
            })}
        </div>
    );
}

export default Works;