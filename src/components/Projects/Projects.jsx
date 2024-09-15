
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import './Projects.css'



const Projects = () => {



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div id="projects" className="mb-20 max-w-6xl mx-auto">
                <div>
                <div className='text-center mx-3 md:mx-0'>
                <p className="text-orange-600 text-3xl font-bold ">__________________________</p>
                <h1 className='text-4xl font-bold pt-5 text-purple-600'><span className='mr-2'>**</span>My Projects <span className='ml-1'>**</span></h1>
                <p className="text-orange-600 text-3xl font-bold">___________________________</p>
            </div>
                </div>
<div className="slider-container mt-20 mx-3 md:mx-0">
        <Slider {...settings} className="w-[92%] lg:w-full mx-auto lg:mx-0">
        
      
      <div>
                <img src="https://i.ibb.co.com/8jRKgWK/cricket-store-1.png"className="rounded-xl lg:w-[530px]" alt="" />
                <div className="mt-5 space-y-3 max-w-[530px]">
                    <h1 className="text-2xl font-semibold">Cricket Store</h1>
                    <p className="text-lg"><span className="font-semibold">Short Description :</span> Cricket Store provide the service of the cricketers to buy cricket equipment.</p>
                    <ul className="space-y-2 text-justify">
                      <h2 className="text-lg font-semibold">Feature</h2>
                      <li>Users can view a variety of cricket products such as bats, balls, jerseys, etc., with detailed descriptions, prices, and reviews for each item.</li>
                      <li>Users can filter products by type, price, brand, or other criteria to easily find what they’re looking for.</li>
                      <li>Users can add products to their shopping cart for immediate purchase.
                      </li>
                      
                    </ul>
                    <div>
                        <h1 className="text-lg font-semibold">Technologies</h1>
                        <p className="text-lg font-semibold">React , react-router-dom , firebase , express , node.js , tailwind etc.</p>
                    </div>

                     <div>
                         <a href="https://cricketshop-e69fe.web.app/">
                                    
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">View Demo <FaArrowRight className="text-xl" /></button>
                            </a>

                            <a  href="https://github.com/Naimul02/cricket-client">
                                
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">Client <FaGithub className="text-xl"/></button>
                                </a>
                        <a href="https://github.com/Naimul02/cricket-server">
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mt-2 md:mt-0">Server <FaGithub className="text-xl"/></button>
                        </a>
                        </div>      
                        
                    
                </div>

          </div>



      


          <div>
                <img src="https://i.ibb.co/CQHHv1D/Talent.png"className="rounded-xl  lg:w-[530px]" alt="" />
                <div className="mt-5 space-y-3 max-w-[530px]">
                    <h1 className="text-2xl font-semibold">Talent Development</h1>

                    <p className="text-lg"><span className="font-semibold">Short Description :</span> Talent Development is a Educational  Website.</p>
                    <ul className="space-y-2 text-justify">
                      <h2 className="text-lg font-semibold">Feature</h2>
                      <li>The homepage has a navbar and a banner with some sponsors and classes.</li>
                      <li>On the homepage there is a feedback section below the classes there is a footer section below.</li>
                      <li>By clicking on the route named all Classes, a user can see all the available classes.
                      </li>
                    </ul>
                    <div>
                        <h1 className="text-lg font-semibold">Technologies</h1>
                        <p className="text-lg font-semibold">react.js , react-router-dom , firebase , react-hook-form , node.js , express , mongodb etc.</p>
                    </div>

                     <div>
                         <a href="https://assignment-12-a6ad4.web.app">
                                    
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">View Demo <FaArrowRight className="text-xl" /></button>
                            </a>

                            <a  href="https://github.com/Naimul02/Talent-Development-Client">
                                
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">Client <FaGithub className="text-xl"/></button>
                                </a>
                        <a href="https://github.com/Naimul02/Talent-Development-Server">
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mt-2 md:mt-0">Server <FaGithub className="text-xl"/></button>
                        </a>
                        </div>      
                        
                    
                </div>

          </div>
     
     

     
      <div>
                <img src="https://i.ibb.co/VJZm73X/restaurant.png"className="rounded-xl lg:w-[530px]" alt="" />
                <div className="mt-5 space-y-3 max-w-[530px]">
                    <h1 className="text-2xl font-semibold">Tastify Restaurant</h1>
                    <p className="text-lg"><span className="font-semibold">Short Description :</span> Tastify is a restaurant customer service website.</p>
                    <ul className="space-y-2 text-justify">
                      <h2 className="text-lg font-semibold">Feature</h2>
                      <li>The homepage of the website has a navbar , banner , top food sections , about our restaurant section , contact us section and has a footer.</li>
                      <li>There is a route called All Foods in the navbar, clicking on the route will show all the foods available</li>
                      <li>Also user can login or register by visiting our login page and register page.
                      </li>
                    </ul>
                    <div>
                        <h1 className="text-lg font-semibold">Technologies</h1>
                        <p className="text-lg font-semibold">React , react-router-dom , firebase , express , node.js , tailwind etc.</p>
                    </div>

                     <div>
                         <a href="https://assignment-11-client-de6fb.web.app">
                                    
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">View Demo <FaArrowRight className="text-xl" /></button>
                            </a>

                            <a  href="https://github.com/Naimul02/Tastify-client">
                                
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">Client <FaGithub className="text-xl"/></button>
                                </a>
                        <a href="https://github.com/Naimul02/Tastify-server">
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mt-2 md:mt-0">Server <FaGithub className="text-xl"/></button>
                        </a>
                        </div>      
                        
                    
                </div>

          </div>




     

          <div>
                <img src="https://i.ibb.co/8m7LCtY/book.png"className="rounded-xl  lg:w-[530px]" alt="" />
                <div className="mt-5 space-y-3">
                    <h1 className="text-2xl font-semibold">Book Vibe</h1>
                    <p className="text-lg"><span className="font-semibold">Short Description :</span> Book Vibe is a Book Shop  Website.</p>
                    <ul className="space-y-2 text-justify">
                      <h2 className="text-lg font-semibold">Feature</h2>
                      <li>The homepage has a navbar and a banner with some books.</li>
                      <li>
                      Among the cards on the home page. which on clicking the card will take you to the detail page of that card and the detailed information of that card will be shown
                      </li>
                      <li>By clicking on the route named listed books, a user can see all the available listed books.
                      </li>
                    </ul>
                    <div>
                        <h1 className="text-lg font-semibold">Technologies</h1>
                        <p className="text-lg font-semibold">react.js , react-router-dom , react-tabs , daisyui etc.</p>
                    </div>

                     <div>
                         <a href="https://book-vibe2.netlify.app/">
                                    
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">View Demo <FaArrowRight className="text-xl" /></button>
                            </a>

                            <a  href="https://github.com/Naimul02/Book-Vibe">
                                
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800 mr-2">Client <FaGithub className="text-xl"/></button>
                                </a>
                        {/* <a href="https://github.com/Naimul02/Tastify-server">
                        <button className="btn btn-sm px-4 bg-purple-900 text-white hover:bg-purple-800">Server <FaGithub className="text-xl"/></button>
                        </a> */}
                        </div>      
                        
                    
                </div>

          </div>

     
          
        </Slider>
      </div>
        </div>
    );
};

export default Projects;