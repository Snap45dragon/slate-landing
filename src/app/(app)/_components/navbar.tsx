'use client'

import { Company } from '@/payload-types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface NavbarProps {
  company: AdjustDepth<Company, 1>
}

const Navbar: React.FC<NavbarProps> = ({ company }) => {
  const currentPath = usePathname()
  const navClass = (path: string) =>
    currentPath === path ? 'nav-link w-nav-link w--current' : 'nav-link w-nav-link'

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="header-section">
      <div className="top-bar-header-area">
        <div className="navbar w-nav" role="banner" data-collapse="medium">
          <div className="container w-container">
            <Link href="/" aria-current="page" className="brand w-nav-brand" aria-label="home">
              <img src="/logo.png" loading="lazy" alt="Slate Logo" height={50} />
            </Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link href="/" className={navClass('/')}>
                Home
              </Link>
              <Link href="/about-us" className={navClass('/about-us')}>
                About Us
              </Link>
              <Link href="/products" className={navClass('/products')}>
                Products
              </Link>
              <a href="/slate_catalogue.pdf" className="nav-link w-nav-link" target="_blank">
                Catalog
              </a>
              <Link href="/contact-us" className={navClass('/contact-us')}>
                Contact Us
              </Link>
            </nav>
            <div
              className="menu-button w-nav-button"
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <div className="menu-icon w-icon-nav-menu" />
            </div>
          </div>
          <div
            className="w-nav-overlay"
            style={mobileNavOpen ? { visibility: 'visible' } : { visibility: 'hidden' }}
          >
            <nav
              role="navigation"
              className="nav-menu w-nav-menu"
              data-nav-menu-open
              style={
                mobileNavOpen
                  ? {
                      transform: 'translateY(0px) translateX(0px)',
                      transition: 'transform 400ms ease 0s',
                      borderBottom: '1px solid #e5e5e5',
                    }
                  : {
                      transform: 'translateY(-350px) translateX(0px)',
                      transition: 'transform 400ms ease 0s',
                      borderBottom: '1px solid #e5e5e5',
                    }
              }
            >
              <Link
                href="/"
                onClick={() => setMobileNavOpen(false)}
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileNavOpen(false)}
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                About Us
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileNavOpen(false)}
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
                aria-current="page"
              >
                Products
              </Link>
              <a
                href="/slate_catalogue.pdf"
                target="_blank"
                onClick={() => setMobileNavOpen(false)}
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                Catalog
              </a>
              <Link
                href="/contact-us"
                onClick={() => setMobileNavOpen(false)}
                className="nav-link last-child w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
