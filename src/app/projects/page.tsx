"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import projectData from '@/data/projects.json';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AWS Cloud' | 'UI/UX Design' | 'Web Development'>('All');

  const filteredProjects = projectData.projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AWS Cloud') return project.category.includes('AWS') || project.category.includes('Cloud');
    if (activeFilter === 'UI/UX Design') return project.category.includes('UI/UX') || project.category.includes('Design');
    if (activeFilter === 'Web Development') return project.category.includes('Web') || project.category.includes('Full Stack');
    return true;
  });

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Engineering Repo
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Academic & Professional Projects</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            A comprehensive list of web development, UI/UX layouts, and AWS cloud deployments. Highlights contain system architectures, problem statements, and my leadership contributions.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(['All', 'AWS Cloud', 'UI/UX Design', 'Web Development'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                background: activeFilter === filter ? 'var(--secondary)' : 'var(--surface-solid)',
                color: activeFilter === filter ? '#080C14' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeFilter === filter ? 'var(--secondary)' : 'var(--border)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {filteredProjects.map((project) => {
            const isAws = project.category.includes('AWS') || project.category.includes('Cloud');
            return (
              <GlassCard 
                key={project.id} 
                glowColor={isAws ? 'orange' : 'cyan'}
                style={{ padding: '30px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      fontFamily: 'var(--font-mono)', 
                      color: isAws ? 'var(--primary)' : 'var(--secondary)',
                      background: isAws ? 'rgba(255, 153, 0, 0.05)' : 'rgba(0, 240, 255, 0.05)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid',
                      borderColor: isAws ? 'rgba(255, 153, 0, 0.15)' : 'rgba(0, 240, 255, 0.15)'
                    }}>
                      {project.category}
                    </span>
                    <h3 id={project.id} style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '12px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontStyle: 'italic', marginTop: '4px' }}>
                      {project.tagline}
                    </p>
                  </div>

                  {project.role.includes('Leader') && (
                    <span style={{ 
                      fontSize: '0.8rem', 
                      fontWeight: 700, 
                      color: '#080C14', 
                      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', 
                      padding: '6px 12px', 
                      borderRadius: '4px',
                      boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)'
                    }}>
                      👑 Team Leader Role
                    </span>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginTop: '30px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                  {/* Detailed Description */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                        🔴 The Problem Statement
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                        🟢 Proposed Solution
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                        👤 My Contributions (STAR Framework)
                      </h4>
                      <ul style={{ paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.5' }}>
                        {project.contributions.map((contribution, idx) => (
                          <li key={idx}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Architecture & Tech Stack */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', background: 'rgba(255,255,255,0.01)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '1px', marginBottom: '10px' }}>
                        ⚙️ System Architecture
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {project.architecture}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '1px', marginBottom: '10px' }}>
                        🛠️ Tech Stack
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            style={{ 
                              fontSize: '0.78rem', 
                              fontFamily: 'var(--font-mono)', 
                              color: 'var(--text-secondary)', 
                              background: 'var(--surface-solid)', 
                              padding: '4px 8px', 
                              borderRadius: '4px',
                              border: '1px solid var(--border)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: '10px', display: 'flex', gap: '12px' }}>
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="glass-interactive" 
                          style={{ flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}
                        >
                          💻 Github
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          className="glass-interactive" 
                          style={{ flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary)' }}
                        >
                          🌐 Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(0, 240, 255, 0.02)', padding: '16px', borderRadius: '8px', borderLeft: '3px solid', borderColor: isAws ? 'var(--primary)' : 'var(--secondary)', marginTop: '24px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    💡 Lessons Learned
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {project.lessons}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
