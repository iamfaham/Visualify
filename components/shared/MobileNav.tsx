'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'


const MobileNav = () => {
    const pathname = usePathname()
  return (
    <header className='header'>
        <Link href='/home' className='flex items-center gap-2 md:py-2'>
            <Image 
                src='/logo.png' 
                alt='logo'
                width={40}
                height={20}
            />
        </Link>

        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
                <Sheet>
                    <SheetTrigger>
                        <Image 
                            src='/assets/icons/menu.svg' alt='menu' 
                            width={32} height={32} className='cursor-pointer'
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                        <>
                            <Image 
                                src='/logo.png' alt='logo'
                                width={40} height={20}
                            />
                            <ul className='header-nav_elements'>
                                {navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`${ isActive && 'button-gradient rounded-full w-full text-white'} p-18 flex whitespace-nowrap text-dark-700`}>
                                        <Link href={link.route} className='sidebar-link cursor-pointer z-10'>
                                            <Image src={link.icon} alt='logo' width={24} height={24} />
                                            {link.label}
                                        </Link>
                                    </li>)
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>
            </SignedIn>
            <SignedOut>
                <Button asChild className='button button-gradient bg-cover'>
                    <Link href='/sign-in'>Login</Link>
                </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav