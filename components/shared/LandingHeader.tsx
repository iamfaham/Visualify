import Link from 'next/link';
import React from 'react';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

const LandingHeader = () => {
  const { userId } = auth();
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-lg bg-gray-300 bg-opacity-30 border border-gray-600 rounded-lg text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center'>
          <Image src='/logo.png' width={60} height={60} alt='logo' className='px-2' />
          <h1 className="text-2xl font-bold px-2 logo-gradient hidden md:inline">Visualify</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {userId ? (
              <Link href='/home' className='button-gradient py-2 px-4 rounded-lg'>Home</Link>
            ) : (
              <>
                <li><Link href="/sign-in" className='button-gradient text-sm md:text-md py-2 px-4 rounded-lg'>Sign in</Link></li>
                <li><Link href="/sign-up" className='button-gradient text-sm md:text-md py-2 px-4 rounded-lg'>Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LandingHeader;
