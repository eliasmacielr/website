"use client"

import Link from 'next/link';
import { MouseEventHandler } from 'react';

export default function Header() {
  function myFunction(): void {
    var x = document.getElementById("myLinks");
    if (x !== null) {
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
  }

  return (
    <header className="flex flex-col items-center bg-slate-800 text-gray-200">
      <div className="max-w-screen-xl w-full">
        <h1 className="text-xl lg:text-5xl text-left lg:text-center pl-10 pb-2 pt-4 lg:pt-16 lg:pb-6">Elias Maciel&apos;s Home Page</h1>
      </div>
      <div className="topnav w-full lg:w-auto">
        <div id="myLinks" className="hidden lg:text-xl lg:flex flex-col lg:flex-row lg:justify-center lg:py-4 lg:gap-8">
          <Link className="py-1 px-8 order-2" href="/projects">Projects</Link>
          <Link className="py-1 px-8 order-4 mb-4 lg:mb-0" href="/contact-info">Contact &amp; Info</Link>
          <Link className="py-1 px-8 order-3" href="/courses-teaching">Courses &amp; Teaching</Link>
          <Link className="py-1 px-8 order-1" href="/">Home</Link>
        </div>
        <a href="#" className="absolute right-0 top-0 p-3.5 lg:hidden" onClick={myFunction as MouseEventHandler<HTMLAnchorElement>}>
          Menu
        </a>
      </div>
    </header>
  );
}
