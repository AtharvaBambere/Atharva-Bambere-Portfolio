
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-secondary/30 border-t border-border">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} Atharva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
