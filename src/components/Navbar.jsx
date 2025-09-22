import React, { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "working", label: "Working" },
  { id: "benefits", label: "Benefits" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id));
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="brand">
          <div className="logo">⚓</div>
          <div>
            <div className="title">Border-Aware</div>
            <div className="subtitle">Autonomous Speed & Safety</div>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${active === link.id ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
