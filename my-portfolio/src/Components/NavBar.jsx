import { IoHomeOutline, IoSettingsOutline, IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineContacts } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";

import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <nav className="fixed bottom-2 left-0 lg:bottom-8 w-full mx-auto overflow-hidden z-50">
            <div className="container
            mx-auto">
<div className="w-full bg-black/50 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl  ">
<Link>
<IoHomeOutline  className="mx-auto" />
<span className="text-xs font-bold">Home</span>
</Link>
<Link>
<IoBriefcaseOutline  className="mx-auto" />

<span className="text-xs font-bold">Experience</span>
</Link>
<Link>
<IoSettingsOutline className="mx-auto"  />
<span className="text-xs font-bold">Skills</span>
</Link>
<Link>
<AiOutlineContacts className="mx-auto"  />
<span className="text-xs font-bold">Contact</span>
</Link>
<Link>
<HiOutlineAcademicCap className="mx-auto"  />
<span className="text-xs font-bold">Education</span>
</Link>
</div>
            </div>
        </nav>
    );
};

export default NavBar;