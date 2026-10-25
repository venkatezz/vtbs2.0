import React from 'react';
import { Server, ShieldCheck, CheckCircle2, Cloud, FileText, Cpu, MapPin } from 'lucide-react';
import '../styles/heroVisual.css';

export default function HeroVisual() {
  return (
    <div className="hero-visual-card" aria-label="Corporate Operations Overview">
      {/* Visual Header Console Bar */}
      <div className="hero-visual-header">
        <div className="hero-visual-title-wrap">
          <span className="hero-visual-status-dot" aria-hidden="true" />
          <span className="hero-visual-header-title">VT Operations & Governance Console</span>
        </div>
        <span className="hero-visual-badge">Active Deployment</span>
      </div>

      <div className="hero-visual-body">
        {/* Division 1: IT & Cloud Infrastructure */}
        <div className="hero-visual-division">
          <div className="hero-visual-division-header">
            <div className="hero-division-name">
              <Server size={18} style={{ color: 'var(--color-primary)' }} />
              <span>Division 01: IT & Cloud Architecture</span>
            </div>
            <span className="hero-division-tag">24/7 Managed</span>
          </div>

          <div className="hero-metrics-grid">
            <div className="hero-metric-tile">
              <span className="hero-metric-label">Cloud Instances</span>
              <div className="hero-metric-value">
                <Cloud size={14} style={{ color: '#2563EB' }} />
                <span>AWS & Linux</span>
              </div>
            </div>

            <div className="hero-metric-tile">
              <span className="hero-metric-label">Infrastructure</span>
              <div className="hero-metric-value">
                <Cpu size={14} style={{ color: '#059669' }} />
                <span>Standardized</span>
              </div>
            </div>

            <div className="hero-metric-tile">
              <span className="hero-metric-label">Status</span>
              <div className="hero-metric-value">
                <CheckCircle2 size={14} style={{ color: '#16A34A' }} />
                <span>Operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Division 2: Corporate Regulatory & Tax Compliance */}
        <div className="hero-visual-division">
          <div className="hero-visual-division-header">
            <div className="hero-division-name">
              <ShieldCheck size={18} style={{ color: '#1E3A8A' }} />
              <span>Division 02: Tax & Statutory Compliance</span>
            </div>
            <span className="hero-division-tag">Standardized Filings</span>
          </div>

          <div className="hero-metrics-grid">
            <div className="hero-metric-tile">
              <span className="hero-metric-label">GST Compliance</span>
              <div className="hero-metric-value">
                <FileText size={14} style={{ color: '#2563EB' }} />
                <span>Monthly & Annual</span>
              </div>
            </div>

            <div className="hero-metric-tile">
              <span className="hero-metric-label">Income Tax & TDS</span>
              <div className="hero-metric-value">
                <CheckCircle2 size={14} style={{ color: '#16A34A' }} />
                <span>Audited Schedule</span>
              </div>
            </div>

            <div className="hero-metric-tile">
              <span className="hero-metric-label">ROC Governance</span>
              <div className="hero-metric-value">
                <ShieldCheck size={14} style={{ color: '#0F172A' }} />
                <span>Statutory Logs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Console Footer */}
        <div className="hero-visual-footer-bar">
          <span className="hero-visual-hub-tag">
            <MapPin size={13} />
            <span>Serving Tamil Nadu & Bengaluru Business Corridors</span>
          </span>
          <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-light)' }}>
            Dual-Practice Integration
          </span>
        </div>
      </div>
    </div>
  );
}
