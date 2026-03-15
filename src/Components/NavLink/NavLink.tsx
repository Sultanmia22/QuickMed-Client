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
   <Link 
  className={`relative px-3 py-2 transition-all duration-300 group ${
    isActive ? 'text-secondary font-bold' : 'text-primary hover:text-secondary'
  }`} 
  href={href}
>
  {children}
  {/* Active Indicator */}
  {isActive && (
    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-full shadow-[0_0_10px_rgba(var(--secondary-rgb),0.5)]" />
  )}
</Link>
  )
}

export default NavLink