
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';


const Contact = () => {
  
  const form = useRef();
  console.log(form.current);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_h1mz2rq', 'template_kczfl4m', form.current, {
          publicKey: 'ZDxp9iAnajODxBydM',
        })
        .then(
          () => {
            console.log('SUCCESS!');

            toast.success("Your Message has been sent successfully!")
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div id="contact" className="w-full   bg-white">
        <div className="max-w-6xl mx-auto py-16">
        <div className='text-center mx-3 md:mx-0'>
                <p className="text-orange-600 text-3xl font-bold ">__________________________</p>
                <h1 className='text-3xl font-bold pt-5 text-purple-600'><span className='mr-2'>**</span>Contact with me<span className='ml-1'>**</span></h1>
                <p className="text-orange-600 text-3xl font-bold">___________________________</p>
            </div>

            
            <div className='text-center mx-auto  flex mt-10'>
                <div className='max-w-[500px] mx-auto flex gap-5'>
                <a href="https://www.facebook.com/naimul.nadim.56"><FaFacebook className='text-5xl text-purple-900'/></a>
                <a href="https://github.com/Naimul02"><FaGithub className='text-5xl text-purple-900'/></a>
                <a href="https://www.linkedin.com/in/naimulislumemon/"><FaLinkedin className='text-5xl text-purple-900'/></a>
                </div>
            </div>
            

      <div className="flex flex-col lg:flex-row-reverse items-center">
        <div  className="text-center lg:text-left lg:w-[50%] lg:h-[442px]">
        
            
            <img src="https://i.pinimg.com/originals/38/db/07/38db0791549a04e0139e90cbdb8a5f32.gif"className="w-full h-full rounded-xl object-cover"/>
    
        </div>
    <div  className="card  w-full lg:w-[50%]">
        <div>
      <form className="card-body"ref={form} onSubmit={sendEmail}>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-purple-900 font-semibold">Name</span>
          </label>
          <input type="text" placeholder="name"name="from_name"id="fullName" className="px-4 py-3 border bg-purple-900  border-purple-900 text-white" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-purple-900 font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email"name="from_email"id="email_id" className="px-4 py-3 border bg-purple-900 text-white border-purple-900" required />
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text text-xl text-purple-900 font-semibold">Message</span>
          </label>
        <textarea id="message" className="h-[150px] bg-purple-900 text-white px-4 py-3 border border-purple-900"name="message" placeholder="your feedback message"></textarea>
        </div>
       
        <div className="form-control mt-6">
          <button className="btn bg-purple-900 hover:bg-purple-800 text-white text-xl font-semibold">Submit</button>
        </div>
      </form>

      <ToastContainer />
    </div>
    </div>
  </div>
        </div>
</div>
    );
};

export default Contact;