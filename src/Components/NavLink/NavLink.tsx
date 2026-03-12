import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
children:string;
  href: string;
 
}

const NavLink = ({children,href}:NavLinkProps) => {

  const pathName = usePathname()

  const isActive = href === '/' 
    ? pathName === '/' 
    : pathName === href;

  return (
    <Link className={`${isActive ? 'text-secondary font-semibold' : 'text-primary'} hover:text-secondary transition-colors duration-200`} href={href}>{children}</Link>
  )
}

export default NavLink