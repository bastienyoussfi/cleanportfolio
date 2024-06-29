import SkillsList from "./SkillsList";
import { CiLink } from 'react-icons/ci';

export default function ProjectDetails({ project, onBack }) {
    return (
      <div className="relative p-16 ml-40 max-w-[700px]">
        <button 
          onClick={onBack}
          className="font-montserrat font-normal hover:underline text-white rounded mb-20"
        >
          Back to projects
        </button>
        <div className="flex flex-col opacity-85 text-start mt-40">
          <div className="text-3xl">{project.title}</div>
          <div className="text-base mb-4 text-gray-400">{project.date} - Bastien Youssfi</div>
          <div className="flex text-xl gap-2 mb-4">
            <SkillsList skills={project.skills} />
          </div>
            {project.description.split("\n").map((t,key) => {
              return (
              <div>
                <p key={key}>
                  {t}
                </p>
                <hr className="my-4 opacity-40"/>
              </div>
            )})}
            <a href={project.link} target="_blank" rel="noreferrer" className="text-3xl hover:cursor-pointer max-w-32 hover:opacity-100">
              <CiLink />
            </a>
        </div>
      </div>
    );
  };