"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import blogData from '@/data/blogs.json';

export default function BlogPlatform() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Cloud Computing' | 'UI/UX Design' | 'Leadership'>('All');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);

  const filteredBlogs = blogData.blogs.filter(post => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const activeBlog = blogData.blogs.find(post => post.slug === activeBlogSlug);

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Publication Center
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Technical Blogs & Learning Journals</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            Sharing architectural insights, lessons from university capstone leadership, Figma-to-code styling practices, and AWS cloud networking concepts.
          </p>
        </div>

        {/* Categories Bar */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {(['All', 'Cloud Computing', 'UI/UX Design', 'Leadership'] as const).map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActiveBlogSlug(null); // Clear active blog if category changes
              }}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                background: selectedCategory === category ? 'var(--secondary)' : 'var(--surface-solid)',
                color: selectedCategory === category ? '#080C14' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: selectedCategory === category ? 'var(--secondary)' : 'var(--border)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog layout: List on Left, Active Article details on Right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', alignItems: 'start' }}>
          {/* Left: Articles List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredBlogs.map((post) => {
              const isSelected = activeBlogSlug === post.slug;
              return (
                <GlassCard
                  key={post.slug}
                  interactive
                  onClick={() => setActiveBlogSlug(post.slug)}
                  style={{
                    borderColor: isSelected ? 'var(--secondary)' : 'var(--border)',
                    background: isSelected ? 'rgba(0, 240, 255, 0.04)' : 'var(--surface)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
                    {post.summary}
                  </p>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary)' }}>
                    Read Article {isSelected ? '▲' : '→'}
                  </span>
                </GlassCard>
              );
            })}

            {filteredBlogs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                No articles published under this category yet.
              </div>
            )}
          </div>

          {/* Right: Selected Article Content Reader */}
          <div>
            {activeBlog ? (
              <GlassCard glowColor={activeBlog.category === 'Cloud Computing' ? 'orange' : 'cyan'} style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: activeBlog.category === 'Cloud Computing' ? 'var(--primary)' : 'var(--secondary)',
                    background: activeBlog.category === 'Cloud Computing' ? 'rgba(255, 153, 0, 0.05)' : 'rgba(0, 240, 255, 0.05)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: activeBlog.category === 'Cloud Computing' ? 'rgba(255, 153, 0, 0.15)' : 'rgba(0, 240, 255, 0.15)'
                  }}>
                    {activeBlog.category}
                  </span>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {activeBlog.date} • {activeBlog.readTime}
                  </div>
                </div>

                <h1 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '24px' }}>
                  {activeBlog.title}
                </h1>

                <div 
                  style={{ 
                    fontSize: '1rem', 
                    color: 'var(--text-secondary)', 
                    lineHeight: '1.7',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                  dangerouslySetInnerHTML={{ __html: activeBlog.content }}
                />

                <div style={{ borderTop: '1px solid var(--border)', marginTop: '30px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Written by Sojib Hossen</span>
                  <button 
                    onClick={() => setActiveBlogSlug(null)}
                    style={{ background: 'transparent', border: 'none', color: 'var(--secondary)', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Close Reader
                  </button>
                </div>
              </GlassCard>
            ) : (
              <GlassCard style={{ padding: '60px 40px', textAlign: 'center', borderStyle: 'dashed', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>📖</span>
                <h3>Article Reader Empty</h3>
                <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>
                  Select an article from the left directory to begin reading.
                </p>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
