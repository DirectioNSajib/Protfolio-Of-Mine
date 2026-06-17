"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRole, UserRole } from '@/context/RoleContext';
import { GlassCard } from '@/components/ui/GlassCard';
import styles from './page.module.css';
import projectData from '@/data/projects.json';
import cpData from '@/data/cp.json';

export default function Home() {
  const { role, setRole } = useRole();
  const [terminalStep, setTerminalStep] = useState(0);

  // Simple terminal text simulation
  useEffect(() => {
    const timer1 = setTimeout(() => setTerminalStep(1), 800);
    const timer2 = setTimeout(() => setTerminalStep(2), 1600);
    const timer3 = setTimeout(() => setTerminalStep(3), 2400);
    const timer4 = setTimeout(() => setTerminalStep(4), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const featuredProjects = projectData.projects.filter(p => p.featured);

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className={styles.badge}>CSE Student</span>
                <span className={`${styles.badge} ${styles.awsBadge}`}>Cloud Specialist</span>
              </div>
              <h2 className={styles.title}>
                Hi, I'm <span className="gradient-text-cyan">Sojib Hossen</span> <br />
                <span style={{ fontSize: '2.5rem', fontWeight: 600 }}>Building the Next Gen of Cloud & Design</span>
              </h2>
              <p className={styles.subtitle}>
                A Computer Science & Engineering student from Daffodil International University. 
                I bridge the gap between robust AWS Cloud architecture, frontend web engineering, and intuitive UI/UX design.
              </p>

              <div className={styles.ctaGroup}>
                <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                  View Projects <span>→</span>
                </Link>
                <Link href="/about" className={`${styles.btn} ${styles.btnSecondary}`}>
                  More About Me
                </Link>
              </div>
            </div>

            {/* Interactive Terminal Showcase */}
            <div className={styles.heroArt}>
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <span className={styles.termDot} style={{ background: '#FF5F56' }}></span>
                  <span className={styles.termDot} style={{ background: '#FFBD2E' }}></span>
                  <span className={styles.termDot} style={{ background: '#27C93F' }}></span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)' }}>bash</span>
                </div>
                <div className={styles.termBody}>
                  <div className={styles.termLine}>
                    <span className={styles.prompt}>$</span> <span className={styles.cmd}>ssh sojib@diu-cse.net</span>
                  </div>
                  {terminalStep >= 1 && (
                    <div className={styles.termLine}>
                      <span className={styles.output}>Connecting to diu-cse.net...</span>
                    </div>
                  )}
                  {terminalStep >= 2 && (
                    <div className={styles.termLine}>
                      <span className={styles.output}>Verification: AWS Cloud Practitioner ✅</span>
                    </div>
                  )}
                  {terminalStep >= 3 && (
                    <div className={styles.termLine}>
                      <span className={styles.output}>Fiverr Portfolio: Active UI/UX Designer 🎨</span>
                    </div>
                  )}
                  {terminalStep >= 4 && (
                    <div className={styles.termLine}>
                      <span className={styles.prompt}>$</span> <span className={styles.cmd}>node stats.js</span>
                      <br />
                      <span style={{ color: '#00F0FF' }}>
                        &#123; gpa: 3.93, aws_services: 11, cp_solved: {cpData.summary.totalSolved} &#125;
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Customizer Segment */}
      <section style={{ padding: '40px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Personalize Your Experience
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
              Select your background to highlight the resources most relevant to you:
            </p>
          </div>
          <div className={styles.roleSelectorBar}>
            {(['general', 'recruiter', 'scholar', 'client'] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`${styles.selectorBtn} ${role === r ? styles.selectorBtnActive : ''}`}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)} Mode
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <GlassCard interactive glowColor="default" className={styles.statCard}>
              <span className={`${styles.statNumber} gradient-text-cyan`}>10</span>
              <span className={styles.statLabel}>Semesters</span>
            </GlassCard>
            <GlassCard 
              interactive 
              glowColor={role === 'scholar' ? 'cyan' : 'default'} 
              className={`${styles.statCard} ${role === 'scholar' ? styles.highlighted : ''}`}
            >
              <span className={`${styles.statNumber} gradient-text-cyan`}>3.93</span>
              <span className={styles.statLabel}>Avg GPA</span>
            </GlassCard>
            <GlassCard 
              interactive 
              glowColor={role === 'recruiter' ? 'orange' : 'default'} 
              className={`${styles.statCard} ${role === 'recruiter' ? styles.highlightedAws : ''}`}
            >
              <span className={`${styles.statNumber} gradient-text-orange`}>11</span>
              <span className={styles.statLabel}>AWS Services</span>
            </GlassCard>
            <GlassCard 
              interactive 
              glowColor={role === 'client' ? 'cyan' : 'default'} 
              className={`${styles.statCard} ${role === 'client' ? styles.highlighted : ''}`}
            >
              <span className={`${styles.statNumber} gradient-text-cyan`}>15+</span>
              <span className={styles.statLabel}>Fiverr Orders</span>
            </GlassCard>
            <GlassCard interactive glowColor="default" className={styles.statCard}>
              <span className={`${styles.statNumber} gradient-text-cyan`}>{cpData.summary.totalSolved}+</span>
              <span className={styles.statLabel}>CP Problems</span>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Highlights</span>
            <h3 className={styles.sectionTitle}>Featured Projects</h3>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <GlassCard 
                key={project.id} 
                interactive 
                glowColor={project.category.includes('AWS') ? 'orange' : 'cyan'}
              >
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: project.category.includes('AWS') ? 'var(--primary)' : 'var(--secondary)' }}>
                  {project.category}
                </span>
                <h4 style={{ fontSize: '1.25rem', marginTop: '8px', marginBottom: '12px' }}>{project.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {project.tagline}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Role: {project.role}</span>
                  <Link href={`/projects#${project.id}`} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary)' }}>
                    Case Study →
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Fiverr Spotlight) */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border)', background: 'rgba(0, 240, 255, 0.005)' }}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ alignItems: 'center', textAlign: 'center' }}>
            <span className={styles.sectionSubtitle}>Testimonials</span>
            <h3 className={styles.sectionTitle}>Fiverr Freelance Reviews</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '20px' }}>
            <GlassCard>
              <div style={{ display: 'flex', gap: '4px', color: '#FFB800', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                "Sojib delivered an exceptional UI design in Figma. He listened to all requirements, was structured as a leader, and aligned components perfectly to our React variables. Highly recommended!"
              </p>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>E-commerce Client</span>
                <span style={{ color: 'var(--text-muted)' }}>United States</span>
              </div>
            </GlassCard>

            <GlassCard>
              <div style={{ display: 'flex', gap: '4px', color: '#FFB800', marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                "Great frontend coding and UI assets translation. The code modules are organized, responsive, and deploy clean. Sojib is polite and structured."
              </p>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Web Dev Client</span>
                <span style={{ color: 'var(--text-muted)' }}>United Kingdom</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
