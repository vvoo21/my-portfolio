import { NavLink } from 'react-router-dom';
import { 
  FaLinkedin,
  FaGithub,
  FaMedium
} from 'react-icons/fa';
import '../styles/navbar.css';

const ICON_SIZE = 25;

const Navbar = () => {

  // URLs
  const linkedinURL = 'https://www.linkedin.com/in/vaneoliverosp/';
  const githubURL  = 'https://github.com/vvoo21';
  const mediumURL = 'https://medium.com/@vaneolipa';

  return (
    <nav className='navbar'>
      <NavLink
        to="/"
        end
        className='logo link-active'
        >
          Vanessa O
      </NavLink>
      <div className='social-media'>
        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={ICON_SIZE} />
        </a>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <FaGithub size={ICON_SIZE} />
        </a>
        <a href={mediumURL} target="_blank" rel="noopener noreferrer">
          <FaMedium size={ICON_SIZE} />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/projects"
            className='link link-active'
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className='link link-active'
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className='link link-active'
          >
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar