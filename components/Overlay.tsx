'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

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

export default function Overlay() {
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
    <div className='fixed right-0 top-0 h-full w-full'>
      <motion.div
        className='h-5/6 w-full bg-black'
        initial={{ height: 'size.height - 100px' }}
        animate={{ height: '0px' }}
        transition={{ duration: 2 }}
        variants={draw}
      />
      <motion.div
        className='fixed right-0 top-0 h-full w-7/12 bg-black  lg:w-11/12'
        initial={{
          width: 'calc(size.width - 100px)',
          height: 'size.height - 100px',
        }}
        animate={{
          width: '0px',
          height: 'size.height - 100px',
        }}
        transition={{ duration: 2 }}
        variants={draw}
      />
    </div>
  )
}
