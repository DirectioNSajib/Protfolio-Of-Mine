"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandColumn}>
            <h3 className={styles.brandTitle}>Sojib Hossen</h3>
            <p className={styles.brandDesc}>
              A comprehensive digital headquarters archiving my educational journey, software development, UI/UX designs, and AWS cloud engineering projects.
            </p>
            <div className={styles.socials}>
              <a href="https://github.com/sojib" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                🐙
              </a>
              <a href="https://linkedin.com/in/sojib" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                🔗
              </a>
              <a href="mailto:sojib@example.com" className={styles.socialIcon} aria-label="Email">
                ✉️
              </a>
              <a href="https://fiverr.com/sojib" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Fiverr">
                ⭐
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div>
            <h4 className={styles.colTitle}>Sitemap</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/about">About Me</Link></li>
              <li className={styles.linkItem}><Link href="/academic">Academic Journey</Link></li>
              <li className={styles.linkItem}><Link href="/projects">Projects Repo</Link></li>
              <li className={styles.linkItem}><Link href="/skills">Skills Hub</Link></li>
            </ul>
          </div>

          {/* Specializations Links */}
          <div>
            <h4 className={styles.colTitle}>Specialize</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/aws">AWS Cloud Center</Link></li>
              <li className={styles.linkItem}><Link href="/ui-ux">UI/UX Showcase</Link></li>
              <li className={styles.linkItem}><Link href="/blog">Tech Blogs</Link></li>
              <li className={styles.linkItem}><Link href="/resume">ATS Resume</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span>📍</span>
                <span>Daffodil International University, Bangladesh</span>
              </div>
              <div className={styles.contactItem}>
                <span>✉️</span>
                <a href="mailto:sojib@example.com">sojib@example.com</a>
              </div>
              <div className={styles.contactItem}>
                <span>💼</span>
                <span>Fiverr: @sojib_uiux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p>© {currentYear} Sojib Hossen. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/resume">ATS-Scan</Link>
            <Link href="/about#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
