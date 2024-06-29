import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import Home from '../Sections/Home'
import Navigation from '../Components/Navigation'
import Projects from '../Sections/Projects'
import Contact from '../Sections/Contact'
import Blog from '../Sections/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

export default function Homepage() {
    const [admireMode, setAdmireMode] = useState(false);

    const toggleAdmireMode = () => {
        setAdmireMode(true);
      };

    useEffect(() => {
    const handleMouseMove = () => {
        if (admireMode) {
        setAdmireMode(false);
        }
    };
    
    if (admireMode) {
        window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
    }, [admireMode]);
    
    return (
        <Router>
        <div className="fixed w-[calc(100%-4.5rem)] h-[calc(100%-4.5rem)] overflow-hidden left-9 top-9 right-9 bottom-9 text-white border border-opacity-80 border-gray-400">
            <div className='opacity-60  z-[-1]'>
                <ShaderGradientCanvas
                    importedFiber={{ ...fiber, ...drei, ...reactSpring }}
                    style={{
                    position: 'absolute',
                    top: 0,
                    pointerEvents: "none",
                    }}
                    >
                    <ShaderGradient
                        control='query'
                        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%230c101d&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
                        >
                    </ShaderGradient>
                </ShaderGradientCanvas>
            </div>
            <CSSTransition
                in={!admireMode}
                timeout={300}
                classNames="fade"
                unmountOnExit
                >
                <div className='flex justify-between relative select-none'>
                    {!admireMode && (
                        <>
                            <div className='flex flex-col ml-8 mt-8 opacity-80'>
                                <div className='font-extralight xl:text-6xl text-xl select-none font-montserrat ml-[-6px] tracking-tight'>
                                    Bastien Youssfi
                                </div>
                                <div className='font-light text-sm select-none'>
                                    Full Stack Developer
                                </div>
                                <Navigation />
                                <button
                                    className="relative mr-96 mt-[13px] font-bold text-xs hover:text-gray-400 hover:animate-pulse transition-all duration-300"
                                    onClick={toggleAdmireMode}
                                    >
                                    <NavLink
                                        to={'/admire'}
                                        className=''
                                    >
                                        <div>Admire</div>
                                        
                                    </NavLink>
                                </button>
                            </div>
                            
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/blog" element={<Blog />} />
                            </Routes>
                        </>
                    )}
                </div> 
            </CSSTransition>
            <CSSTransition
                in={admireMode}
                timeout={300}
                classNames="fade"
                unmountOnExit
                >
                <div className="absolute inset-0 flex mt-[820px] justify-center text-gray-400 opacity-75 text-xs">
                    <p>Move your mouse to exit admire mode</p>
                </div>
            </CSSTransition>
        </div>
        </Router>
    )
}