"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRole, UserRole } from '@/context/RoleContext';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { role, setRole } = useRole();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown on navigation change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const getRoleLabel = (r: UserRole) => {
    switch (r) {
      case 'recruiter': return '💼 Recruiter View';
      case 'scholar': return '🎓 Academic View';
      case 'client': return '⭐ Client View';
      default: return '🧭 Explore View';
    }
  };

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Academic Hub', href: '/academic' },
    { label: 'Projects', href: '/projects' },
    { label: 'AWS Cloud', href: '/aws' },
    { label: 'UI/UX Design', href: '/ui-ux' },
    { label: 'Skills', href: '/skills' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoArea}>
          <h1 className={styles.logoTitle}>
            Sojib Hossen<span className={styles.logoDot}></span>
          </h1>
          <span className={styles.logoSubtitle}>CSE Graduate & Cloud Architect</span>
        </Link>

        {/* Desktop Links */}
        <nav className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Role + CTA) */}
        <div className={styles.actionsArea}>
          {/* Dynamic Role Selector */}
          <div className={styles.roleSelector}>
            <button className={styles.roleBtn} onClick={toggleDropdown}>
              <span className={`${styles.roleBadge} ${styles[`badge-${role}`]}`}></span>
              {getRoleLabel(role)}
            </button>
            {dropdownOpen && (
              <div className={styles.roleDropdown}>
                {(['general', 'recruiter', 'scholar', 'client'] as UserRole[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      setDropdownOpen(false);
                    }}
                    className={`${styles.roleOption} ${role === r ? styles.roleOptionActive : ''}`}
                  >
                    <span className={`${styles.roleBadge} ${styles[`badge-${r}`]}`}></span>
                    {r.charAt(0).toUpperCase() + r.slice(1)} Mode
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dynamic Action Button */}
          {role === 'recruiter' ? (
            <Link href="/resume" className={`${styles.ctaBtn} ${styles.recruiterCta}`}>
              ATS Matcher
            </Link>
          ) : (
            <Link href="/about#contact" className={`${styles.ctaBtn} ${styles.primaryCta}`}>
              Connect
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNavLinks}>
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.mobileActions}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Choose Persona
                </span>
                {(['general', 'recruiter', 'scholar', 'client'] as UserRole[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setRole(r);
                      setMobileMenuOpen(false);
                    }}
                    style={{
                      padding: '12px',
                      borderRadius: '6px',
                      background: role === r ? 'rgba(0, 240, 255, 0.08)' : 'var(--surface-solid)',
                      border: '1px solid var(--border)',
                      color: role === r ? 'var(--text-primary)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer'
                    }}
                  >
                    <span className={`${styles.roleBadge} ${styles[`badge-${r}`]}`}></span>
                    {r.charAt(0).toUpperCase() + r.slice(1)} Mode
                  </button>
                ))}
              </div>

              {role === 'recruiter' ? (
                <Link href="/resume" className={`${styles.ctaBtn} ${styles.recruiterCta}`} style={{ width: '100%' }}>
                  ATS Matcher
                </Link>
              ) : (
                <Link href="/about#contact" className={`${styles.ctaBtn} ${styles.primaryCta}`} style={{ width: '100%' }}>
                  Connect
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
