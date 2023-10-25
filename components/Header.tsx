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
    <header className='relative flex flex-col items-center bg-slate-800 text-gray-200'>
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
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 9h16.5m-16.5 6.75h16.5'
                    />
                  </svg>
                </a>
      </div>
      <div className='absolute -bottom-1 left-0'>
        <svg className="" height="7" width="30" id='expand-right'>
          <line x1="0" y1="0" x2="100vw" y2="0" style={{stroke:'rgb(255,0,0)', strokeWidth:10}} />
          Sorry, your browser does not support inline SVG.
        </svg>
        <svg className='absolute bottom- left-29px -bottom-0.5'id='move-right' xmlns="http://www.w3.org/2000/svg" width="19px" height="14.1636px" viewBox="0 -539 778 580" xmlnsXlink="http://www.w3.org/1999/xlink"   aria-hidden="true" style={{}}>
          <defs>
            <path id="MJX-10-TEX-N-25B8" d="M83 523Q83 524 85 527T92 535T103 539Q107 539 389 406T680 268Q694 260 694 249Q694 239 687 234Q685 232 395 95L107 -41H101Q90 -40 83 -26V523Z"></path>
          </defs>
          <g stroke="red" fill="red" stroke-width="0" transform="scale(1,-1)">
            <g data-mml-node="math">
              <g data-mml-node="mo">
                <use data-c="25B8" href="#MJX-10-TEX-N-25B8"></use>
              </g>
            </g>
          </g>
        </svg>
        <svg className='absolute bottom- left-29px -bottom-0.5'id='move-right-x' xmlns="http://www.w3.org/2000/svg" width="24px" height="19px" viewBox="0 -442 572 453" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" style={{}}>
          <defs>
            <path id="MJX-11-TEX-I-1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
            </path>
          </defs>
          <g stroke="red" fill="red" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi">
            <use data-c="1D465" href="#MJX-11-TEX-I-1D465"></use>
            </g></g>
          </g>
        </svg>
      </div>
    </header>
  )
}
