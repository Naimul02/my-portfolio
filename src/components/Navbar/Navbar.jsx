import React from 'react';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {




  


    return (
        <div className="navbar px-10 md:px-36   py-2 fixed z-10 top-0 bg-purple-900  text-white">
  <div className="flex-1">
    <a className="text-xl font-bold">Naimul Islum</a>
  </div>
  <div className="flex-none hidden md:block">
    <ul className="menu menu-horizontal px-1  font-bold">
      <li><a href='#home' >Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>

      

      
      
    </ul>
  </div>
  <div className="dropdown dropdown-end block md:hidden">
  <div tabIndex={0} role="button" className=" m-1">
  <MdMenu  className="text-2xl font-semibold"/>
  </div>

 
       
  
  <ul tabIndex={0} className="dropdown-content mt-5 border rounded-none bg-purple-800  menu text-white font-semibold  z-[20] w-52 p-2 shadow">
  <li><a href='#home'className='border-b' >Home</a></li>
      <li><a href='#about'className='border-b'>About</a></li>
      <li><a href='#skills'className='border-b'>Skills</a></li>
      <li><a href="#projects"className='border-b'>Projects</a></li>
      <li><a href="#contact"className='border-b'>Contact</a></li>

     
  </ul>
 
   
</div>
</div>
    );
};

export default Navbar;