import Link from 'next/link'
import { Company } from '@/payload-types'
import React from 'react'

interface FooterProps {
  company: Company
}

const Footer: React.FC<FooterProps> = async ({ company }) => {
  return (
    <div className="footer-section" style={{ borderTop: '1px solid #e5e5e5' }}>
      <div className="container w-container">
        <div className="w-layout-grid footer-grid-wrap wf-grid">
          <div className="footer-widget-wrap">
            <Link href="/" className="w-inline-block">
              <img
                src="/logo.png"
                loading="lazy"
                alt="Slate Logo"
                className="footer-logo"
                height={50}
              />
            </Link>
            <p className="footer-intro-content">{company.tagline}</p>
            <div className="footer-social-wrap">
              {company.social_links.map((social_link: any, index: number) => (
                <a
                  href={social_link.link}
                  key={index}
                  className="footer-social-link w-inline-block"
                >
                  <img src={social_link.icon.url} alt={social_link.icon.alt} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-widget-wrap" />
          <div className="footer-widget-wrap">
            <h2 className="footer-widget-title">Explore</h2>
            <div className="footer-menu-links-wrap">
              <Link href="/about-us" className="footer-link">
                About Us
              </Link>
              <Link href="/products" className="footer-link">
                Products
              </Link>
              <a href="/SC2023.pdf" target="_blank" className="footer-link">
                Catalog
              </a>
              <Link href="/contact-us" className="footer-link">
                Contact Us
              </Link>
            </div>
          </div>
          <div
            id="w-node-_4ad27981-f856-0dec-8c9f-fc9622f4d8a6-22f4d87a"
            className="footer-widget-wrap footer-widget-four"
          >
            <h2 className="footer-widget-title">Contact</h2>
            <div className="footer-address-wrap">
              <a href={`mailto:${company.email}`} className="footer-link">
                {company.email}
              </a>
              <a href={`tel:${company.phone}`} className="footer-link">
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="copyright-content">
          {' '}
          Actual products may differ from the given images. The product details given here may be
          incomplete. Please download our{' '}
          <a href={company.catalogue.url} target="_blank">
            Catalogue
          </a>{' '}
          or write to us for further details. <br />
          Copyright © Slate | Designed by <a href="https://saileshkumar.dev">Sailesh</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
