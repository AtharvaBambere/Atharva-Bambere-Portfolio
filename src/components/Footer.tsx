
import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-primary/20 to-accent/20 text-white">
      <div className="container">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="bg-background/80 p-1.5 rounded-lg">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Atharva</h3>
          </div>
          <p className="text-primary/80 mb-6">Web Developer & Designer</p>
          
          <div className="max-w-xs mx-auto border-t border-primary/30 pt-6">
            <p className="text-sm text-white/70">
              &copy; {currentYear} Atharva. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
