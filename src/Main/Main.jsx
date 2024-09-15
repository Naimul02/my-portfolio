import AboutMe from "../components/AboutMe/AboutMe";
import Banner from "../components/Banner/Banner";
import MySkills from "../components/MySkills/MySkills";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        // bg-[url('https://i.ibb.co/ggpJ22N/background-image.png')]
        <div  className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;