import React from "react";

const Footer = () => {
  return (
    <div className="h-12 flex justify-center items-center">
      <p>Copyright {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
