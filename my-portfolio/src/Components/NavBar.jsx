import { IoHomeOutline, IoSettingsOutline, IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineContacts } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaRegClipboard } from "react-icons/fa";

import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="fixed bottom-2 left-0 lg:bottom-8 w-full mx-auto overflow-hidden z-50">
            <div className="container
            mx-auto">
<div className="w-full bg-black/50 h-20 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl  ">
    {/* home  */}
<Link to="home" activeClass="text-blue-500 rounded-full shadow-inner shadow-blue-500" spy={true} smooth={true} className="cursor-pointer w-16 h-16 flex justify-center items-center">
<IoHomeOutline />
{/* <span className="text-xs font-bold">Home</span> */}
</Link>
{/* skills  */}
<Link to="skills" activeClass="text-blue-500 rounded-full shadow-inner shadow-blue-500" spy={true} smooth={true} className="cursor-pointer w-16 h-16 flex justify-center items-center">
<IoSettingsOutline />
{/* <span className="text-xs font-bold">Skills</span> */}
</Link>
{/* experience  */}
<Link to="experience" activeClass="text-blue-500 rounded-full shadow-inner shadow-blue-500" spy={true} smooth={true} className="cursor-pointer w-16 h-16 flex justify-center items-center">
<IoBriefcaseOutline />
{/* <span className="text-xs font-bold">Experience</span> */}
</Link>
{/* Projects  */}
<Link to="projects" activeClass="text-blue-500 rounded-full shadow-inner shadow-blue-500" spy={true} smooth={true} className="cursor-pointer w-16 h-16 flex justify-center items-center">
<FaRegClipboard />
{/* <span className="text-xs font-bold">Projects</span> */}
</Link>

{/* education */}
<Link to="education" activeClass="text-blue-500 rounded-full shadow-inner shadow-blue-500" spy={true} smooth={true} className="cursor-pointer w-16 h-16 flex justify-center items-center">
<HiOutlineAcademicCap />
{/* <span className="text-xs font-bold">Education</span> */}
</Link>
{/* contact  */}
<Link to="contact" activeClass="text-blue-500 rounded-full shadow-inner shadow-blue-500" spy={true} smooth={true} className="cursor-pointer w-16 h-16 flex justify-center items-center">
<AiOutlineContacts />
{/* <span className="text-xs font-bold">Contact</span> */}
</Link>
</div>
            </div>
        </nav>
    );
};

export default NavBar;