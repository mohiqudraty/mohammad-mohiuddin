import { Link } from "react-scroll";


const Experience = () => {
    return (
        <div
        data-aos-easing="linear"
        data-aos-duration="1500" id="experience" className="min-h-screen">
             <section className="py-16">
      <div data-aos="zoom-in" className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 "><span className="pb-2 border-b-2 border-teal-500">Experience</span></h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">MERN Stack Developer</h3>
          <p className="text-lg text-gray-600 mb-4">Independent MERN Stack Developer | August 2023 - Present</p>
          <ul className="list-disc list-inside text-lg text-gray-700">
          Developed and deployed 3+ fully functional web applications to showcase my proficiency in the MERN stack (MongoDB, Express.js, React, Node.js). Implemented RESTful APIs, CRUD operations, and secure user authentication/authorization using JWTs. Utilized Tailwind CSS extensively to create dynamic and responsive UIs, including flexbox layouts, grid systems, and custom components. Leveraged peer review and feedback from another developer to improve the quality and efficiency of my code. Defined project goals, milestones, and deliverables, ensuring successful completion of all applications.
          </ul>
        </div>

    <Link to="projects" smooth={true}><button className="py-2 px-3 bg-teal-500 text-gray-950 font-semibold rounded-md">Show Projects</button></Link>
      </div>
    </section>
        </div>
    );
};

export default Experience;