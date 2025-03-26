"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="flex justify-between h-16 items-center max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4 uppercase text-sm tracking-widest text-primary/50">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-xl font-bold text-primary">/SC/</span>
          </motion.li>
          {navItems.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-3 py-1.5 hover:text-primary cursor-pointer transition-colors"
            >
              {item.title}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>

        {/* Desktop Try Sync Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block uppercase hover:bg-primary/10 cursor-pointer rounded-full px-5 py-2 text-sm outline outline-primary/20 tracking-wide transition-colors"
        >
          Try Sync
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-sm"
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1.5 hover:text-primary cursor-pointer transition-colors"
            >
              {item.title}
            </motion.li>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="uppercase hover:bg-primary/10 cursor-pointer rounded-full px-5 py-2 text-sm outline outline-primary/20 tracking-wide transition-colors"
          >
            Try Sync
          </motion.button>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;

const navItems = [
  { title: "sync" },
  { title: "api" },
  { title: "company" },
  { title: "colossus" },
  { title: "career" },
  { title: "news" },
];
