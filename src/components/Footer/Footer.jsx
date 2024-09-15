import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer flex md:justify-between bg-purple-900 text-white px-6 md:px-20 items-center p-4">
  <aside className="grid-flow-col items-center">
    <img src="https://naimuljabir.com/wp-content/uploads/2024/04/Picsart_24-04-30_20-47-15-461-1-e1714489258309.png" className="w-16"/>
    <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    
    <a href="https://www.facebook.com/naimul.nadim.56">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
    <a href="https://github.com/Naimul02"><FaGithub className='text-2xl'/></a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;