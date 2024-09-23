import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Cricket League. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:text-yellow-300">Facebook</a> | 
          <a href="#" className="hover:text-yellow-300 ml-2">Twitter</a> | 
          <a href="#" className="hover:text-yellow-300 ml-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
