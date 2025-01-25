import React from "react";

function Footer() {
  const ct = new Date();
  const cy = ct.getFullYear();
  return (
    <footer>
      <p>Copyright©{cy}</p>
    </footer>
  );
}

export default Footer;
