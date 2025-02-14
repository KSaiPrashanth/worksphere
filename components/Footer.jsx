import React from "react";
const currentYear = new Date().getFullYear();

const Footer = () => {
 return (
    <>
      <footer className="py-6 border-t-2 border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            &copy; {currentYear} WorkSphere. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
