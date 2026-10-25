import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, HelpCircle, Sparkles, Code2, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import heroIndianImg from '../assets/hero-indian.jpg';
import gstFilingImg from '../assets/gst-filing.jpg';
import '../styles/pages.css';

const servicesSchema = {
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
          "name": "Services",
          "item": "https://vtbusinesssupport.in/services"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "name": "Services & Practice Divisions | VT Business Solutions",
      "url": "https://vtbusinesssupport.in/services",
      "description": "VT Business Solutions provides two distinct service divisions: IT & Technology Solutions and Tax & Business Compliance across Tamil Nadu and Bengaluru.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Division 01 — IT & Technology Solutions",
            "url": "https://vtbusinesssupport.in/services/it-technology"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Division 02 — Tax & Business Compliance",
            "url": "https://vtbusinesssupport.in/services/tax-compliance"
          }
        ]
      }
    }
  ]
};

export default function Services() {
  return (
    <>
      <SEO 
        title="Services & Practice Divisions | IT Solutions & Tax Compliance"
        description="VT Business Solutions provides two distinct service divisions: IT & Technology Solutions (websites, billing software, custom apps) and Tax & Business Compliance (GST, income tax, accounts, Udyam, FSSAI)."
        canonicalPath="/services"
        schema={servicesSchema}
      />

      {/* Subpage Banner with Breadcrumbs */}
      <section className="subpage-hero" aria-labelledby="services-title">
        <div className="container">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span className="breadcrumb-current" aria-current="page">Services</span>
          </nav>

          <div className="subpage-hero-content">
            <span className="section-tag">Service Directory</span>
            <h1 id="services-title" className="subpage-title">
              Our Two Service Divisions
            </h1>
            <p className="subpage-desc">
              We provide practical, requirement-based technology solutions and business compliance assistance in simple, everyday language. Choose the division that fits what your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Two Clearly Separated Practice Divisions */}
      <section className="section" aria-labelledby="division-selector-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Direct Access</span>
            <h2 id="division-selector-heading" className="section-title">
              Select Your Required Service Division
            </h2>
            <p className="section-subtitle">
              Each division is dedicated to its specialized domain. You can engage us for IT solutions, tax compliance, or both as your business requires.
            </p>
          </div>

          <div className="division-selector-grid">
            {/* Division 01: IT & Technology Solutions */}
            <div className="division-selector-card">
              <div className="division-card-media">
                <img 
                  src={heroIndianImg} 
                  alt="Indian software engineer developing websites and custom applications" 
                  className="division-card-img"
                  width="600"
                  height="240"
                  loading="eager"
                />
                <span className="division-card-pill">Division 01</span>
              </div>
              <div className="division-card-body">
                <h3 className="division-card-title">Division 01 — IT & Technology Solutions</h3>
                <p className="division-card-desc">
                  Custom technology solutions for businesses, shops, startups and professionals. We understand your problem first and build suitable digital solutions.
                </p>
                
                <div className="division-card-checklist">
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Business websites, service portfolios & landing pages</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Custom web applications & internal workflow tools</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Small-shop billing and inventory management systems</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Booking and appointment scheduling systems</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>AWS cloud hosting, Linux and Windows server administration</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Business email setup (Google Workspace / M365) & office IT support</span>
                  </div>
                </div>

                <div className="division-card-footer">
                  <Link to="/services/it-technology" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
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
                  alt="Indian professional managing invoices and tax compliance records" 
                  className="division-card-img"
                  width="600"
                  height="240"
                  loading="eager"
                />
                <span className="division-card-pill" style={{ backgroundColor: 'rgba(30, 58, 138, 0.95)' }}>Division 02</span>
              </div>
              <div className="division-card-body">
                <h3 className="division-card-title">Division 02 — Tax & Business Compliance</h3>
                <p className="division-card-desc">
                  Practical assistance with taxes, registrations, accounting records, business documentation and compliance in simple, straightforward language.
                </p>

                <div className="division-card-checklist">
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>GST registration assistance & regular return filing support</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Income tax return (ITR) preparation & TDS compliance</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Day-to-day bookkeeping, accounts cleanup & Tally/Zoho setup</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Business registration (Proprietorship, Partnership, LLP, Pvt Ltd)</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Government certificates: Udyam/MSME, FSSAI food license & trade permits</span>
                  </div>
                  <div className="division-check-item">
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Bank loan project reports, financial projections & CMA data support</span>
                  </div>
                </div>

                <div className="division-card-footer">
                  <Link to="/services/tax-compliance" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <span>Explore Tax & Compliance</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Service Scope */}
      <section className="section section-surface" aria-labelledby="engagement-models-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Flexible Support</span>
            <h2 id="engagement-models-heading" className="section-title">
              Engage One Division or Both
            </h2>
            <p className="section-subtitle">
              We work on a straightforward requirement basis. You can hire us for a single task or for ongoing support.
            </p>
          </div>

          <div className="differentiators-grid">
            <div className="diff-card">
              <span className="process-number">01</span>
              <h3 className="diff-title">Single Requirement Work</h3>
              <p className="diff-desc">
                Ideal when you just need a new business website, a shop billing application, a new GST registration, or a bank loan project report prepared.
              </p>
            </div>

            <div className="diff-card">
              <span className="process-number">02</span>
              <h3 className="diff-title">Monthly Support</h3>
              <p className="diff-desc">
                Monthly help for regular GSTR-1 & GSTR-3B filings, day-to-day bookkeeping, or routine cloud server maintenance and website updates.
              </p>
            </div>

            <div className="diff-card">
              <span className="process-number">03</span>
              <h3 className="diff-title">Combined Business Support</h3>
              <p className="diff-desc">
                Many local entrepreneurs rely on us for both: handling their website/IT needs while keeping their monthly accounts and taxes organized under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical FAQs */}
      <section className="section" aria-labelledby="services-faq-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Help & Answers</span>
            <h2 id="services-faq-heading" className="section-title">
              Common Questions About Our Services
            </h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Can I contact you for IT services only?</span>
              </div>
              <p className="faq-answer">
                Yes, absolutely. Our two divisions operate independently. If you only need a website, billing software, or server support, you work directly with our IT team without any obligation to use compliance services.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Can I contact you for GST, accounting or registration only?</span>
              </div>
              <p className="faq-answer">
                Yes. Many local shop owners, traders, and small business owners work with us solely for GST return filing, income tax assistance, Udyam MSME certificates, and accounts bookkeeping.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Where are your offices located?</span>
              </div>
              <p className="faq-answer">
                Our registered administrative office is located in Harur, Dharmapuri District, Tamil Nadu, and our technology operations hub is in Electronic City, Bengaluru. We serve clients across Tamil Nadu, Karnataka, and nearby areas.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>How do you calculate your service charges?</span>
              </div>
              <p className="faq-answer">
                We provide upfront, clear estimates based on your exact requirement before starting any work. No surprise fees, no hidden charges, and no paying for services you don't need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-surface">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-text">
              <h2 className="cta-banner-title">Not Sure What You Need?</h2>
              <p className="cta-banner-desc">
                Tell us about your business requirement and we will recommend the simplest, most practical solution.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-white btn-lg">
                <span>Discuss Your Requirement</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
