'use client'

import Link from 'next/link'
import { MouseEventHandler } from 'react'

export default function Header() {
  function myFunction(): void {
    var x = document.getElementById('myLinks')
    if (x !== null) {
      if (x.style.display === 'flex') {
        x.style.display = 'none'
      } else {
        x.style.display = 'flex'
      }
    }
  }

  return (
    <header className='flex flex-col items-center bg-slate-800 text-gray-200'>
      <div className='w-full max-w-screen-xl'>
        <h1 className='flex justify-center pb-2 pt-4 lg:hidden lg:pb-6 lg:pt-16'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15px'
            height='18.161485974223px'
            viewBox='0 -694 583 706'
            aria-hidden='true'
          >
            <defs>
              <path
                id='MJX-10-TEX-I-1D706'
                d='M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z'
              ></path>
            </defs>
            <g
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              transform='scale(1,-1)'
            >
              <g data-mml-node='math'>
                <g data-mml-node='mi'>
                  <use data-c='1D706' href='#MJX-10-TEX-I-1D706'></use>
                </g>
              </g>
            </g>
          </svg>
        </h1>
      </div>
      <div className='w-full max-w-screen-xl'>
        <h1 className='text-3lg px-6 pb-2 pt-4 text-center lg:pb-6 lg:pt-16 lg:text-5xl'>
          Elias Maciel&apos;s <br /> Home Page
        </h1>
      </div>
      {/* Desktop nav */}
      <div className='mb-4 hidden flex-col lg:mb-0 lg:flex lg:flex-row lg:justify-center lg:gap-8 lg:py-4 lg:text-xl'>
        <Link className='px-8 py-1' href='/'>
          Home
        </Link>
        <Link className='px-8 py-1' href='/projects'>
          Projects
        </Link>
        <Link className='px-8 py-1' href='/courses-teaching'>
          Courses &amp; Teaching
        </Link>
        <Link className='px-8 py-1' href='/contact-info'>
          Contact &amp; Info
        </Link>
      </div>
      {/* Mobile nav */}
      <div className='topnav w-full lg:hidden lg:w-auto'>
        <div id='myLinks' className='mb-4 hidden flex-col lg:mb-0'>
          <Link className='px-8 py-1' href='/'>
            Home
          </Link>
          <Link className='px-8 py-1' href='/projects'>
            Projects
          </Link>
          <Link className='px-8 py-1' href='/courses-teaching'>
            Courses &amp; Teaching
          </Link>
          <Link className='px-8 py-1' href='/contact-info'>
            Contact &amp; Info
          </Link>
        </div>
        <a
          href='#'
          className='absolute right-0 top-0 p-3.5'
          onClick={myFunction as MouseEventHandler<HTMLAnchorElement>}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 9h16.5m-16.5 6.75h16.5'
            />
          </svg>
        </a>
      </div>
    </header>
  )
}
