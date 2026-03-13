'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa'
import NavLink from '@/Components/NavLink/NavLink'
import MobileNavLink from '@/Components/NavLink/MobileNavLink'

type NavLinkType = {
  name: string
  path: string
}

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false)
 

  // dummy auth state
  const isAuthenticate: boolean = false;

  // dummy user
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    role: 'patient'
  }

  const getNavLink = (role:string): NavLinkType[] => {
    const baseLinks = [
      { name: 'Home', path: '/' },
    ];

    if (role === 'doctor') {
      return baseLinks
    };

    return [
      ...baseLinks,
      { name: 'Find Doctors', path: '/service' },
      ...(role === 'patient' ? [{ name: 'My Appointments', path: '/my-appointments' }] : []),
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'How It Works', path: '/how-it-works' },
    ];
  }

 

 const navLinks = getNavLink(user.role)

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-base-100 py-5 w-full border-b border-base-200'>

      <nav className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center relative'>

        {/* Logo */}
        <div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className='absolute left-0 top-full w-full md:hidden z-50'>
              <ul className='flex flex-col gap-5 bg-base-100 py-4 px-5 shadow-xl text-center rounded-b-xl'>
                {navLinks.map((link) => (
                  <MobileNavLink onClick={toggleMenu} key={link.path} href={link.path}>
                    {link.name}
                  </MobileNavLink>
                ))}
              </ul>
            </div>
          )}

          <div className='flex items-center gap-3'>

            <div onClick={toggleMenu} className='md:hidden'>
              {isMenuOpen
                ? <RxCross1 className='text-primary' size={20} />
                : <FaBars className='text-primary' size={20} />
              }
            </div>

            <Link href='/' className='text-xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent '>
              QuickMed
            </Link>

          </div>

        </div>

        {/* Desktop Nav */}
        <ul className='md:gap-6 text-neutral items-center hidden md:flex font-medium'>
          {navLinks.map((link) => (
            <NavLink key={link.path} href={link.path}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* Profile / Auth */}
        <div className='flex items-center gap-5'>

          {isAuthenticate ? (

            <div className='relative'>

              <div
                onClick={() => setOpenProfileMenu(!openProfileMenu)}
                className="cursor-pointer border-2 border-primary rounded-full p-0.5 hover:shadow-lg transition-all"
              >

                <img
                  src={user.image}
                  alt='profile-picture'
                  className='rounded-full object-cover w-11 h-11'
                />

              </div>

              {openProfileMenu && (

                <div className='absolute right-0 mt-3 z-50 w-56 bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden'>

                  {/* profile header */}
                  <div className='flex items-center gap-3 px-4 py-3 bg-primary/5 border-b border-base-200'>

                    <img
                      src={user.image}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover border border-transparent bg-linear-to-r from-primary to-secondary bg-clip-border"
                    />

                    <div className="flex flex-col">
                      <p className='text-sm font-semibold text-neutral'>
                        {user.name}
                      </p>
                      <p className='text-xs opacity-60 truncate'>
                        {user.email}
                      </p>
                    </div>

                  </div>

                  <ul className='flex flex-col p-2 text-sm'>

                      <li>
                      <Link
                        href="/dashboard"
                        className='flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200'
                      >
                       Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/profile"
                        className='flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200'
                      >
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/settings"
                        className='flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200'
                      >
                        Settings
                      </Link>
                    </li>

                    <div className="my-1 border-t-2 border-base-300"></div>

                    <li>
                      <button className='flex items-center px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200 w-full'>
                        Logout
                      </button>
                    </li>

                  </ul>

                </div>

              )}

            </div>

          ) : (

            <Link
              href='/login'
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Login
            </Link>

          )}

        </div>

      </nav>

    </div>
  )
}

export default Navbar