import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectDetails from '../Components/ProjectsDetails';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { id: 1, title: "LLMs Collective Intelligence", date: "Mar.2024", description: "..." },
        { id: 2, title: "2D Physics Engine", date: "Feb.2024", description: "..." },
        { id: 3, title: "Full-Stack Notes Application", date: "Feb.2024", description: "..." },
        { id: 4, title: "Portfolio", date: "Jun.2024", description: "..." },
        { id: 5, title: "Blogger Web Application", date: "Apr.2024", description: "..." },
        { id: 6, title: "E-Commerce Website", date: "Apr.2024", description: "..." },
        { id: 7, title: "Tic-Tac-Toe Game", date: "Feb.2024", description: "..." },
        { id: 8, title: "Weather App", date: "Feb.2024", description: "..." },
        { id: 9, title: "To-Do List", date: "Feb.2024", description: "..." },
        { id: 10, title: "Chat Application", date: "Feb.2024", description: "..." },
        // ... add other projects
    ];

    const handleBack = () => {
        setSelectedProject(null);
    };
    return (
        <div className='relative min-h-screen opacity-80 bottom-0 right-[-17px] text-right mb-[110px] min-w-[50%] overflow-y-scroll scroll-smooth'>
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
                            className="flex flex-row-reverse items-baseline mb-4 gap-4 text-nowrap hover:text-gray-500 transition-all duration-300 hover:cursor-pointer hover:animate-pulse"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className='text-6xl font-extralight'>
                                {project.title}
                            </div>
                            <div className='font-bold text-sm flex-wrap'>
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