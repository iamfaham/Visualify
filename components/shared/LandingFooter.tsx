import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';  // Importing FaXTwitter from react-icons

const LandingFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00d1d1] via-[#0083ed] to-[#0057a4] text-white py-4 rounded-t-lg">
      <div className="container mx-auto text-center">
        <p>Project by Syed Mohammed Faham.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaXTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
