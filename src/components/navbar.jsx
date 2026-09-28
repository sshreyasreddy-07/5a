import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: 20, backgroundColor: "#333" }}>
      <a href="/" style={{ color: "white", marginRight: 20 }}>
        Home
      </a>
      <a href="#contact" style={{ color: "white" }}>
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
