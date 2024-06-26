export default function Projects() {
    const projects = [{"title":"Project 1","description":"Description 1","link":"https://www.google.com"},{"title":"Project 2","description":"Description 2","link":"https://www.google.com"},{"title":"Project 3","description":"Description 3","link":"https://www.google.com"}, {"title":"Project 4","description":"Description 4","link":"https://www.google.com"}
        , {"title":"Project 5","description":"Description 5","link":"https://www.google.com"}, {"title":"Project 6","description":"Description 6","link":"https://www.google.com"}, {"title":"Project 7","description":"Description 7","link":"https://www.google.com"}, {"title":"Project 8","description":"Description 8","link":"https://www.google.com"}, {"title":"Project 9","description":"Description 9","link":"https://www.google.com"}, {"title":"Project 10","description":"Description 10","link":"https://www.google.com"},
        {"title":"Project 11","description":"Description 11","link":"https://www.google.com"}, {"title":"Project 12","description":"Description 12","link":"https://www.google.com"}, {"title":"Project 13","description":"Description 13","link":"https://www.google.com"}, {"title":"Project 14","description":"Description 14","link":"https://www.google.com"}, {"title":"Project 15","description":"Description 15","link":"https://www.google.com"}, {"title":"Project 16","description":"Description 16","link":"https://www.google.com"}, {"title":"Project 17","description":"Description 17","link":"https://www.google.com"}, {"title":"Project 18","description":"Description 18","link":"https://www.google.com"}, {"title":"Project 19","description":"Description 19","link":"https://www.google.com"}, {"title":"Project 20","description":"Description 20","link":"https://www.google.com"}
    ]
    return (
        <div className='relative min-h-screen opacity-80 bottom-0 right-[-17px] text-right mb-[110px] min-w-[40%] overflow-y-scroll scroll-smooth'>
            <div className='flex flex-col gap-4 absolute top-[20%] w-full'>
                {projects.map((project) => (
                    <div className='flex flex-col gap-2'>
                        <a href={project.link} className='font-bold text-lg'>
                            {project.title}
                        </a>
                        <div className='font-light text-sm'>
                            {project.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}