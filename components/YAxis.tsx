'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export default function YAxis() {
  const size = useWindowSize()

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    })

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount

    return windowSize
  }

  return (
    <div
      className='fixed bottom-0 left-[5px] overflow-visible'
      aria-hidden='true'
    >
      <svg
        id='y-label'
        className='absolute text-red-600'
        xmlns='http://www.w3.org/2000/svg'
        width='21.507px'
        height='29.28px'
        viewBox='0 -442 490 647'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <path
            id='MJX-13-TEX-I-1D466'
            d='M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z'
          ></path>
        </defs>
        <g
          stroke='currentcolor'
          fill='currentcolor'
          strokeWidth='0'
          transform='scale(1,-1)'
        >
          <g data-mml-node='math'>
            <g data-mml-node='mi'>
              <use data-c='1D466' href='#MJX-13-TEX-I-1D466'></use>
            </g>
          </g>
        </g>
      </svg>

      <motion.svg
        // id='arrow-up'
        animate={{ y: -size.height + 40 }}
        initial={{ y: -45 }}
        transition={{ duration: 2 }}
        className='absolute  text-red-600'
        xmlns='http://www.w3.org/2000/svg'
        width='22px'
        height='16.1636px'
        viewBox='0 -575 722 595'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <path
            id='MJX-12-TEX-I-25B4'
            d='M99 -20Q84 -11 84 0Q84 5 148 145T278 424L342 563Q347 575 360 575Q368 575 375 570Q376 569 441 430T571 148T637 0Q637 -11 622 -20H99Z'
          ></path>
        </defs>
        <g
          stroke='currentcolor'
          fill='currentcolor'
          strokeWidth='0'
          transform='scale(1,-1)'
        >
          <g data-mml-node='math'>
            <g data-mml-node='mi'>
              <use data-c='25B4' href='#MJX-12-TEX-I-25B4'></use>
            </g>
          </g>
        </g>
      </motion.svg>

      <motion.svg
        variants={draw}
        className='absolute bottom-0 left-[-1px] origin-center rotate-180 text-red-600'
        xmlns='http://www.w3.org/2000/svg'
        width='15'
        height='size.height'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        style={{ height: 'calc(100vh - 55.43px)' }}
      >
        <motion.rect
          animate={{ height: size.height - 55 }}
          initial={{ height: 30 }}
          transition={{ duration: 2 }}
          className='absolute bottom-0'
          width='5'
          height='30px'
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='1'
          variants={draw}
        />
      </motion.svg>
      <motion.div></motion.div>
    </div>
  )
}
// import * as React from "react";
// import { useRef } from "react";
// import { motion, sync, useCycle } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
// import { MenuToggle } from "./MenuToggle";
// import { Navigation } from "./Navigation";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2
//     }
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//     }
//   }
// };

// export const Example = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div className="background" variants={sidebar} />
//       <Navigation />
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// };
