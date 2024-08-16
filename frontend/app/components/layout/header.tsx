"use client";  

import { useState } from 'react';
import SIOTlogo from '../../../public/SIOTlogo.png';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SIOT</span>
            <Image
              src={SIOTlogo}
              alt="SIOT Logo"
              width={150}  
              height={150} 
              className="object-contain"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {/* 햄버거 메뉴 아이콘 */}
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-gray-800 opacity-50"></div>
          <div className="fixed inset-y-0 right-0 z-20 w-full max-w-sm p-6 bg-white shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">SIOT</span>
                <Image
                  src={SIOTlogo}
                  alt="SIOT Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                {/* 닫기 버튼 아이콘 */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-6">
              <a
                href="/mypage"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                My Page
              </a>
              <a
                href="#"
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                E-oN
              </a>
              <a
                href="/signin"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                Log in
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
