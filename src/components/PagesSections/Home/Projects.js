import React, {useContext, useState} from 'react';
import {ProjectCard} from "../../index";
import styles from "./Projects.module.css"
import useMediaQuery, {Device} from "../../../hooks/useMediaQuery";
import {AppContext} from "../../../context/AppContext";

const Projects = (props) => {
    const appData = useContext(AppContext);
    const isPc = useMediaQuery(Device.xxl);
    const isMobile = useMediaQuery(Device.sm);
    const [filter, setFilter] = useState("Tutto");
    const filtersList = ["Tutto", "E-learning", "Sviluppo", "Arte"];
    const length = appData.projectsList.length;
    return (
        <>
            <section>
                <div className={styles.container} >
                    {isMobile ? <h3 className={styles.title} >
                        Progetti
                    </h3> : <h1 className={styles.title} >
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

                        {filter !== "Tutto" ? appData.projectsList.filter(x => x.tag === filter).map((x) => {
                            return <ProjectCard title={x.title} description={x.description} tag={x.tag} datore={x.datore} internal={x.internal} external={x.external}
                                                github={x.github} img={x.img} languages={x.languages}/>
                        }) : appData.projectsList.map((x) => {
                            return <ProjectCard title={x.title} description={x.description} tag={x.tag} datore={x.datore} internal={x.internal} external={x.external}
                                                github={x.github} img={x.img} languages={x.languages}/>})}
                        {/*Non ho capito, ma così funziona*/ !isPc ? ( length % 3 === 0 ? null : <div style={{visibility: "hidden"}}><ProjectCard  title={appData.projectsList[0].title}
                                                                                                      description={appData.projectsList[0].description}
                                                                                                      tag={appData.projectsList[0].tag}
                                                                                                      datore={appData.projectsList[0].datore}
                                                                                                      internal={appData.projectsList[0].internal}
                                                                                                      external={appData.projectsList[0].external}
                                                                                                      github={appData.projectsList[0].github}
                                                                                                      img={appData.projectsList[0].img}
                                                                                                      languages={appData.projectsList[0].languages}/> </div>) : null}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Projects;