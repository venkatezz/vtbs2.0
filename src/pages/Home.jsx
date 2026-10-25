import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  MapPin, 
  Phone,
  Code2,
  FileSpreadsheet,
  Cpu,
  Layers,
  Sparkles,
  HelpCircle,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import heroIndianImg from '../assets/hero-indian.jpg';
import gstFilingImg from '../assets/gst-filing.jpg';
import gstLogo from '../assets/gst-logo.png';
import msmeLogo from '../assets/msme-logo.jpg';
import itrLogo from '../assets/itr-logo.jpg';
import '../styles/pages.css';

export default function Home() {
  return (
    <>
      <SEO 
        title="Practical IT Solutions & Business Compliance Support"
        description="VT Business Solutions helps small businesses, shops, startups and professionals across Tamil Nadu and Bengaluru with websites, billing software, GST, income tax, and business registrations."
        canonicalPath="/"
      />

      {/* A. Hero Section - Approachable, Balanced, Modest */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Clear Approachable Headline & CTAs */}
            <div className="hero-content">
              <div className="hero-badge-wrap">
                <span className="hero-badge">
                  <Sparkles size={14} />
                  <span>Practical Business Support</span>
                </span>
              </div>

              <h1 id="hero-heading" className="hero-title">
                Practical <span className="hero-title-accent">IT solutions</span> and business <span className="hero-title-accent">compliance support</span>, all in one place.
              </h1>

              <p className="hero-description">
                From custom websites and business applications to tax assistance, registrations and accounting support, VT Business Solutions helps you handle the practical needs of running your business.
              </p>

              <div className="hero-cta-group">
                <Link to="/services" className="btn btn-primary btn-lg">
                  <span>Explore Our Services</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <span>Discuss Your Requirement</span>
                </Link>
              </div>

              {/* Ground-level Trust Indicators */}
              <div className="hero-trust-indicators">
                <div className="trust-item">
                  <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
                  <span>Harur (TN) & Bengaluru</span>
                </div>
                <div className="trust-item">
                  <Code2 size={16} style={{ color: 'var(--color-primary)' }} />
                  <span>Requirement-Based IT</span>
                </div>
                <div className="trust-item">
                  <FileSpreadsheet size={16} style={{ color: 'var(--color-primary)' }} />
                  <span>Hands-on Compliance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Realistic Proportional Indian Tech Photo */}
            <div className="hero-visual-wrapper">
              <div className="hero-photo-card">
                <img 
                  src={heroIndianImg} 
                  alt="Indian software developer working on business software at a desk in a modest workspace" 
                  className="hero-primary-photo"
                  width="640"
                  height="440"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-photo-badge">
                  <div className="hero-photo-badge-dot" aria-hidden="true" />
                  <div className="hero-photo-badge-text">
                    <strong>Local IT & Compliance Partner</strong>
                    <span>Practical support for shops, startups & small businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Two Distinct Business Divisions */}
      <section className="section section-surface" id="services-overview" aria-labelledby="services-overview-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Two Divisions</span>
            <h2 id="services-overview-heading" className="section-title">
              Clear Services for Your Daily Business Needs
            </h2>
            <p className="section-subtitle">
              We provide two distinct service categories in simple, practical English. Choose the division that fits what your business needs today.
            </p>
          </div>

          <div className="division-selector-grid">
            {/* Division 01: IT & Technology Solutions */}
            <div className="division-selector-card">
              <div className="division-card-media">
                <img 
                  src={heroIndianImg} 
                  alt="Indian developer building custom websites and business applications" 
                  className="division-card-img"
                  width="600"
                  height="240"
                  loading="lazy"
                />
                <span className="division-card-pill">Division 01</span>
              </div>
              <div className="division-card-body">
                <h3 className="division-card-title">IT & Technology Solutions</h3>
                <p className="division-card-desc">
                  Custom technology solutions for businesses, shops, startups and professionals. We understand your problem first and build suitable digital solutions.
                </p>
                <div className="division-card-checklist">
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Business Websites, Portfolios & Landing Pages</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Shop Billing & Inventory Management Systems</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Booking & Appointment Scheduling Applications</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Linux & Windows Server Administration, AWS Cloud</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Business Email Setup (Google/M365) & Office IT Support</span>
                  </div>
                </div>
                <div className="division-card-footer">
                  <Link to="/services/it-technology" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Explore IT Services</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Division 02: Tax & Business Compliance */}
            <div className="division-selector-card">
              <div className="division-card-media">
                <img 
                  src={gstFilingImg} 
                  alt="Indian professional handling GST tax invoices and accounting documentation" 
                  className="division-card-img"
                  width="600"
                  height="240"
                  loading="lazy"
                />
                <span className="division-card-pill" style={{ backgroundColor: 'rgba(30, 58, 138, 0.95)' }}>Division 02</span>
              </div>
              <div className="division-card-body">
                <h3 className="division-card-title">Tax, Accounting & Compliance</h3>
                <p className="division-card-desc">
                  Practical assistance with taxes, registrations, accounting records, business documentation and compliance in simple, straightforward language.
                </p>
                <div className="division-card-checklist">
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>GST Registration, Monthly Return Filing & Invoicing</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Income Tax Filing (ITR) & TDS Return Assistance</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Day-to-day Bookkeeping & Bank Reconciliation</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Udyam/MSME, FSSAI Food License & Trade Clearances</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Business Registration (Proprietorship, Partnership, Pvt Ltd)</span>
                  </div>
                </div>
                <div className="division-card-footer">
                  <Link to="/services/tax-compliance" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Explore Tax & Compliance</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Why Small Businesses Choose VT - Ground-level, Friendly */}
      <section className="section" aria-labelledby="why-choose-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Why VT Business Solutions</span>
            <h2 id="why-choose-heading" className="section-title">
              Built for Practical Business Needs
            </h2>
            <p className="section-subtitle">
              We make technology and compliance easy to understand, accessible, and affordable for local business owners.
            </p>
          </div>

          <div className="differentiators-grid">
            <div className="diff-card">
              <div className="diff-icon-box">
                <Layers size={22} />
              </div>
              <h3 className="diff-title">Requirement-Based Solutions</h3>
              <p className="diff-desc">
                We don't sell bloated corporate packages. We listen to what your shop or business actually needs and build or configure only what works for you.
              </p>
            </div>

            <div className="diff-card">
              <div className="diff-icon-box">
                <HelpCircle size={22} />
              </div>
              <h3 className="diff-title">Simple English, No Jargon</h3>
              <p className="diff-desc">
                No intimidating technical buzzwords or complex legal clauses. We explain every step, document, and deadline in plain, everyday language.
              </p>
            </div>

            <div className="diff-card">
              <div className="diff-icon-box">
                <MessageSquare size={22} />
              </div>
              <h3 className="diff-title">Direct Practitioner Support</h3>
              <p className="diff-desc">
                You speak directly with the person writing your software, configuring your server, or organizing your tax paperwork—no middlemen or delays.
              </p>
            </div>

            <div className="diff-card">
              <div className="diff-icon-box">
                <MapPin size={22} />
              </div>
              <h3 className="diff-title">Local Regional Focus</h3>
              <p className="diff-desc">
                Based in Harur (Tamil Nadu) with operations in Bengaluru, we understand the local business environment, state department procedures, and trade needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* D. How We Work - Simple 4 Steps */}
      <section className="section section-surface" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Simple Process</span>
            <h2 id="process-heading" className="section-title">
              How We Work With You
            </h2>
            <p className="section-subtitle">
              A straightforward process so you always know what to expect.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <span className="process-number">01</span>
              <h3 className="process-step-title">Discuss Your Need</h3>
              <p className="process-step-desc">
                Tell us about your shop, startup, or current challenge. We listen to understand your exact practical requirement.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-number">02</span>
              <h3 className="process-step-title">Clear Plan & Estimate</h3>
              <p className="process-step-desc">
                We suggest a sensible approach with clear deliverables and transparent pricing, without hidden fees or surprise costs.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-number">03</span>
              <h3 className="process-step-title">Build, Setup or File</h3>
              <p className="process-step-desc">
                We develop your website, configure your systems, or organize and submit your compliance paperwork carefully.
              </p>
            </div>

            <div className="process-step-card">
              <span className="process-number">04</span>
              <h3 className="process-step-title">Ongoing Support</h3>
              <p className="process-step-desc">
                We stay available for routine maintenance, troubleshooting, and timely filing reminders whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E. Approachable Bottom CTA Banner */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2 id="cta-heading" className="cta-banner-title">
                Need Help With IT or Business Compliance?
              </h2>
              <p className="cta-banner-desc">
                Whether you need a website, shop billing software, GST return assistance, or government registration, we are ready to assist you.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-white btn-lg">
                <span>Discuss Your Requirement</span>
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+918925063980" className="btn btn-outline-white btn-lg">
                <Phone size={16} />
                <span>Call +91 89250 63980</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
