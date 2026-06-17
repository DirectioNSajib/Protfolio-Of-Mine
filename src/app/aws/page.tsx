"use client";

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';

export default function AWSCloudJourney() {
  const [selectedArch, setSelectedArch] = useState<'serverless' | 'threetier'>('serverless');

  const services = [
    { name: "Amazon EC2", desc: "Elastic compute cloud instances running Linux/Windows with custom security groups and AMIs." },
    { name: "Amazon S3", desc: "Secure, durable, and highly-scalable object storage hosting static files and media assets." },
    { name: "Amazon RDS", desc: "Relational Database Service supporting Multi-AZ failovers, read replicas, and automated backups." },
    { name: "AWS Lambda", desc: "Serverless function execution engine running backend triggers on-demand without provisioning servers." },
    { name: "Amazon VPC", desc: "Isolated virtual network with custom public/private subnets, Route Tables, Internet Gateways, and NAT Gateways." },
    { name: "Amazon CloudWatch", desc: "Infrastructure monitoring service tracking server metrics, logs, and billing alarms." },
    { name: "AWS IAM", desc: "Identity and Access Management managing granular user policies, role assumptions, and API tokens." },
    { name: "Amazon Route 53", desc: "High-availability domain name server routing visitor traffic to CloudFront distributions." },
    { name: "Amazon ECS", desc: "Elastic Container Service orchestrating Docker containers with AWS Fargate serverless compute." },
    { name: "AWS CloudFormation", desc: "Infrastructure as Code (IaC) tool creating template-driven stacks of AWS resources." },
    { name: "Amazon DynamoDB", desc: "Fully-managed, sub-millisecond NoSQL document database scaling automatically." }
  ];

  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
            Cloud Architecture
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>AWS Cloud Journey Center</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1rem', lineHeight: '1.6' }}>
            Documenting my cloud learning roadmap, AWS certified credentials, security protocols, networking subnet configurations, and hands-on lab deployments.
          </p>
        </div>

        {/* Learning Roadmap & Services */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>AWS Services Learned & Deployed</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {services.map((svc) => (
                <GlassCard key={svc.name} glowColor="orange" style={{ padding: '20px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>{svc.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{svc.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Sidebar: Roadmap & Cost */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <GlassCard glowColor="orange">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '16px' }}>AWS Learning Roadmap</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem' }}>
                <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '14px', position: 'relative' }}>
                  <div style={{ width: '10px', height: '10px', background: 'var(--primary)', borderRadius: '50%', position: 'absolute', left: '-6px', top: '4px' }}></div>
                  <strong>AWS Certified Cloud Practitioner</strong>
                  <div style={{ color: 'var(--text-secondary)' }}>Completed Core Concepts (Billing, Shared Responsibility, Security)</div>
                </div>
                <div style={{ borderLeft: '2px solid var(--border)', paddingLeft: '14px', position: 'relative' }}>
                  <div style={{ width: '10px', height: '10px', background: 'var(--surface-solid)', border: '2px solid var(--border)', borderRadius: '50%', position: 'absolute', left: '-6px', top: '4px' }}></div>
                  <strong>AWS Solutions Architect Associate</strong>
                  <div style={{ color: 'var(--text-muted)' }}>Currently preparing. Deep-diving into High Availability & VPC Subnet design patterns.</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="orange">
              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '16px' }}>💰 Cloud Cost Optimization Tips</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '1.5' }}>
                <li><strong>EC2 Auto Scaling:</strong> Configure CPU triggers to scale-in instances during night hours.</li>
                <li><strong>S3 Lifecycle Policies:</strong> Automatically transition old access logs to Infrequent Access (IA) or Glacier.</li>
                <li><strong>RDS Stopping:</strong> Stop development RDS databases outside working hours to cut idle costs.</li>
                <li><strong>Lambda Architecture:</strong> Optimize timeout thresholds and allocate appropriate memory limits to minimize GB-seconds usage.</li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Interactive Architecture Explainer */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '50px', marginTop: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Interactive Architecture Center</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '6px' }}>
              Select a system architecture below to inspect the deployment stack and security groups:
            </p>
            <div style={{ display: 'inline-flex', background: 'var(--surface-solid)', padding: '6px', borderRadius: '25px', marginTop: '16px', gap: '6px', border: '1px solid var(--border)' }}>
              <button 
                onClick={() => setSelectedArch('serverless')}
                style={{
                  background: selectedArch === 'serverless' ? 'var(--primary)' : 'transparent',
                  color: selectedArch === 'serverless' ? '#080C14' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Serverless API Stack
              </button>
              <button 
                onClick={() => setSelectedArch('threetier')}
                style={{
                  background: selectedArch === 'threetier' ? 'var(--primary)' : 'transparent',
                  color: selectedArch === 'threetier' ? '#080C14' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Three-Tier VPC Architecture
              </button>
            </div>
          </div>

          <GlassCard glowColor="orange" style={{ padding: '30px' }}>
            {selectedArch === 'serverless' ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--primary)', fontWeight: 600 }}>Serverless API & Static Delivery Stack</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    This layout operates fully serverless, scaling automatically from 0 to millions of concurrent operations with minimal cost and maintenance.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                    <div>
                      <strong>1. Static Asset Delivery:</strong>
                      <div style={{ color: 'var(--text-secondary)' }}>Compiled Next.js/React static files reside in private S3 Buckets. Origin Access Control (OAC) restricts direct S3 access. SSL is served globally via AWS CloudFront CDN.</div>
                    </div>
                    <div>
                      <strong>2. Compute / Logic Gateway:</strong>
                      <div style={{ color: 'var(--text-secondary)' }}>API Gateway handles incoming HTTP endpoints, routing parameters to individual AWS Lambda triggers programmed in Node.js.</div>
                    </div>
                    <div>
                      <strong>3. Persistence Layer:</strong>
                      <div style={{ color: 'var(--text-secondary)' }}>Data records are saved in Amazon DynamoDB NoSQL tables. Access is secured using fine-grained IAM policy executions.</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#0B0F19', padding: '24px', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ color: 'var(--primary)' }}># CloudFormation Stack Snippet</span>
                  <span>Resources:</span>
                  <span style={{ paddingLeft: '12px' }}>MyLambdaFunction:</span>
                  <span style={{ paddingLeft: '24px' }}>Type: AWS::Lambda::Function</span>
                  <span style={{ paddingLeft: '24px' }}>Properties:</span>
                  <span style={{ paddingLeft: '36px' }}>Handler: index.handler</span>
                  <span style={{ paddingLeft: '36px' }}>Runtime: nodejs20.x</span>
                  <span style={{ paddingLeft: '36px' }}>MemorySize: 256</span>
                  <span style={{ paddingLeft: '36px' }}>Timeout: 15</span>
                  <span style={{ paddingLeft: '36px' }}>Role: !GetAtt LambdaRole.Arn</span>
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--primary)', fontWeight: 600 }}>Three-Tier Virtual Private Cloud (VPC)</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    A secure architecture isolating compute and database workloads in private subnets, exposing only public Application Load Balancers.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
                    <div>
                      <strong>1. Public Tier:</strong>
                      <div style={{ color: 'var(--text-secondary)' }}>Internet Gateway maps route commands to a public subnet hosting Bastion Hosts and Application Load Balancers (ALB).</div>
                    </div>
                    <div>
                      <strong>2. Application / Compute Tier:</strong>
                      <div style={{ color: 'var(--text-secondary)' }}>EC2 Web instances reside in private subnets, accepting traffic exclusively from public ALBs. Outbound updates are routed via NAT Gateways.</div>
                    </div>
                    <div>
                      <strong>3. Database Tier:</strong>
                      <div style={{ color: 'var(--text-secondary)' }}>Amazon RDS PostgreSQL database cluster resides in an isolated private subnet. Security groups accept connections solely from Application Tier security groups.</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#0B0F19', padding: '24px', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span style={{ color: 'var(--primary)' }}># VPC Network Layout Configuration</span>
                  <span>VPC CIDR: 10.0.0.0/16</span>
                  <span style={{ paddingLeft: '12px' }}>Public Subnets:</span>
                  <span style={{ paddingLeft: '24px' }}>- Subnet A (10.0.1.0/24)</span>
                  <span style={{ paddingLeft: '24px' }}>- Subnet B (10.0.2.0/24)</span>
                  <span style={{ paddingLeft: '12px' }}>Private Subnets:</span>
                  <span style={{ paddingLeft: '24px' }}>- Application Subnet (10.0.10.0/24)</span>
                  <span style={{ paddingLeft: '24px' }}>- Database Subnet (10.0.20.0/24)</span>
                  <span style={{ color: '#10B981' }}>// NAT Gateway handles routing</span>
                </div>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
