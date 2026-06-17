"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';

export default function ResumeCareerCenter() {
  const [jobDesc, setJobDesc] = useState('');
  const [analysisResult, setAnalysisResult] = useState<{
    score: number;
    matched: string[];
    missing: string[];
    recommendations: string[];
  } | null>(null);

  const mySkills = [
    "c++", "c", "java", "javascript", "typescript", "sql",
    "ec2", "s3", "rds", "lambda", "vpc", "cloudwatch", "iam", "route 53", "ecs", "cloudformation", "dynamodb", "aws", "cloud",
    "html", "css", "react", "next.js", "express", "node", "rest", "bootstrap",
    "figma", "wireframing", "prototype", "ux", "ui", "design system",
    "scrum", "agile", "leadership", "git", "github", "docker"
  ];

  const handleAnalyze = () => {
    if (!jobDesc.trim()) return;

    const words = jobDesc.toLowerCase().split(/[\s,./()]+/).map(w => w.trim()).filter(Boolean);
    
    const matchedSet = new Set<string>();
    const missingSet = new Set<string>();

    words.forEach(word => {
      if (mySkills.includes(word)) {
        matchedSet.add(word);
      } else if (
        // Simple synonyms/related skills check
        (word.includes('cloud') || word.includes('serverless') || word.includes('backend') || word.includes('frontend')) &&
        !matchedSet.has('aws')
      ) {
        matchedSet.add('aws');
      }
    });

    // Determine missing key technologies from a target enterprise stack
    const targetKeywords = ["typescript", "aws", "lambda", "docker", "figma", "next.js", "scrum"];
    targetKeywords.forEach(kw => {
      if (!matchedSet.has(kw)) {
        missingSet.add(kw);
      }
    });

    // Calculate score
    const matchedCount = matchedSet.size;
    const baseScore = 65; // Base score for CSE graduate
    const addedScore = Math.min(matchedCount * 5, 30);
    const score = Math.min(baseScore + addedScore, 98);

    // Build recommendations
    const recs = [];
    if (matchedSet.has('aws') || matchedSet.has('lambda') || matchedSet.has('ec2')) {
      recs.push("Check out the AWS Cloud Journey page to see architecture configurations for serverless Lambda APIs.");
    }
    if (matchedSet.has('figma') || matchedSet.has('ui') || matchedSet.has('ux')) {
      recs.push("Review Sojib's UI/UX Case Studies page to inspect full design systems and interactive prototypes.");
    }
    recs.push("Visit the Academic Hub page to inspect course outcomes and lab reports for Database Management Systems (CSE-311) and computer networks (CSE-411).");

    setAnalysisResult({
      score,
      matched: Array.from(matchedSet),
      missing: Array.from(missingSet),
      recommendations: recs
    });
  };

  const timelineEvents = [
    { year: "2022", title: "CSE Admission", desc: "Enrolled in B.Sc. in Computer Science & Engineering at Daffodil International University, laying foundations in structured C programming." },
    { year: "2023", title: "Freelancing Debut (Fiverr)", desc: "Launched UI/UX Fiverr designer services, designing custom wireframes and Figma vector prototypes for international clients." },
    { year: "2024", title: "AWS Specialization", desc: "Completed AWS academy tracks, building hands-on labs in private subnets, serverless architectures, and relational databases." },
    { year: "2025", title: "Agile Leadership (Capstone)", desc: "Appointed Team Leader for the graduation capstone engineering project, coordinating 3 peers and deploying Cloud applications." }
  ];

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Career Readiness
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Resume & Career Center</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            Download my ATS-optimized professional resume, review my career timeline milestone tracker, or run your job description against my qualifications.
          </p>
        </div>

        {/* Download & Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start' }}>
          {/* Resume Actions & Document Hub */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <GlassCard glowColor="cyan" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>📄 Document Registry</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Download single-page resumes formatted specifically to bypass automated applicant tracking systems (ATS) or view structured portfolios.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="#" 
                  className="btn btnPrimary" 
                  style={{ justifyContent: 'center', padding: '14px' }}
                >
                  📥 Download ATS-Optimized Resume (PDF)
                </a>
                <a 
                  href="#" 
                  className="btn btnSecondary" 
                  style={{ justifyContent: 'center', padding: '14px' }}
                >
                  📥 Download Figma UI/UX Portfolio Slides
                </a>
              </div>
            </GlassCard>

            <GlassCard style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '10px' }}>🎯 Cover Letter Customizer Advice</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                For AWS positions, highlight the combination of <strong>VPC networking</strong> and <strong>EC2/Lambda</strong> computing skills. For Web developer roles, focus on the handoff speed benefits of knowing <strong>Figma design systems</strong> and <strong>Next.js modules</strong>.
              </p>
            </GlassCard>
          </div>

          {/* Career Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>⏱️ Career Milestones</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', borderLeft: '2px solid var(--border)', paddingLeft: '20px', marginLeft: '10px' }}>
              {timelineEvents.map((event, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '-27px', 
                    top: '4px', 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: 'var(--secondary)',
                    boxShadow: '0 0 8px var(--secondary)'
                  }}></div>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--secondary)', fontWeight: 700 }}>
                    {event.year}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px', marginBottom: '6px' }}>
                    {event.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {event.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ATS Resume Analyzer Widget */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '50px', marginTop: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>⚙️ ATS Resume Match Analyzer (AI Concept)</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Recruiters: Paste the job description you are hiring for below. Our client-side parser will analyze your keywords against Sojib's cataloged skills, calculating an ATS compatibility rating.
              </p>
              
              <textarea 
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                placeholder="Example: We are seeking a Next.js frontend engineer with strong Figma experience to design UI libraries and orchestrate Git deployments..." 
                rows={7}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px',
                  background: 'var(--surface-solid)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
              
              <button 
                onClick={handleAnalyze}
                disabled={!jobDesc.trim()}
                className="btn btnPrimary"
                style={{ alignSelf: 'flex-start', padding: '12px 28px' }}
              >
                📊 Run Compatibility Scan
              </button>
            </div>

            {/* Analysis Output Dashboard */}
            <div>
              {analysisResult ? (
                <GlassCard glowColor="cyan" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '20px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      ATS Compatibility Match
                    </div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: analysisResult.score >= 80 ? '#10B981' : '#FF9900', fontFamily: 'var(--font-mono)', marginTop: '8px' }}>
                      {analysisResult.score}%
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {analysisResult.score >= 80 ? 'Highly Compatible Candidate' : 'Moderate Match'}
                    </span>
                  </div>

                  {/* Matching Keywords */}
                  {analysisResult.matched.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#10B981', marginBottom: '8px' }}>
                        ✓ Matched Core Keywords
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {analysisResult.matched.map((kw) => (
                          <span key={kw} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', background: 'rgba(16,185,129,0.1)', color: '#10B981', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(16,185,129,0.2)' }}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Missing Keywords */}
                  {analysisResult.missing.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                        ⚠ Desired Keywords Suggested
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {analysisResult.missing.map((kw) => (
                          <span key={kw} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', padding: '3px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recommendations */}
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      💡 Portfolio Path Recommendations
                    </h4>
                    <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.4' }}>
                      {analysisResult.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              ) : (
                <GlassCard style={{ padding: '60px 30px', textAlign: 'center', borderStyle: 'dashed', color: 'var(--text-muted)' }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>📊</span>
                  <h3>Scanner Inactive</h3>
                  <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>
                    Paste a job description on the left and run scan to calculate candidate alignment.
                  </p>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
