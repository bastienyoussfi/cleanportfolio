import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import Home from '../Sections/Home'
import Navigation from '../Components/Navigation'
import Projects from '../Sections/Projects'
import About from '../Sections/About'
import Blog from '../Sections/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Homepage() {
    
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
            <div className='flex justify-between relative'>
                <div className='flex flex-col ml-8 mt-8 opacity-80'>
                    <div className='font-extralight text-6xl select-none'>
                        Bastien Youssfi
                    </div>
                    <div className='font-light text-sm select-none'>
                        Full Stack Developer
                    </div>
                    <Navigation />
                </div>

                {/* Sections */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </div>
        </Router>
    )
}