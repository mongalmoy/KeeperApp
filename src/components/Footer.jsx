import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Mongalmoy Karmakar ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
