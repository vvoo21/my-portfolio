import { NavLink } from 'react-router-dom';
import { 
  FaLinkedin,
  FaGithub,
  FaMedium
} from 'react-icons/fa';
import '../styles/navbar.css';

const ICON_SIZE = 25;

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  // URLs
  const linkedinURL = 'https://www.linkedin.com/in/vaneoliverosp/';
  const githubURL  = 'https://github.com/vvoo21';
  const mediumURL = 'https://medium.com/@vaneolipa';

  return (
    <nav className='navbar'>
      <NavLink
        to="/"
        end
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className='logo'
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
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className='link'
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar