import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectDetails from '../Components/ProjectsDetails';
import ProjectsData from '../Data/ProjectsData';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = ProjectsData;

    const handleBack = () => {
        setSelectedProject(null);
    };
    return (
        <div className='relative min-h-screen opacity-80 bottom-0 right-[-17px] text-right mb-[110px] min-w-[70%] xl:min-w-[50%] overflow-y-scroll scroll-smooth'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                exit={{ opacity: 0 }}
                >
            {!selectedProject ? (
                <div className='flex flex-col gap-4 absolute top-[20%] w-full p-10 pb-80'>
                    <ul>
                    {projects.map((project) => (
                        <li 
                            key={project.id} 
                            className="flex flex-row-reverse items-baseline mb-4 gap-4 text-nowrap hover:text-gray-500 transition-all duration-300 hover:cursor-pointer hover:animate-pulse font-montserrat tracking-[-2.5px]"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className='text-xl 2xl:text-6xl xl:text-2xl font-extralight'>
                                {project.title}
                            </div>
                            <div className='font-bold text-sm flex-wrap tracking-normal'>
                                {project.date}
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            ) : (
                <div className="w-full">
                  <ProjectDetails project={selectedProject} onBack={handleBack} />
                </div>
              )}
            </motion.div>
        </div>
    )
}