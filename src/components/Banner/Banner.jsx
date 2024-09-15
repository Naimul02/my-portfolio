import { FaDownload } from "react-icons/fa6";
import resume  from './naimul-resume.pdf';

import { useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter'



const Banner = () => {
    



    return (
        // bg-[url('https://t3.ftcdn.net/jpg/05/00/00/26/360_F_500002650_DNXWdhS0XZvFfCvNzcBnFBSAx3H3n22X.jpg')]
        <div id="home" className="mt-16   py-20 bg-no-repeat bg-cover bg-left ">
            <div className="px-5 md:px-36   flex flex-col md:flex-row items-center md:justify-between">
                {/* text content */}
                <div className="space-y-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold">Hello -------------------</h2>
                    <h1 className="text-2xl md:text-4xl font-bold uppercase">I'M Naimul Islum</h1>
                    
                    <h2 className="text-2xl font-bold text-purple-600">
                            <span>
                                I'm a 
                            <Typewriter  words={[' WEB DEVELOPER' , ' FRONT-END-DEVELOPER' , ' REACT-DEVELOPER']}
                    loop={0}
                    />
                            </span>
                    </h2>
                    <p className="max-w-[550px] text-lg text-base-600">Welcome to my portfolio.I have knowledge of several technologies and create real  life projects.I love my work.Always try to keep myself updated. Explore my portfolio to witness the manifestation of my expertise, collaboration, and dedication to technology-driven solutions.</p>
                    <div>
                    <button className='uppercase btn bg-purple-800 text-white hover:bg-purple-700 px-6'><a href={resume} download={'resume'} className="flex items-center gap-4">Download Resume <FaDownload className="text-lg"/></a></button>
                        
                    </div>

                </div>

                {/* img */}
                
                <div className="border-8 shadow-2xl  md:w-[400px] md:h-[400px]  mt-8 md:mt-0  shadow-purple-400 hover:shadow-purple-500 border-purple-800 rounded-full">
                        <img src="https://i.ibb.co/t40BhtD/naimulislum.png" className="rounded-full w-full h-full" alt="" />
                </div>

                
            </div>

        </div>
    );
};

export default Banner;