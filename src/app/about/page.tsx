"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';

export default function About() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }
    // Mock successful submit
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 4000);
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Who I Am
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>About Me</h2>
        </div>

        {/* Bio & Story */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Biography & Career Journey</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              I am a final-year Computer Science and Engineering student at Daffodil International University (DIU) with a passion for building robust cloud architectures and designing intuitive digital user experiences. 
              My journey began with structured algorithms in C, expanding into full-stack web engineering and UI/UX designer on Fiverr.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              As a natural leader, I have directed most of my university group projects, ensuring timely delivery, resolving conflicts, and refining client interactions. 
              My dual expertise in AWS Cloud Computing (achieving Practitioner-level expertise) and UI/UX design allows me to architect applications that are highly functional on the back-end while being delightful on the front-end.
            </p>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '10px' }}>Core Leadership & Values</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Leadership isn't about giving orders; it's about facilitating synergy. In my academic group projects, I have implemented Agile methodologies, dividing work packages using Jira/Trello, leading scrums, and standing up for the team during project presentations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <GlassCard glowColor="cyan">
              <h4 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--secondary)' }}>Education Snapshot</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <div>
                  <strong>B.Sc. in Computer Science & Engineering</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Daffodil International University (2022 - Present)</div>
                </div>
                <div>
                  <strong>AWS Cloud Academy</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Practitioner Track (EC2, S3, RDS, Serverless)</div>
                </div>
                <div>
                  <strong>UI/UX Design Track</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Google Professional UX Certification</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="orange">
              <h4 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--primary)' }}>Future Goals</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                My immediate goal is to acquire my official AWS Solutions Architect Associate certification, followed by entering a tech startup or enterprise role where I can steer product engineering, system design, and interface usability.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Contact Form Section */}
        <section id="contact" style={{ borderTop: '1px solid var(--border)', paddingTop: '60px', marginTop: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Let's Connect</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Whether you're a recruiter seeking a cloud developer/designer, a faculty member discussing research, or a client on Fiverr, feel free to drop a message.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
                <div><strong>Location:</strong> Dhaka, Bangladesh</div>
                <div><strong>Email:</strong> sojib@example.com</div>
                <div><strong>Fiverr Profile:</strong> @sojib_uiux</div>
              </div>
            </div>

            <GlassCard>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      placeholder="Sojib Hossen" 
                      style={{ padding: '12px', borderRadius: '6px', background: 'var(--surface-solid)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      placeholder="sojib@example.com" 
                      style={{ padding: '12px', borderRadius: '6px', background: 'var(--surface-solid)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleInputChange}
                    placeholder="Recruitment / Freelance Project Query" 
                    style={{ padding: '12px', borderRadius: '6px', background: 'var(--surface-solid)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Message</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange}
                    rows={5} 
                    placeholder="Write your message here..." 
                    style={{ padding: '12px', borderRadius: '6px', background: 'var(--surface-solid)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'inherit' }}
                  />
                </div>

                <button 
                  type="submit" 
                  style={{ 
                    padding: '14px', 
                    borderRadius: '6px', 
                    background: 'linear-gradient(135deg, var(--secondary) 0%, #00A3FF 100%)', 
                    color: '#080C14', 
                    border: 'none', 
                    fontWeight: 600, 
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-glow)'
                  }}
                >
                  Send Message
                </button>

                {submitStatus === 'success' && (
                  <span style={{ color: '#10B981', textAlign: 'center', fontSize: '0.9rem' }}>
                    ✅ Thank you! Message sent successfully. I will get back to you shortly.
                  </span>
                )}
                {submitStatus === 'error' && (
                  <span style={{ color: '#EF4444', textAlign: 'center', fontSize: '0.9rem' }}>
                    ❌ Please fill in your name, email, and message.
                  </span>
                )}
              </form>
            </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
}
