'use client';

import { useState } from 'react';
import SIOTlogo from '../../../public/SIOTlogo.png';
import Image from 'next/image';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import '../../../globals.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <header className="bg-[url('/header.jpg')] bg-cover bg-center">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Image
            src={SIOTlogo}
            alt="SIOT Logo"
            width={100}
            height={100}
            className="object-contain"
            onClick={handleLogoClick}
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="https://github.com/siheon012/music_generate_web"
            className="text-lg font-semibold leading-6 text-white"
          >
            Github
          </a>
          <a
            href="https://huggingface.co/stabilityai/stable-audio-open-1.0"
            className="text-lg font-semibold leading-6 text-white"
          >
            Used Model
          </a>
          <a
            href="https://google.com"
            className="text-lg font-semibold leading-6 text-white"
          >
            Google
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-lg font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="https://github.com/siheon012/music_generate_web"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Github
                </a>
                <a
                  href="https://huggingface.co/stabilityai/stable-audio-open-1.0"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Used Model
                </a>
                <a
                  href="https://google.com"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Google
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
