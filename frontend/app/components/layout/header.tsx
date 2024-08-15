//Header.js
import { useState } from 'react';
import SIOTlogo from '../assets/SIOTlogo.png';
import Image from 'next/image';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-Header z-index=50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SIOT</span>
            <Image
      src={SIOTlogo}
      alt="Picture of me"
      placeholder="blur" // Optional blur-up while loading
    />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/mypage"
            className="text-sm font-semibold leading-6 text-white"
          >
            My Page <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
     
        <div className="fixed inset-0 z-10" />


          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">

                <a
                  href="/mypage"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  My Page
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  E-oN
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/signin"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>

    </header>
  );
}