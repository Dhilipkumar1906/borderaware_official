import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} Border-Aware. Built for fishermen safety.</div>
        <div className="small">Designed with ❤️ — single page demo</div>
      </div>
    </footer>
  );
}
