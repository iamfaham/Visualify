'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const MobileNav = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    // Function to handle link click and close sidebar
    const handleLinkClick = () => {
        setSidebarOpen(false)
    }

    return (
        <header className='header'>
            <Link href='/home' className='flex items-center gap-2 md:py-2' onClick={handleLinkClick}>
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
                    <Sheet open={isSidebarOpen} onOpenChange={setSidebarOpen}>
                        <SheetTrigger>
                            <Image 
                                src='/assets/icons/menu.svg' alt='menu' 
                                width={32} height={32} className='cursor-pointer'
                            />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64 flex flex-col h-full'>
                            <div className='flex-grow'>
                                <Image 
                                    src='/logo.png' alt='logo'
                                    width={40} height={20}
                                />
                                <ul className='header-nav_elements'>
                                    {navLinks.slice(0,6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`${isActive && 'button-gradient rounded-full w-full text-white'} p-18 flex whitespace-nowrap text-dark-700`}>
                                            <Link 
                                                href={link.route} 
                                                className='sidebar-link cursor-pointer z-10'
                                                onClick={handleLinkClick}  // Close sidebar on link click
                                            >
                                                <Image src={link.icon} alt='logo' width={24} height={24} />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )})
                                    }
                                </ul>
                            </div>
                            <div>
                                <ul className=''>
                                    {navLinks.slice(6).map((link) => {
                                        const isActive = link.route === pathname
                                        return (
                                            <li key={link.route} className={`sidebar-nav_element group 
                                            ${ isActive ? 'button-gradient text-white' : 'text-gray-700'}`}>
                                                <Link href={link.route} className='sidebar-link' onClick={handleLinkClick}>
                                                    <Image src={link.icon} alt='logo' width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
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
