import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isBlog = location.pathname === "/blog";

  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const isDesktop = screenWidth > 1024;

  return (
    <header
      style={{
        backgroundColor: "#FFFD8F",
        padding: "15px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="WeMovers"
          style={{
            width: "clamp(180px, 25vw, 255px)",
            cursor: "pointer",
          }}
        />

        {/* NAV MENU */}
        <nav style={{ position: "relative" }}>
          <ul
            style={{
              listStyle: "none",
              display: isDesktop ? "flex" : open ? "flex" : "none",
              flexDirection: isDesktop ? "row" : "column",
              gap: isDesktop ? "25px" : "15px",
              backgroundColor: isDesktop ? "transparent" : "#FFFD8F",
              padding: isDesktop ? "0" : "20px",
              position: isDesktop ? "static" : "absolute",
              top: "50px",
              right: 0,
              borderRadius: "12px",
              width: isDesktop ? "auto" : "220px",
              boxShadow: isDesktop ? "none" : "0 6px 20px rgba(0,0,0,0.1)",
              transition: "0.3s ease",
            }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/#about", label: "About" },
              { to: "/#our-services", label: "Services" },
              { to: "/#mission", label: "Mission" },
              { to: "/#faqs", label: "Faqs" },
              { to: "/#contact", label: "Contact" },
              { to: "/blog", label: "Blog" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  smooth
                  to={item.to}
                  style={{
                    textDecoration: "none",
                    color: "#4C763B",
                    fontWeight:
                      item.label === "Blog" && isBlog ? "700" : "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE TOGGLE */}
          {!isDesktop && (
            <div
              onClick={() => setOpen(!open)}
              style={{
                width: "30px",
                height: "22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                marginLeft: "20px",
                zIndex: 9999,
              }}
            >
              {/* Line 1 */}
              <span
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#4C763B",
                  borderRadius: "2px",
                  transition: "0.3s",
                  transform: open ? "rotate(45deg) translateY(9px)" : "none",
                }}
              ></span>

              {/* Line 2 */}
              <span
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#4C763B",
                  borderRadius: "2px",
                  transition: "0.3s",
                  opacity: open ? 0 : 1,
                }}
              ></span>

              {/* Line 3 */}
              <span
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#4C763B",
                  borderRadius: "2px",
                  transition: "0.3s",
                  transform: open ? "rotate(-45deg) translateY(-9px)" : "none",
                }}
              ></span>
            </div>
          )}
        </nav>

        {/* CONTACT BUTTON (Desktop Only) */}
        {isDesktop && (
          <a
            href="https://www.wemovers.ae/contact"
            style={{
              backgroundColor: "#B0CE88",
              color: "#4C763B",
              padding: "10px 24px",
              borderRadius: "30px",
              fontWeight: "600",
              border: "1px solid #4C763B",
            }}
          >
            Contact Us
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
