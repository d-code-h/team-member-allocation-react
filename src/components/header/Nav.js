import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [navClick, setActive] = useState(
    localStorage.getItem('navClick') || '1'
  );

  useEffect(() => {
    localStorage.setItem('navClick', navClick);
  }, [navClick]);

  function handleNavClick(event) {
    setActive(event.target.id);
  }
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              id="1"
              className={navClick === '1' ? 'nav-link active' : 'nav-link'}
              arial-current={navClick === '1' ? 'page' : 'false'}
              to="/"
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              id="2"
              className={navClick === '2' ? 'nav-link active' : 'nav-link'}
              arial-current={navClick === '2' ? 'page' : 'false'}
              to="/teams"
              onClick={handleNavClick}
            >
              Teams
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
