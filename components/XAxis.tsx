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
export default function XAxis() {
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
    <div className='fixed bottom-[5px] left-0' aria-hidden='true'>
      <motion.svg
        //'x-axis-bar'
        className='absolute bottom-[-2px] left-0 text-blue-600'
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='15'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        style={{ width: '100vw' }}
      >
        <motion.rect
          animate={{ width: size.width - 46 }}
          initial={{ width: 60 }}
          transition={{ duration: 2 }}
          width='30'
          height='5'
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='1'
        />
      </motion.svg>
      <motion.svg
        //'arrow-right'
        animate={{ x: size.width - 51 }}
        initial={{ x: 45 }}
        transition={{ duration: 2 }}
        className='absolute bottom-[3px] text-blue-600'
        xmlns='http://www.w3.org/2000/svg'
        width='24px'
        height='14.1636px'
        viewBox='0 -539 778 580'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <path
            id='MJX-10-TEX-N-25B8'
            d='M83 523Q83 524 85 527T92 535T103 539Q107 539 389 406T680 268Q694 260 694 249Q694 239 687 234Q685 232 395 95L107 -41H101Q90 -40 83 -26V523Z'
          ></path>
        </defs>
        <g
          stroke='currentcolor'
          fill='currentcolor'
          strokeWidth='0'
          transform='scale(1,-1)'
        >
          <g data-mml-node='math'>
            <g data-mml-node='mo'>
              <use data-c='25B8' href='#MJX-10-TEX-N-25B8'></use>
            </g>
          </g>
        </g>
      </motion.svg>

      <motion.svg
        // x-label
        animate={{ x: size.width - 30 }}
        initial={{ x: 70 }}
        transition={{ duration: 2 }}
        className='absolute bottom-0 text-blue-600'
        xmlns='http://www.w3.org/2000/svg'
        width='22.035px'
        height='20.495px'
        viewBox='0 -442 572 453'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <path
            id='MJX-11-TEX-I-1D465'
            d='M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z'
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
              <use data-c='1D465' href='#MJX-11-TEX-I-1D465'></use>
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  )
}
