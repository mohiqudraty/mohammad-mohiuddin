import { Link } from 'react-scroll';
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="py-3 flex justify-between items-center">
        {/* logo  */}
        <a href="#"> 
        <img className='w-10' src={logo} alt="logo" />
        </a>
        {/* contact me  */}
       <Link to='contact'> <button className='py-2 px-3 rounded-xl bg-gray-950 text-white font-semibold'>Contact Me</button></Link>
        </div>
    );
};

export default Header;