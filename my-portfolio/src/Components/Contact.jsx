import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineEmail, MdOutlineAddIcCall } from "react-icons/md";



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fs17frh', 'template_655vsik', form.current, 'HkJ0y2Nppc9HXq0yp')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!')
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          toast.error('Something Wrong!')
      });
  };
     
    
    return (
  
        <section 
        data-aos-easing="linear"
        data-aos-duration="1500" id="contact" className="py-16 min-h-screen lg:p-20 ">
              <div className="container mx-auto">
           <div className="flex flex-col lg:flex-row p-5 lg:p-1">
                 {/* text  */}
                 <div className="flex-1 mb-4 lg:mb-0 flex justify-start items-center ">
               <div>
               <h4 className="text-xl uppercase text-teal-500 font-medium mb-2 tracking-wide">Get In Touch</h4>
                <h2 className="text-4xl  lg:text-6xl font-bold">Let &#39;s Work <br /> Together!</h2>
                <div className='mt-5 flex flex-col lg:flex-row gap-4'>
                <span ><MdOutlineEmail className='inline' /> qudrati1999@gmail.com</span>
                <span><MdOutlineAddIcCall className='inline' /> +880 1567917041</span>
                </div>
               </div>
              </div>
              {/* form  */}
              <form  data-aos="flip-up" className="flex-1 border border-gray-950 rounded-2xl flex flex-col gap-5 pb-20 p-6" ref={form} onSubmit={sendEmail}>
      <input
        className="py-3 px-2 transition-all w-full outline-none rounded-md border-b border-gray-500 focus:border-teal-500"
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
      />

      <input
        className="py-3 px-2 transition-all w-full outline-none  border-b border-gray-500 focus:border-teal-500  focus:outline-none"
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
      />
     
      <textarea
        className="py-6 px-2  mb-10 transition-all w-full outline-none  border-b border-gray-500 focus:border-teal-500 focus:outline-none h-20 resize-none"
        name="message"
        placeholder="Message"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 text-base font-medium rounded-md  bg-teal-500 text-white hover:bg-teal-700"
      >
        Send Message
      </button>
    </form>
           </div>
              </div>
        </section>

    );
};

export default Contact;