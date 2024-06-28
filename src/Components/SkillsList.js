import React from 'react';
import { FaReact, FaPython,  } from 'react-icons/fa';
import { SiJavascript, SiGithub, SiTailwindcss, SiVisualstudiocode, SiExpress, SiPytorch, SiCplusplus, SiMongodb, SiFlask, SiOpenai } from 'react-icons/si';
import { SiTensorflow } from 'react-icons/si';

const SkillIcon = ({ skill }) => {
  switch (skill) {
    case 'react':
      return <FaReact />;
    case 'python':
      return <FaPython />;
    case 'tensorflow':
      return <SiTensorflow />;
    case 'javascript':
        return <SiJavascript />;
    case 'cpp':
        return <SiCplusplus />;
    case 'github':
        return <SiGithub />;
    case 'tailwind':
        return <SiTailwindcss />;
    case 'visualstudio':
        return <SiVisualstudiocode />;
    case 'express':
        return <SiExpress />;
    case 'pytorch':
        return <SiPytorch />;
    case 'mongodb':
        return <SiMongodb />;
    case 'flask':
        return <SiFlask />;
    case 'gpt':
        return <SiOpenai />;
    default:
      return null;
  }
};

const SkillsList = ({ skills }) => {
  return (
    <div className="flex space-x-2">
      {skills.map((skill, index) => (
        <SkillIcon key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsList;