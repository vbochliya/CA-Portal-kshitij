import { useEffect, useState, useCallback, useMemo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbarags.module.css";
import img1 from "../../images/icon2.png";
import Api from "../../API/Api";

const HEADER_OFFSET = 80;
const SCROLL_THRESHOLD = 50;

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#resp", label: "Responsibilities" },
  { href: "#inc", label: "Incentives" },
  { href: "#companyInc", label: "Gifts" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#");
  const [user, setUser] = useState(null);
  const [hoverLogout, setHoverLogout] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    Api.get(`/user/login_check`, { headers })
      .then((res) => {
        if (res?.data?.user) setUser(res.data.user);
      })
      .catch(() => {});
  }, []);

  // Sync active link with URL hash
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || "#");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle initial deep-link scroll
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => smoothScrollTo(window.location.hash), 0);
    }
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const overflow = menuOpen ? "hidden" : "";
    
    root.style.overflow = overflow;
    body.style.overflow = overflow;
    
    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

  const smoothScrollTo = useCallback((hash) => {
    const id = String(hash).replace(/\/?#/, "");
    const element = id ? document.getElementById(id) : null;
    const top = element 
      ? element.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET 
      : 0;
    
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const handleNavClick = useCallback((e, href) => {
    const targetHash = href.startsWith("#") ? href : `#${href}`;
    
    if (window.location.pathname !== "/") {
      setMenuOpen(false);
      return;
    }
    
    e.preventDefault();
    setMenuOpen(false);
    setActiveHash(targetHash);
    smoothScrollTo(targetHash);
  }, [smoothScrollTo]);

  const handleLogout = useCallback((e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/";
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const isActive = useCallback((href) => {
    return (activeHash || "#") === href;
  }, [activeHash]);

  // Memoized auth buttons
  const authButtons = useMemo(() => {
    if (!user) {
      return (
        <li>
          <a className={`${styles.btnPrimary} ${styles.signInFixed}`} href="/SignIn">
            Sign In
          </a>
        </li>
      );
    }

    const label = hoverLogout ? "Logout" : (user.first_name || "Logout");
    
    return (
      <>
        <li>
          <a className={styles.btnOutline} href="/Profile">Profile</a>
        </li>
        {user.selection === "yes" && (
          <li>
            <a className={styles.btnOutline} href="/Dashboard">Dashboard</a>
          </li>
        )}
        <li>
          <a
            className={styles.btnPrimary}
            href="/"
            onClick={handleLogout}
            onMouseEnter={() => setHoverLogout(true)}
            onMouseLeave={() => setHoverLogout(false)}
          >
            {label}
          </a>
        </li>
      </>
    );
  }, [user, hoverLogout, handleLogout]);

  // Render navigation links
  const renderNavLinks = useCallback((isMobile = false) => {
    return navLinks.map(({ href, label }) => (
      <li key={href}>
        <a 
          className={`${isMobile && href === "#contact" ? styles.signinbutton : ""} ${
            isActive(href) ? styles.active : ""
          }`}
          href={`/${href}`}
          onClick={(e) => handleNavClick(e, href)}
        >
          {label}
        </a>
      </li>
    ));
  }, [isActive, handleNavClick]);

  return (
    <header className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled2 : ""}`}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        {/* Brand */}
        <a
          href="/#"
          className={styles.brand}
          aria-label="Home"
          onClick={(e) => handleNavClick(e, "#")}
        >
          <img src={img1} alt="KSHITIJ logo" className={styles.brandImg} />
          <span className={styles.brandText}>KSHITIJ</span>
        </a>

        {/* Desktop navigation */}
        <ul className={styles.links}>
          {renderNavLinks()}
          {authButtons}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.showBackdrop : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside 
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={styles.drawerClose}
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <IoMdClose />
        </button>

        <ul className={styles.staggerList} onClick={closeMenu}>
          {renderNavLinks(true)}
          {authButtons}
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;