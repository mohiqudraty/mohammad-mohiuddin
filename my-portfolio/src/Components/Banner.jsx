import Header from "./Header";
import img from "../assets/myimg.png";
// icon
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

// react type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section id="home" className="min-h-screen">
      <Header></Header>
      <div className="mt-10 p-5 flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between ">
        {/* text  */}
        <div className="text-center lg:text-left lg:w-2/3">
          <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
    
          className="text-slate-950  font-medium text-4xl lg:text-5xl ">
            Mohammad <span> Mohiuddin</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
 className="text-3xl lg:text-5xl text-teal-500">
            <span className="text-gray-950">I am a </span>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Web Designer",
                2000,
                "SEO Experts",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
 className="my-5 max-w-md mx-auto lg:mx-0 text-center lg:text-left">I m a junior developer enthusiastic about the MERN stack (MongoDB, Express.js, React.js, Node.js), skilled in HTML, CSS, and JavaScript,and currently diving into TypeScript.</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
 className="flex gap-6 max-w-max mx-auto items-center lg:mx-0">
            <a href=""><button className="py-2 px-3 rounded-lg bg-teal-500 ">My Resume</button></a>
            <Link to="projects"><button className="py-2 px-3 rounded-lg bg-[#77acc8]">My Projects</button></Link>
          </motion.div>
          {/* social  */}
          <motion.div initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
 className="flex text-2xl gap-5 max-w-max mx-auto lg:mx-0 my-5">
            <a href="https://github.com/mohiqudraty"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mohiuddin-qudraty"><FaLinkedin /></a>
            <a href="https://x.com/MohiQudraty"><FaTwitterSquare /></a>
          </motion.div>
        </div>
        {/* img  */}
        <motion.div initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
 className="hidden lg:flex lg:max-w-full">
          <img className="min-w-[600px]" src={img} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

