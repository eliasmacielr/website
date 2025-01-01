'use client'
import { motion } from 'framer-motion'

export default function Overlay() {
  return (
    <div className='fixed right-0 top-0 h-fit w-fit'>
      <motion.div
        className='fixed right-0 top-0 h-full bg-black'
        initial={{ width: 'calc(100vw - 100px)' }}
        animate={{ width: '0vw' }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className='fixed right-0 top-0 w-full bg-black'
        initial={{ height: 'calc(100vh - 100px)' }}
        animate={{ height: '0vh' }}
        transition={{ duration: 2 }}
      />
    </div>
  )
}
