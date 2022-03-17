import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import RevealOnScroll from './Reveal';
import RightArrow from '../assets/rightarrow';
import FancyImage from './FancyImage';

export default function Band2() {
  const defaultVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.18, 0, 0, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: -15,
    },
  };

  return (
    <div className="band2">
      <RevealOnScroll className="header" animVariants={{}}>
        <motion.div className="top" variants={defaultVariants}>
          Wissenswertes{' '}
        </motion.div>
        <div className="bottom">
          <motion.div className="body" variants={defaultVariants}>
            Integer massa urna, senectus maecenas in dapibus urna amet
            hendrerit. In ipsum, morbi amet aenean. Iaculis donec sem nullam
            nunc condimentum nisl non gravida in.
          </motion.div>
          <motion.button variants={defaultVariants}>
            Learn More
            {RightArrow}
          </motion.button>
        </div>
      </RevealOnScroll>
      <div className="content">
        <RevealOnScroll className="left" animVariants={{}}>
          <div className="col1">
            <FancyImage
              revealOnScroll
              src="https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/6.jpg"
              alt="preview 1"
              className="img1"
            />
          </div>

          <div className="col2">
            <FancyImage
              revealOnScroll
              src="https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/4.jpg"
              alt="preview 2"
              className="img2"
            />
            <FancyImage
              revealOnScroll
              src="https://stackblitz.com/files/react-v6g1bq/github/awesomechoi11/weiss-demo/master/src/assets/3.jpg"
              alt="preview 3"
              className="img3"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="right" animVariants={{}} threshold={1}>
          <Accordian />
        </RevealOnScroll>
      </div>
    </div>
  );
}

const accordianData = [
  {
    title: 'Bewirb dich bei uns massa',
    content:
      'Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. In ipsum, morbi amet aenean.',
  },
  {
    title: 'Morbi amet aenean',
    content:
      'Cum 30 euismod interpretaris mediocritatem at, te has rebum audiam, cu pro impedit complectitur. Eam no dicam recteque, cu augue abhorreant expetendis eos, mel ne nullam noster indoctum. Vide mutat graeci id has. Cum 30 euismod interpretaris mediocritatem at, te has rebum audiam, cu pro impedit complectitur. Eam no dicam recteque, cu augue abhorreant expetendis eos, mel ne nullam noster indoctum. Vide mutat graeci id has.',
  },
  {
    title: 'Nunc condimentum nis',
    content:
      'Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam quaeque ad sed, an legere concludaturque eum. Duo omnis solet dissentiet te, ea sed quis erat reprehendunt. ',
  },
];

function Accordian() {
  const [selected, setSelected] = useState(0);
  const defaultVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.18, 0, 0, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: -15,
    },
  };
  return (
    <div className="accordian">
      {accordianData.map((data, index) => (
        <motion.div variants={defaultVariants}>
          <AccordianItem
            key={index}
            index={index}
            isSelected={index === selected}
            setSelected={setSelected}
            {...data}
          />
          <div key={index + 'a'} className="divider"></div>
        </motion.div>
      ))}
    </div>
  );
}

function AccordianItem({ isSelected, index, title, content, setSelected }) {
  const contentRef = useRef();
  const controls = useAnimation();
  useEffect(() => {
    if (isSelected) {
      const contentHeight = contentRef.current?.getBoundingClientRect().height;
      const newPadding =
        (contentHeight / window.innerWidth) * 1680 + 32 + 'rem';
      controls.start({
        paddingBottom: newPadding,
      });
    } else {
      controls.start({
        paddingBottom: '30rem',
      });
    }
  }, [isSelected]);

  return (
    <motion.div
      className="item"
      initial={{
        paddingBottom: '30rem',
      }}
      whileHover={{
        x: isSelected ? '0rem' : '8rem',
      }}
      animate={controls}
      transition={{
        ease: [0.18, 0, 0, 1],
        duration: 0.6,
      }}
      onClick={() => {
        if (!isSelected) setSelected(index);
      }}
    >
      <div className="title">
        <ActiveArrow isSelected={isSelected} />
        {title}
        <PlusIcon isSelected={isSelected} />
      </div>
      <motion.div
        className="content"
        ref={contentRef}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isSelected ? 1 : 0,
        }}
        transition={{
          ease: [0.18, 0, 0, 1],
          duration: 1.2,
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}

function ActiveArrow({ isSelected }) {
  return (
    <motion.svg
      width="12rem"
      height="12rem"
      viewBox="0 0 12 12"
      fill="none"
      className="active-arrow"
      initial={{
        opacity: 0,
        x: '-4rem',
      }}
      animate={{
        opacity: isSelected ? 1 : 0,
        x: isSelected ? '0rem' : '-4rem',
      }}
    >
      <path
        d="M6 1L11 6L6 11"
        stroke="#FF9900"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 5.99935H11" stroke="#FF9900" strokeLinecap="round" />
    </motion.svg>
  );
}

function PlusIcon({ isSelected }) {
  return (
    <svg
      width="12rem"
      height="12rem"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 6H12" stroke="#151616" />
      <motion.path
        initial={{
          rotate: '0deg',
        }}
        animate={{
          rotate: isSelected ? '270deg' : '0deg',
        }}
        transition={{
          ease: [0.18, 0, 0, 1],
          duration: 0.4,
        }}
        d="M6 0L6 12"
        stroke="#151616"
      />
    </svg>
  );
}
