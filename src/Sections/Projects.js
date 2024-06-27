export default function Projects() {
    const projects = [{"title":"LLMs Collective Intelligence","description":"Description 2","link":"https://www.google.com"}, {"title":"2D Physics Engine","description":"Description 1","link":""}, {"title":"Full-Stack Notes Application","description":"Description 3","link":"https://www.google.com"}, {"title":"Blogger Web Application","description":"Description 4","link":"https://www.google.com"}
        , {"title":"Project 5","description":"Description 5","link":"https://www.google.com"}, {"title":"Project 6","description":"Description 6","link":"https://www.google.com"}, {"title":"Project 7","description":"Description 7","link":"https://www.google.com"}, {"title":"Project 8","description":"Description 8","link":"https://www.google.com"}, {"title":"Project 9","description":"Description 9","link":"https://www.google.com"}, {"title":"Project 10","description":"Description 10","link":"https://www.google.com"},
        {"title":"Project 11","description":"Description 11","link":"https://www.google.com"}, {"title":"Project 12","description":"Description 12","link":"https://www.google.com"}, {"title":"Project 13","description":"Description 13","link":"https://www.google.com"}, {"title":"Project 14","description":"Description 14","link":"https://www.google.com"}, {"title":"Project 15","description":"Description 15","link":"https://www.google.com"}, {"title":"Project 16","description":"Description 16","link":"https://www.google.com"}, {"title":"Project 17","description":"Description 17","link":"https://www.google.com"}, {"title":"Project 18","description":"Description 18","link":"https://www.google.com"}
    ]
    return (
        <div className='relative min-h-screen opacity-80 bottom-0 right-[-17px] text-right mb-[110px] min-w-[50%] overflow-y-scroll scroll-smooth'>
            <div className='flex flex-col gap-4 absolute top-[20%] w-full p-10 pb-80'>
                {projects.map((project) => (
                    <a href={project.link} className='flex flex-row-reverse items-baseline gap-4 text-nowrap hover:text-gray-500 transition-all duration-300 hover:animate-pulse'>
                        <a className='text-6xl font-extralight'>
                            {project.title}
                        </a>
                        <div className='font-bold text-sm flex-wrap'>
                            {project.description}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}