"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';

export default function UIUXPortfolio() {
  const [beforeAfterSelected, setBeforeAfterSelected] = useState<'before' | 'after'>('after');

  const processSteps = [
    { title: "1. Empathize", desc: "Conducting user interviews, reviewing competitors, and creating empathy maps to discover real client bottlenecks." },
    { title: "2. Define", desc: "Synthesizing research into target User Personas and defining structural problem statements." },
    { title: "3. Ideate", desc: "Brainstorming user flows, sketch layouts, and mapping site hierarchies before drawing shapes." },
    { title: "4. Prototype", desc: "Constructing modular component UI kits and connecting high-fidelity wireframes in Figma." },
    { title: "5. Test", desc: "Running interactive prototype tests with target personas and refining micro-interactions." }
  ];

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Visual Experience
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>UI/UX Design Portfolio</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            A dedicated experience center showcasing my user research methods, design thinking paradigms, interactive Figma links, and Fiverr freelancing statistics.
          </p>
        </div>

        {/* Fiverr Metrics & Design Systems */}
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <GlassCard glowColor="cyan">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--secondary)', marginBottom: '16px' }}>⭐ Fiverr Design Center</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <div>
                  <strong>Fiverr Profile:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>@sojib_uiux (Level-1 Badge Candidate)</div>
                </div>
                <div>
                  <strong>Completed Orders:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>15+ Client Contracts (Web design & Mobile dashboards)</div>
                </div>
                <div>
                  <strong>Rating:</strong>
                  <div style={{ color: '#FFB800' }}>5.0 / 5.0 (12+ reviews)</div>
                </div>
                <div>
                  <strong>Figma Hand-off Rate:</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>100% Client Satisfaction with components library delivery</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="cyan">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--secondary)', marginBottom: '16px' }}>🎨 Figma Design Systems</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                I design with frontend engineering in mind. In Figma, I organize variables (color tokens, spacing multipliers) and build responsive components using Auto-Layout, allowing developers to translate wireframes to CSS code.
              </p>
            </GlassCard>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>The Design Thinking Process</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {processSteps.map((step) => (
                <GlassCard key={step.title} style={{ padding: '20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '6px' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{step.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Before/After Design Comparison Widget */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '50px', marginTop: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>UX Evolution Center</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
              Inspect how visual hierarchy and accessibility standards improve the user checkout experience:
            </p>
            <div style={{ display: 'inline-flex', background: 'var(--surface-solid)', padding: '6px', border: '1px solid var(--border)', borderRadius: '25px', marginTop: '16px', gap: '6px' }}>
              <button 
                onClick={() => setBeforeAfterSelected('before')}
                style={{
                  background: beforeAfterSelected === 'before' ? '#EF4444' : 'transparent',
                  color: beforeAfterSelected === 'before' ? '#080C14' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Before UX Refresh
              </button>
              <button 
                onClick={() => setBeforeAfterSelected('after')}
                style={{
                  background: beforeAfterSelected === 'after' ? 'var(--secondary)' : 'transparent',
                  color: beforeAfterSelected === 'after' ? '#080C14' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                After UX Refresh
              </button>
            </div>
          </div>

          <GlassCard glowColor="cyan" style={{ padding: '30px' }}>
            {beforeAfterSelected === 'before' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', opacity: 0.7 }}>
                <span style={{ fontSize: '0.8rem', color: '#EF4444', fontWeight: 700 }}>❌ Problems: High Cognitive Load, Unaligned Elements, Plain Gray buttons</span>
                <div style={{ border: '1px solid red', padding: '24px', borderRadius: '8px', background: '#222', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Product Checkout</div>
                  <div style={{ color: '#aaa', fontSize: '0.9rem' }}>Enter information below to get your product. We support cards.</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" placeholder="Card number" style={{ padding: '8px', border: '1px solid #777' }} />
                    <input type="text" placeholder="Expiry" style={{ padding: '8px', border: '1px solid #777', width: '80px' }} />
                    <input type="text" placeholder="CVV" style={{ padding: '8px', border: '1px solid #777', width: '80px' }} />
                  </div>
                  <button style={{ padding: '10px', background: '#ccc', color: '#000', cursor: 'not-allowed' }}>Buy now</button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 700 }}>✅ Solutions: Clear Grid alignment, Floating Labels, SSL security badge, Highlighted Action buttons</span>
                <div style={{ border: '1px solid var(--border)', padding: '30px', borderRadius: '12px', background: '#111A2E', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: 'var(--shadow-glow)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>Secure Checkout</div>
                    <span style={{ fontSize: '0.8rem', padding: '4px 8px', borderRadius: '4px', background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>
                      🔒 SSL Encrypted
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Review your total and fill your credit payment details securely below.</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Card Number</label>
                      <input type="text" placeholder="4111 2222 3333 4444" style={{ padding: '12px', borderRadius: '6px', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Expiry Date</label>
                      <input type="text" placeholder="12/28" style={{ padding: '12px', borderRadius: '6px', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CVV Code</label>
                      <input type="text" placeholder="123" style={{ padding: '12px', borderRadius: '6px', background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
                    </div>
                  </div>
                  
                  <button style={{ padding: '14px', borderRadius: '6px', background: 'linear-gradient(135deg, var(--secondary) 0%, #00A3FF 100%)', color: '#080C14', border: 'none', fontWeight: 600, cursor: 'pointer', boxShadow: 'var(--shadow-glow)' }}>
                    Complete Purchase ($29.00)
                  </button>
                </div>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
