export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='flex flex-col items-center bg-slate-800 text-gray-200'>
      <p className='p-12 text-3xl'>
        Built with Brain &amp; Brawn by Elias Maciel - {year}.
      </p>
      <div className="fixed bottom-0 left-0">
        <svg className="mb-4 text-red-600 " id='move-y' xmlns="http://www.w3.org/2000/svg" width="21.507px" height="29.28px" viewBox="0 -442 490 647" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" style={{}}>
          <defs>
            <path id="MJX-13-TEX-I-1D466" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z">
            </path>
          </defs><g stroke="currentcolor" fill="currentcolor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="1D466" href="#MJX-13-TEX-I-1D466"></use></g></g></g>
        </svg>
        <svg className="relative left-1.5 text-red-600" height="30" width="7" id='expand-up'>
          <line x1="0" y1="0" x2="0" y2="100vh" style={{stroke:'currentcolor', strokeWidth:10}} />
          Sorry, your browser does not support inline SVG.
        </svg>

        <svg className="absolute text-red-600" id='arrow-up' xmlns="http://www.w3.org/2000/svg" width="22px" height="16.1636px" viewBox="0 -575 722 595"   
          xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" style={{}}>
          <defs>
              <path id="MJX-12-TEX-I-25B4" d="M99 -20Q84 -11 84 0Q84 5 148 145T278 424L342 563Q347 575 360 575Q368 575 375 570Q376 569 441 430T571 148T637 0Q637 -11 622 -20H99Z">
              </path>
          </defs><g stroke="currentcolor" fill="currentcolor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><use data-c="25B4" href="#MJX-12-TEX-I-25B4"></use></g></g></g>
        </svg>
      </div>
      <div className="fixed bottom-0 left-0">
        <svg className="text-blue-600" height="7" width="30" id='expand-right'>
          <line x1="0" y1="0" x2="100vw" y2="0" style={{stroke:'currentcolor', strokeWidth:10}} />
          Sorry, your browser does not support inline SVG.
        </svg>
        <svg className='text-blue-600 absolute bottom- left-29px -bottom-0.5'id='move-right' xmlns="http://www.w3.org/2000/svg" width="24px" height="14.1636px" viewBox="0 -539 778 580" xmlnsXlink="http://www.w3.org/1999/xlink"   aria-hidden="true" style={{}}>
          <defs>
            <path id="MJX-10-TEX-N-25B8" d="M83 523Q83 524 85 527T92 535T103 539Q107 539 389 406T680 268Q694 260 694 249Q694 239 687 234Q685 232 395 95L107 -41H101Q90 -40 83 -26V523Z"></path>
          </defs>
          <g stroke="currentcolor" fill="currentcolor" stroke-width="0" transform="scale(1,-1)">
            <g data-mml-node="math">
              <g data-mml-node="mo">
                <use data-c="25B8" href="#MJX-10-TEX-N-25B8"></use>
              </g>
            </g>
          </g>
        </svg>
        <svg className='text-blue-600 absolute bottom- left-29px -bottom-0.5'id='move-right-x' xmlns="http://www.w3.org/2000/svg" width="22.035px" height="20.495px" viewBox="0 -442 572 453" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" style={{}}>
          <defs>
            <path id="MJX-11-TEX-I-1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z">
            </path>
          </defs>
          <g stroke="currentcolor" fill="currentcolor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi">
            <use data-c="1D465" href="#MJX-11-TEX-I-1D465"></use>
            </g></g>
          </g>
        </svg>
      </div>
    </footer>
  )
}
