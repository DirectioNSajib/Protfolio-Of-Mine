"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import academicData from '@/data/academic.json';

export default function AcademicJourney() {
  const [selectedSemester, setSelectedSemester] = useState(10); // Default to last semester (Semester 10)
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const activeSemester = academicData.semesters.find(s => s.id === selectedSemester);

  const toggleCourse = (code: string) => {
    if (expandedCourse === code) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(code);
    }
  };

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            CSE Academic Archive
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Academic Journey</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            A complete 10-semester digital archive documenting coursework, learning outcomes, lab files, assignments, slide presentations, and personal reflections from my time at Daffodil International University.
          </p>
        </div>

        {/* Semester Navigator & Courses Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px', alignItems: 'start' }}>
          {/* Left Navigation Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', paddingLeft: '12px' }}>
              Select Semester
            </span>
            {academicData.semesters.map((sem) => (
              <button
                key={sem.id}
                onClick={() => {
                  setSelectedSemester(sem.id);
                  setExpandedCourse(null);
                }}
                style={{
                  padding: '14px 18px',
                  borderRadius: '8px',
                  background: selectedSemester === sem.id ? 'rgba(0, 240, 255, 0.08)' : 'var(--surface-solid)',
                  border: '1px solid',
                  borderColor: selectedSemester === sem.id ? 'var(--secondary)' : 'var(--border)',
                  color: selectedSemester === sem.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: selectedSemester === sem.id ? 700 : 500,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{sem.name}</span>
                {sem.gpa && (
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '2px 6px', 
                    borderRadius: '4px', 
                    background: selectedSemester === sem.id ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                    color: selectedSemester === sem.id ? '#080C14' : 'var(--text-secondary)'
                  }}>
                    GPA: {sem.gpa}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right Courses List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{activeSemester?.name} Courses</h3>
              {activeSemester?.gpa && (
                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  Semester GPA: <strong style={{ color: 'var(--secondary)' }}>{activeSemester.gpa}</strong>
                </span>
              )}
            </div>

            {activeSemester?.courses.map((course) => {
              const isExpanded = expandedCourse === course.code;
              return (
                <GlassCard 
                  key={course.code} 
                  interactive 
                  onClick={() => toggleCourse(course.code)}
                  style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.9rem', 
                        color: 'var(--secondary)', 
                        background: 'rgba(0, 240, 255, 0.05)', 
                        padding: '4px 8px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(0, 240, 255, 0.15)'
                      }}>
                        {course.code}
                      </span>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{course.title}</h4>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {course.credits} Credits {isExpanded ? '▲' : '▼'}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {course.description}
                  </p>

                  {isExpanded && (
                    <div 
                      onClick={(e) => e.stopPropagation()} // Prevent card toggle on sub-clicking
                      style={{ 
                        marginTop: '12px', 
                        paddingTop: '16px', 
                        borderTop: '1px solid var(--border)', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '20px',
                        animation: 'fadeIn 0.3s ease-out'
                      }}
                    >
                      {/* Learning Outcomes */}
                      <div>
                        <h5 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                          🔑 Key Learning Outcomes
                        </h5>
                        <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {course.outcomes.map((outcome, idx) => (
                            <li key={idx}>{outcome}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Books */}
                      {course.books && course.books.length > 0 && (
                        <div>
                          <h5 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                            📚 Textbook References
                          </h5>
                          <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {course.books.map((book, idx) => (
                              <li key={idx}>{book}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Materials List */}
                      <div>
                        <h5 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                          💾 Course Archive Materials
                        </h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          {course.resources.notes && (
                            <a href={course.resources.notes} className="glass" style={{ padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                              📝 Lecture Notes (PDF)
                            </a>
                          )}
                          {course.resources.labReports && (
                            <a href={course.resources.labReports} className="glass" style={{ padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                              🧪 Lab Manuals & Reports
                            </a>
                          )}
                          {course.resources.slides && (
                            <a href={course.resources.slides} className="glass" style={{ padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                              📊 Slide Presentations
                            </a>
                          )}
                          {course.resources.github && (
                            <a href={course.resources.github} target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--secondary)' }}>
                              💻 GitHub Repository
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Personal Reflection */}
                      {course.reflection && (
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', borderLeft: '3px solid var(--secondary)' }}>
                          <h5 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                            💭 Personal Reflections & Growth
                          </h5>
                          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', fontStyle: 'italic' }}>
                            "{course.reflection}"
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
