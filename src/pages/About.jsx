import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Check, 
  Sparkles,
  Code2,
  FileSpreadsheet,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import heroIndianImg from '../assets/hero-indian.jpg';
import gstFilingImg from '../assets/gst-filing.jpg';
import '../styles/pages.css';

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vtbusinesssupport.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://vtbusinesssupport.in/about"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "name": "About VT Business Solutions",
      "url": "https://vtbusinesssupport.in/about",
      "description": "Learn about VT Business Solutions: an approachable local service business helping small businesses, shops, startups, and professionals across Tamil Nadu and Bengaluru with IT and compliance support.",
      "mainEntity": {
        "@id": "https://vtbusinesssupport.in/#organization"
      }
    }
  ]
};

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | VT Business Solutions"
        description="Learn about VT Business Solutions: an approachable local service business helping small businesses, shops, startups, and professionals across Tamil Nadu and Bengaluru with IT and compliance support."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      {/* Subpage Banner with Proportional Media */}
      <section className="subpage-hero" aria-labelledby="about-title">
        <div className="container">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span className="breadcrumb-current" aria-current="page">About Us</span>
          </nav>

          <div className="subpage-hero-grid">
            <div className="subpage-hero-content">
              <span className="section-tag">About VT Business Solutions</span>
              <h1 id="about-title" className="subpage-title">
                Practical IT & Business Compliance Support
              </h1>
              <p className="subpage-desc">
                VT Business Solutions is an approachable service partner dedicated to local businesses, shops, startups, professionals, and individuals across Tamil Nadu, Bengaluru, and nearby areas. We handle your technology needs and statutory paperwork in simple English.
              </p>
            </div>
            <div className="subpage-hero-media">
              <img 
                src={heroIndianImg} 
                alt="Indian developer working on business software at a modest desk" 
                className="subpage-hero-img"
                width="640"
                height="320"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars with Authentic Imagery */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Two Focus Areas</span>
            <h2 className="section-title">Two Services Under One Roof</h2>
            <p className="section-subtitle">
              Most business owners have to deal with separate software freelancers and accounting agents. We provide reliable support for both areas under direct, personal accountability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-8)' }}>
            {/* Division 01: IT */}
            <div className="service-photo-tile">
              <div className="service-photo-header">
                <img 
                  src={heroIndianImg} 
                  alt="Indian software developer writing code for small business websites and tools" 
                  className="service-tile-img"
                  width="400"
                  height="200"
                  loading="lazy"
                />
                <span className="service-photo-tag">Division 01 • Technology</span>
              </div>
              <div className="service-photo-body">
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px' }}>IT & Technology Solutions</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                  Requirement-based development. We listen to what your business or retail shop needs and build websites, custom billing software, booking systems, or configure cloud servers and workplace computers.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>Business websites, service portfolios, and landing pages</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>Shop billing, inventory, and appointment booking applications</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>AWS cloud hosting, Linux servers, and Google Workspace email</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Division 02: Tax & Compliance */}
            <div className="service-photo-tile">
              <div className="service-photo-header">
                <img 
                  src={gstFilingImg} 
                  alt="Indian professional reviewing tax invoices and bookkeeping files" 
                  className="service-tile-img"
                  width="400"
                  height="200"
                  loading="lazy"
                />
                <span className="service-photo-tag" style={{ backgroundColor: 'rgba(30, 58, 138, 0.95)' }}>Division 02 • Compliance</span>
              </div>
              <div className="service-photo-body">
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px' }}>Tax & Business Compliance</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                  Practical assistance with GST registration and monthly returns, individual and business income tax (ITR), day-to-day bookkeeping, Udyam MSME, FSSAI food licenses, and startup documentation.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>GST registration and on-time monthly return filing</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>Income tax return preparation & TDS return compliance</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                    <Check size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>Udyam / MSME registration, FSSAI licenses, and trade clearances</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Disclosure Notice */}
      <section style={{ backgroundColor: '#F0F9FF', borderTop: '1px solid #BAE6FD', borderBottom: '1px solid #BAE6FD', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', maxWidth: '850px', margin: '0 auto' }}>
            <Info size={22} style={{ color: '#0284C7', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.875rem', color: '#0369A1', lineHeight: 1.6 }}>
              <strong style={{ display: 'block', marginBottom: '4px', color: '#0C4A6E' }}>
                Professional Notice Regarding Tax & Compliance Services:
              </strong>
              The tax and compliance division is led by professionals currently in the CA articleship pathway. We provide practical business assistance, document organization, tax preparation, bookkeeping, and filing support. Specialized services requiring statutory audit certification or formal signatory attestations are coordinated with or referred to qualified, authorized practicing professionals as per applicable regulations. VT Business Solutions is not a CA firm.
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Business Principles</h2>
            <p className="section-subtitle">
              Straightforward, honest, and practical support for every client.
            </p>
          </div>

          <div className="differentiators-grid">
            <div className="diff-card">
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>Principle 01</span>
              <h3 className="diff-title">Honest & Practical Scopes</h3>
              <p className="diff-desc">
                We only take on work we can genuinely deliver. If a requirement is not feasible or requires external authorization, we inform you clearly upfront.
              </p>
            </div>

            <div className="diff-card">
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>Principle 02</span>
              <h3 className="diff-title">Clear Explanations</h3>
              <p className="diff-desc">
                We avoid confusing technical words and legal jargon. We explain what you need to do, what documents are required, and why in plain everyday English.
              </p>
            </div>

            <div className="diff-card">
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>Principle 03</span>
              <h3 className="diff-title">Direct Communication</h3>
              <p className="diff-desc">
                You work directly with the person handling your software code, server setup, or tax documents—no confusion or delayed responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Locations</span>
            <h2 className="section-title">Our Office Hubs</h2>
            <p className="section-subtitle">
              Serving local businesses and individuals across Tamil Nadu and Bengaluru.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)', maxWidth: '900px', margin: '0 auto' }}>
            <div className="corp-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>Registered Headquarters</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '8px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                <span>Harur, Tamil Nadu</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                5/1B16, Administrative Office, Harur Town, Dharmapuri District, Tamil Nadu - 636903
              </p>
            </div>

            <div className="corp-card" style={{ borderLeft: '4px solid #2563EB' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase' }}>Operations Hub</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '8px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} style={{ color: '#2563EB' }} />
                <span>Electronic City, Bengaluru</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                #79, 3rd Floor, Phase 1, Electronic City, Bengaluru, Karnataka - 560100
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-surface">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2 className="cta-banner-title">Ready to Discuss Your Business Requirement?</h2>
              <p className="cta-banner-desc">
                Contact our desk to discuss your website, custom software, GST filing, or business registration needs.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-white btn-lg">
                <span>Talk to Us Today</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
