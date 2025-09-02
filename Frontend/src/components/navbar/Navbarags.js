import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbarags.module.css";
import img1 from "../../images/icon2.png";
import Api from "../../API/Api";

const HEADER_OFFSET = 80;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#");
  const [user, setUser] = useState(null);
  const [hoverLogout, setHoverLogout] = useState(false);

  // Solid background after 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // keeps scroll state for navbar styling [12]

  // Fetch user
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    Api.get(`/user/login_check`, { headers })
      .then((res) => { if (res?.data?.user) setUser(res.data.user); })
      .catch(() => {});
  }, []); // preserves auth controls in the nav [13]

  // Sync active link with URL fragment
  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash || "#");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []); // keeps .active in sync with hash changes [13]

  // Deep-link scroll on first load
  useEffect(() => {
    if (window.location.hash) setTimeout(() => smoothScrollTo(window.location.hash), 0);
  }, []); // offsets for fixed header when landing on a #section URL [12]

  // Lock page scroll when the drawer is open (prevents background from peeking)
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (menuOpen) { root.style.overflow = "hidden"; body.style.overflow = "hidden"; }
    else { root.style.overflow = ""; body.style.overflow = ""; }
    return () => { root.style.overflow = ""; body.style.overflow = ""; };
  }, [menuOpen]); // avoids scroll bleed under the fixed overlay/drawer [6]

  const smoothScrollTo = (hash) => {
    const id = String(hash).replace("/#", "").replace("#", "");
    const el = id ? document.getElementById(id) : null;
    const top = el ? el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET : 0;
    window.scrollTo({ top, behavior: "smooth" });
  }; // native smooth scrolling to an offset position [12]

  // Let anchors navigate off home; smooth scroll only on "/"
  const handleNavClick = (e, href) => {
    const targetHash = href.startsWith("#") ? href : `#${href}`;
    if (window.location.pathname !== "/") { setMenuOpen(false); return; }
    e.preventDefault();
    setMenuOpen(false);
    setActiveHash(targetHash);
    smoothScrollTo(targetHash);
  }; // avoids wrong path like /Signup#about while keeping smooth in-page scroll on home [13][12]

  const isActive = (href) => (activeHash || "#") === href;

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/";
  }; // simple logout and redirect [13]

  // Only "Sign In" when logged out; Profile/Dashboard/Logout when logged in
  const renderAuth = () => {
    if (!user) {
      return (
        <>
          <li>
            <a className={`${styles.btnPrimary} ${styles.signInFixed}`} href="/SignIn">
              Sign In
            </a>
          </li>
        </>
      );
    }
    const label = hoverLogout ? "Logout" : (user?.first_name || "Logout");
    return (
      <>
        <li><a className={styles.btnOutline} href="/Profile">Profile</a></li>
        {user?.selection === "yes" && (
          <li><a className={styles.btnOutline} href="/Dashboard">Dashboard</a></li>
        )}
        <li>
          <a
            className={styles.btnPrimary}
            href="/"
            onClick={logout}
            onMouseEnter={() => setHoverLogout(true)}
            onMouseLeave={() => setHoverLogout(false)}
          >
            {label}
          </a>
        </li>
      </>
    );
  };

  return (
    <header className={styles.navbarWrapper}>
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

        {/* Desktop links */}
        <ul className={styles.links}>
          <li><a className={isActive("#") ? styles.active : ""} href="/#" onClick={(e)=>handleNavClick(e,"#")}>Home</a></li>
          <li><a className={isActive("#about") ? styles.active : ""} href="/#about" onClick={(e)=>handleNavClick(e,"#about")}>About Us</a></li>
          <li><a className={isActive("#resp") ? styles.active : ""} href="/#resp" onClick={(e)=>handleNavClick(e,"#resp")}>Responsibilities</a></li>
          <li><a className={isActive("#inc") ? styles.active : ""} href="/#inc" onClick={(e)=>handleNavClick(e,"#inc")}>Incentives</a></li>
          <li><a className={isActive("#companyInc") ? styles.active : ""} href="/#companyInc" onClick={(e)=>handleNavClick(e,"#companyInc")}>Gifts</a></li>
          <li><a className={isActive("#testimonials") ? styles.active : ""} href="/#testimonials" onClick={(e)=>handleNavClick(e,"#testimonials")}>Testimonials</a></li>
          <li><a className={isActive("#contact") ? styles.active : ""} href="/#contact" onClick={(e)=>handleNavClick(e,"#contact")}>Contact</a></li>
          {renderAuth()}
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.showBackdrop : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer with close button and staggered list */}
      <aside className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <button
          type="button"
          className={styles.drawerClose}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <IoMdClose />
        </button>

        <ul className={styles.staggerList} onClick={() => setMenuOpen(false)}>
          <li><a className={isActive("#") ? styles.active : ""} href="/#" onClick={(e)=>handleNavClick(e,"#")}>Home</a></li>
          <li><a className={isActive("#about") ? styles.active : ""} href="/#about" onClick={(e)=>handleNavClick(e,"#about")}>About Us</a></li>
          <li><a className={isActive("#resp") ? styles.active : ""} href="/#resp" onClick={(e)=>handleNavClick(e,"#resp")}>Responsibilities</a></li>
          <li><a className={isActive("#inc") ? styles.active : ""} href="/#inc" onClick={(e)=>handleNavClick(e,"#inc")}>Incentives</a></li>
          <li><a className={isActive("#companyInc") ? styles.active : ""} href="/#companyInc" onClick={(e)=>handleNavClick(e,"#companyInc")}>Gifts</a></li>
          <li><a className={isActive("#testimonials") ? styles.active : ""} href="/#testimonials" onClick={(e)=>handleNavClick(e,"#testimonials")}>Testimonials</a></li>
          <li><a className={isActive("#contact") ? styles.active : ""} href="/#contact" onClick={(e)=>handleNavClick(e,"#contact")}>Contact</a></li>
          {renderAuth()}
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
