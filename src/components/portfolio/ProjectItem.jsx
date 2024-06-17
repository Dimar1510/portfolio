import { forwardRef } from "react";

import { motion } from 'framer-motion'

const ProjectItem = forwardRef(({item}, ref) => {
    return ( 
        <div className="work__card" ref={ref}>
            <img src={item.image} alt={item.title} className="work__img"/>
            <h3 className="work__title">{item.title}</h3>
            <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
})

export default ProjectItem;

export const MProjectItem = motion(ProjectItem)