import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { label: "Home", to: "/" },
  { label: "Doctors", to: "/doctors" },
  { label: "Appointments", to: "/appointments" },
];

export default function Navbar() {
  const { session } = useAuth();
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  function toggleNavbar() {
    setIsNavBarOpen((prev) => {
      document.body.classList.toggle("drawer-open", !prev);
      return !prev;
    });
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Logo />
          <NavLinks />
          <NavActions session={session} onToggleNavbar={toggleNavbar} />
        </div>
      </header>
      <div
        className={`drawer-overlay ${isNavBarOpen ? "open" : ""}`}
        onClick={toggleNavbar}
      />
      <div className={`mobile-drawer ${isNavBarOpen ? "open" : ""}`}>
        <nav
          style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="nav-link"
              onClick={toggleNavbar}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

function Logo() {
  return (
    <NavLink to="/" className="brand">
      <div className="brand-icon">🩺</div>
      <span className="brand-name">
        Medi<span>Book</span>
      </span>
    </NavLink>
  );
}

function NavLinks() {
  return (
    <nav className="nav-links">
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} className="nav-link">
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavActions({ onToggleNavbar, session }) {
  return (
    <div className="navbar-actions">
      <Link to="/login">
        <button className="btn btn-ghost btn-lg">
          {session ? <span>Hi {session.user.email}</span> : <span>signIn</span>}
        </button>
      </Link>
      <Link to="/doctors" className="btn btn-default btn-lg find-doctor">
        Find a Doctor
      </Link>
      <button
        className="btn btn-outline btn-icon-lg menu-toggle"
        onClick={onToggleNavbar}
      >
        ☰
      </button>
    </div>
  );
}
