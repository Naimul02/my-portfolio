
import { FaDownload } from "react-icons/fa6";
import resume  from './naimul-resume.pdf';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const AboutMe = () => {
    
    return (
        <div>
             

        <div id="about" className='my-20 px-2 lg:px-0'>
            

            <div className='hero-content flex-col-reverse md:flex-row md:justify-around md:items-center max-w-5xl mx-auto mt-16'>

                

                <div className="">
                <img src="https://i.ibb.co/pxpPM79/Picsart-24-09-04-20-30-08-679.jpg" className="mt-8 md:mt-0 border-4  md:w-[400px] md:h-[500px] rounded-lg border-purple-800 shadow-2xl shadow-purple-300 hover:shadow-purple-500" alt="" />
                </div>
                

                
                <div>
                <Tabs>
    <TabList className="">
      <Tab>About Me</Tab>
      <Tab>Education and Certifation</Tab>
    </TabList>

    <TabPanel>
    <div className='space-y-6 mt-6 px-5 md:px-0'>
                    <h1 className='text-3xl font-bold'>LET’S <br/>
                        INTRODUCE ABOUT <br />
                        MYSELF</h1>
                    <p className='max-w-[400px] text-lg'>
                 Hello,I am Naimul Islum.I am a web developer who is very interested in learning new technologies.
                        <br /><br />

                        I always try to be honest towards my work.I choose web development as my career because I have love and dedication towards it.
                    </p>
                    <button className='uppercase btn bg-purple-800 text-white hover:bg-purple-700 px-6'><a href={resume} download={'resume'} className="flex items-center gap-4">Download Resume <FaDownload className="text-lg"/></a></button>
                </div>
    </TabPanel>
    <TabPanel>
    <div className='space-y-6 px-5 md:px-0 mt-6 h-[400px]'>
                    <div className="space-y-4">
                    <h1 className='text-3xl font-bold text-purple-600'>
                        Education</h1>
                    
                        <div>
                        <h2 className="text-2xl font-semibold text-blue-500">Feni Computer Institude</h2>
                    <p className="text-lg">Diploma In Engineering</p>
                    <p className="text-lg">Data Telecommunication & Networking Technology</p>
                    <p className="text-lg">2020 - 2024</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                    <h1 className='text-3xl font-bold text-purple-600'>
                        Courses</h1>
                    
                        <div>
                        <h2 className="text-2xl font-semibold text-blue-500">Programming Hero</h2>
                    <p className="text-lg">Complete Web Development Course</p>
                    
                    <p className="text-lg">Dec 2023 - June 2024</p>
                        </div>
                    </div>
                    
                </div>
    </TabPanel>
  </Tabs>
                </div>
                
               
            </div>
        </div>
        </div>
    );
};

export default AboutMe;