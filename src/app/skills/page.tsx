"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';

export default function SkillsHub() {
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C++", "C", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Cloud Computing",
      skills: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda", "Amazon VPC", "Amazon CloudWatch", "AWS IAM", "Amazon Route 53", "Amazon ECS", "AWS CloudFormation", "Amazon DynamoDB"]
    },
    {
      category: "Web Development",
      skills: ["HTML5", "CSS3", "React", "Next.js", "Express.js", "Node.js", "REST APIs", "Bootstrap", "Responsive Design"]
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "Wireframing", "Interactive Prototyping", "User Research", "Design Systems", "Usability Testing"]
    },
    {
      category: "Software Engineering & Database",
      skills: ["Data Structures", "Algorithms", "Database Normalization", "Git / GitHub", "Docker", "CI/CD Pipeline"]
    },
    {
      category: "Leadership & Strategy",
      skills: ["Agile/Scrum Framework", "Team Management", "Conflict Resolution", "Task Delegation", "Public Presentation", "Decision Making"]
    }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const matchesSearch = (skill: string) => {
    return skill.toLowerCase().includes(searchQuery);
  };

  const filteredCategories = skillCategories.map(cat => {
    const matchedSkills = cat.skills.filter(matchesSearch);
    const matchesCategoryName = cat.category.toLowerCase().includes(searchQuery);
    
    // If the category name matches, show all its skills. Otherwise, show only matching skills.
    return {
      category: cat.category,
      skills: matchesCategoryName ? cat.skills : matchedSkills,
      hasMatch: matchesCategoryName || matchedSkills.length > 0
    };
  }).filter(cat => cat.hasMatch);

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Competencies
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Skills Hub</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            An interactive repository of technical proficiencies, management methodologies, and cloud engineering skills.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div style={{ position: 'relative', maxWidth: '500px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="🔍 Search for skills (e.g., EC2, C++, Figma, Scrum)..."
            style={{
              width: '100%',
              padding: '14px 18px',
              borderRadius: '30px',
              background: 'var(--surface-solid)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'var(--transition-fast)'
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {filteredCategories.map((cat) => {
            const isCloud = cat.category.includes('Cloud');
            return (
              <GlassCard 
                key={cat.category} 
                glowColor={isCloud ? 'orange' : 'cyan'}
                style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                  {cat.category}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.skills.map((skill) => {
                    const isHighlighted = searchQuery && skill.toLowerCase().includes(searchQuery);
                    return (
                      <span
                        key={skill}
                        style={{
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          background: isHighlighted 
                            ? isCloud ? 'rgba(255, 153, 0, 0.25)' : 'rgba(0, 240, 255, 0.25)'
                            : 'var(--surface-solid)',
                          color: isHighlighted 
                            ? isCloud ? '#FF9900' : '#00F0FF' 
                            : 'var(--text-secondary)',
                          border: '1px solid',
                          borderColor: isHighlighted 
                            ? isCloud ? '#FF9900' : '#00F0FF'
                            : 'var(--border)',
                          fontWeight: isHighlighted ? 700 : 500,
                          transition: 'var(--transition-fast)',
                          boxShadow: isHighlighted 
                            ? isCloud ? '0 0 10px rgba(255, 153, 0, 0.2)' : '0 0 10px rgba(0, 240, 255, 0.2)'
                            : 'none'
                        }}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </GlassCard>
            );
          })}

          {filteredCategories.length === 0 && (
            <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
