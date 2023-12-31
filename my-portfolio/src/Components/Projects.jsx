import projects1 from '../assets/Dev-Point-dashboard.png'
import projects2 from '../assets/Study-Online-All-Assignment.png'
import projects3 from '../assets/Brand-Shop-BD-sq.png'
import { Link } from 'react-scroll';
const Projects = () => {
    return (
        <div id="projects"  className="min-h-screen">
              <div className="container mx-auto p-5 lg:py-20">
                {/* text  */}
                <div className='mb-10'>
                    <h2 className="text-2xl mb-4 lg:mb-10 text-center text-gray-950 font-semibold lg:text-4xl "> <span className='uppercase py-2 border-b-2 border-teal-400'>My Latest Projects</span></h2>
                </div>
               <div className='grid   lg:grid-cols-3 gap-10'>
                {/* projects 1 */}
                {/* img  */}
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=' group relative overflow-hidden border-2 border-gray-900/50 rounded-xl '>
                {/* overly  */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
               <img className='w-full object-cover group-hover:scale-125 duration-500 transition-all' src={projects1} alt="" />
               {/* pre title  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[70%] transition-all duration-700 z-50'>
                <span className='text-2xl font-semibold text-white pb-1 border-teal-500 border-b-2'>Dev Point</span>
               </div>
               {/* title  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[45%] transition-all duration-700 z-50'>
               <span className='text-2xl font-semibold text-teal-500'>Online Forum</span>
               </div>
               {/* languages and tools  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[20%] transition-all duration-700 z-50'>
               <span className='text-xl py-1 px-2 rounded-md bg-gray-950 text-white font-semibold'><Link href="https://dev-point-380a2.web.app/">Live</Link></span>
               </div>
               </div>
              
               {/* projects 2  */}
                {/* img  */}
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=' group relative overflow-hidden border-2 border-gray-900/50 rounded-xl '>
                {/* overly  */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
               <img className='w-full  object-cover group-hover:scale-125 duration-500 transition-all' src={projects2} alt="" />
                {/* pre title  */}
                <div className='absolute -bottom-full left-[20%] group-hover:bottom-[70%] transition-all duration-700 z-50'>
                <span className='text-2xl font-semibold text-white pb-1 border-teal-500 border-b-2'>Study Online</span>
               </div>
               {/* title  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[45%]  transition-all duration-700 z-50'>
               <span className='text-2xl font-semibold text-teal-500'>Online Group Study</span>
               </div>
               {/* languages and tools  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[20%]  transition-all duration-700 z-50'>
               <span className='text-xl py-1 px-2 rounded-md bg-gray-950 text-white font-semibold'><Link href="https://coffee-store-front.web.app/">Live</Link></span>
               </div>
               </div>
              {/* projects 3  */}
                {/* img  */}
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className=' group relative overflow-hidden border-2 border-gray-900/50 rounded-xl '>
                {/* overly  */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
               <img className='w-full object-cover group-hover:scale-125 duration-500 transition-all' src={projects3} alt="" />
                {/* pre title  */}
                <div className='absolute -bottom-full left-[20%] group-hover:bottom-[70%] transition-all duration-700 z-50'>
                <span className='text-2xl font-semibold text-white pb-1 border-teal-500 border-b-2'>Brand Shop BD</span>
               </div>
               {/* title  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[45%]  transition-all duration-700 z-50'>
               <span className='text-xl font-semibold text-teal-500'>Product Management</span>
               </div>
               {/* languages and tools  */}
               <div className='absolute -bottom-full left-[20%] group-hover:bottom-[20%]  transition-all duration-700 z-50'>
               <span className='text-xl py-1 px-2 rounded-md bg-gray-950 text-white font-semibold'><Link href="https://brand-shop-bd.web.app/">Live</Link></span>
               </div>
               </div>

               </div>
              </div>
        </div>
    );
};

export default Projects;