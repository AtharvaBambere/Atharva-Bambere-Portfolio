
import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="bg-green-100 p-1.5 rounded-lg">
              <Code className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Atharva</h3>
          </div>
          <p className="text-green-200 mb-6">Web Developer & Designer</p>
          
          <div className="max-w-xs mx-auto border-t border-blue-500 pt-6">
            <p className="text-sm text-blue-100">
              &copy; {currentYear} Atharva. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
