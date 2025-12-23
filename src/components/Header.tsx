import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();

    return(
        <header className="header">
            <div className="header-logo">
                <Link to="/" className="nav-link">❄️ The gifts</Link>
            </div>

            <nav className="header-nav">
                <Link to="/gifts" className={`nav-link ${location.pathname === '/gifts' ? 'active' : ''}`}>Gifts</Link>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                <Link to="/gifts" className="nav-link">Best</Link>
                <Link to="/gifts" className="nav-link">Contacts</Link>
            </nav>
        </header>
    );
};

export default Header;