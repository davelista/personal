import React, {useState} from 'react';
import {ProjectCard} from "../../index";
import projectsList from "../../../projects.json";
import styles from "./Projects.module.css"
import useMediaQuery, {Device} from "../../../hooks/useMediaQuery";

const Projects = (props) => {
    const isMobile = useMediaQuery(Device.sm);
    const [filter, setFilter] = useState("Tutto");
    const filtersList = ["Tutto", "E-learning", "Sviluppo", "Arte"];
    return (
        <>
            <section>
                <div className={styles.container}>
                    {isMobile ? <h3 className={styles.title}>
                        Progetti
                    </h3> : <h1 className={styles.title}>
                        Progetti
                    </h1>}
                    <div className={styles.filters}>
                        {filtersList.map((x) => {
                            return (<div className={filter === x ? styles.filterActive : styles.filter} onClick={() => setFilter(x)}>
                                {x}
                            </div>)
                        })}

                    </div>
                    <div className={styles.section}>

                        {filter !== "Tutto" ? projectsList.filter(x => x.tag === filter).map((x) => {
                            return <ProjectCard title={x.title} description={x.description} tag={x.tag} datore={x.datore} internal={x.internal} external={x.external}
                                                github={x.github} img={x.img}/>
                        }) : projectsList.map((x) => {
                            return <ProjectCard title={x.title} description={x.description} tag={x.tag} datore={x.datore} internal={x.internal} external={x.external}
                                                github={x.github} img={x.img}/>})}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;