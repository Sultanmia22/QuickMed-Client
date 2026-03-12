'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MobileNavLinkProps {
  children: string
  href: string
  onClick?: () => void
}

const MobileNavLink = ({ children, href,onClick }: MobileNavLinkProps) => {

     const pathName = usePathname()
    
      const isActive = href === '/' 
        ? pathName === '/' 
        : pathName === href;
    

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${isActive ? 'text-secondary font-semibold border border-secondary' : 'text-primary'} block w-full text-primary text-lg font-medium py-3 px-4 rounded-lg border border-primary hover:text-secondary transition-colors duration-200 `}
    >
      {children}
    </Link>
  )
}

export default MobileNavLink