
import logo from '../assets/logo.svg'

const Header = () => {
  

    const handleEmailClick = () => {
      window.location.href = 'mailto:qudrati1999@gmail.com';
    };
    return (
        <div data-aos="fade-down" className="py-3 flex justify-between items-center">
        {/* logo  */}
        <a href="#"> 
        <img className='w-10' src={logo} alt="logo" />
        </a>
        {/* contact me  */}
     <button onClick={handleEmailClick} className="py-2 px-3 rounded-xl bg-gray-950 text-white font-semibold">
      Touch Me
    </button>
        </div>
    );
};

export default Header;