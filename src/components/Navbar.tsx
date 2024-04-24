'use client'

import { Company } from '@/payload-types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  company: Company
}

const Navbar: React.FC<NavbarProps> = ({ company }) => {
  const currentPath = usePathname()
  const navClass = (path: string) =>
    currentPath === path ? 'nav-link w-nav-link w--current' : 'nav-link w-nav-link'

  return (
    <div className="header-section">
      <div className="top-bar-header-area">
        <div className="navbar w-nav" role="banner">
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
              <a href={company.catalogue.url} className="nav-link w-nav-link" target="_blank">
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
            >
              <div className="menu-icon w-icon-nav-menu" />
            </div>
          </div>
          <div className="w-nav-overlay" style={{ visibility: 'hidden' }}>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a
                href="/"
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                Home
              </a>
              <a
                href="/about-us"
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                About Us
              </a>
              <a
                href="/products"
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
                aria-current="page"
              >
                Products
              </a>
              <a
                href="/SC2023.pdf"
                target="_blank"
                className="nav-link w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                Catalog
              </a>
              <a
                href="/contact-us"
                className="nav-link last-child w-nav-link w--nav-link-open"
                style={{ maxWidth: '100%' }}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
