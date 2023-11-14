import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoSubtitle from '../../../assets/images/logo_sub.png'
import LogoS from '../../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Corrected the variable name
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar =()=>{
    return <>
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoS} alt='logo'/>
            <img  className='sub-logo'src={LogoSubtitle} alt='logoSub'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
            <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank" //external link :which means that when the link is clicked, it will open the target URL in a new browser tab or window
            rel="noreferrer" //The rel attribute is used to specify the relationship between the current document and the linked document. "noreferrer" is often used as a security measure to indicate that no referrer information (i.e., the originating page's URL) should be sent to the linked document. This helps protect the privacy of the user.
          >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
    </div>
     </>
}
export default Sidebar