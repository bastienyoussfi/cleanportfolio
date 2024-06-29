import React from 'react'
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud'

const ICON_SLUGS = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    }))
  }
  
  return <a>Loading</a>
}

const DynamicIconCloud = () => {
    const icons = useIcons(ICON_SLUGS)
  
    return <Cloud>
      {icons}
    </Cloud>
}
 
export default function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 pb-20 pt-8 opacity-100">
      <DynamicIconCloud iconSlugs={ICON_SLUGS} />
    </div>
  );
}
 
