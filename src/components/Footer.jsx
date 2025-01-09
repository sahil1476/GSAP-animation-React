import { FaDiscord, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import React, { useEffect, useState } from "react";


const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://www.linkedin.com/in/sahil-sharma-34989519a/", icon: <FaLinkedin /> },
  { href: "https://www.instagram.com/ssahilsharma_/", icon: <FaInstagram /> },
  { href: "https://medium.com/@krsahilsharma07", icon: <FaMedium /> },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Show button when scrolling up
    if (currentScrollY < lastScrollY && currentScrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer className="w-screen  bg-[#5542ff] py-6 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-lg font-light md:text-left">
          ©Sahil Sharma 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-6  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl  transition-transform duration-300 ease-in-out hover:text-white hover:scale-150"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-lg font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
        
        <a
      href="#top"
      className={`fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5542ff] text-white shadow-lg hover:bg-[#4431e1] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionProperty: "transform, opacity" }}
    >
      ↑
    </a>
      </div>
    </footer>
  );
};

export default Footer;