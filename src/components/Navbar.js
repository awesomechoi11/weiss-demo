import React from 'react';
import weissLogo from '../assets/weisslogo.svg';
import { motion } from 'framer-motion';
import RightArrow from '../assets/rightarrow';
import clsx from 'clsx';

const defaultVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const downArrow = (
  <svg
    width="9rem"
    height="5rem"
    viewBox="0 0 9 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 3.05176e-05L4.5 5.00003L8.5 3.05176e-05H0.5Z" />
  </svg>
);

export default function Navbar() {
  return (
    <motion.div
      className="navbar  fw-bold"
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.08,
        delay: 0.2,
      }}
    >
      <div className="inner">
        <div className="left">
          <motion.img
            variants={defaultVariants}
            className="logo"
            alt="Weiss Logo"
            src={weissLogo}
          />
        </div>
        <div className="middle">
          <NavButton selected title="Overview" />
          <Dropdown title="Product" />
          <Dropdown title="Resources" />
          <NavButton title="About" />
        </div>
        <div className="right">
          <motion.button variants={defaultVariants}>
            get free quote
            {RightArrow}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function Dropdown({ title }) {
  return (
    <motion.div variants={defaultVariants} className="nav-item">
      {title}
      {downArrow}
    </motion.div>
  );
}
function NavButton({ selected, title }) {
  return (
    <motion.div
      variants={defaultVariants}
      className={clsx('nav-item', selected && 'selected')}
    >
      {title}
    </motion.div>
  );
}
