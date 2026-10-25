import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  Receipt, 
  BookOpen, 
  Building2, 
  Award, 
  FileText, 
  Briefcase, 
  CalendarClock,
  Check, 
  ArrowRight, 
  HelpCircle,
  Info,
  MapPin
} from 'lucide-react';
import SEO from '../components/SEO';
import { TAX_SERVICE_CATEGORIES } from '../data/servicesData';
import gstFilingImg from '../assets/gst-filing.jpg';
import gstLogo from '../assets/gst-logo.png';
import msmeLogo from '../assets/msme-logo.jpg';
import itrLogo from '../assets/itr-logo.jpg';
import ContactForm from '../components/ContactForm';
import '../styles/pages.css';

const taxSchema = {
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tax, Accounting & Business Compliance",
          "item": "https://vtbusinesssupport.in/services/tax-compliance"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Tax, Accounting & Business Compliance Assistance",
      "serviceType": "Business Compliance, Tax Preparation & Accounting Assistance",
      "provider": {
        "@type": "Organization",
        "name": "VT Business Solutions",
        "url": "https://vtbusinesssupport.in/"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "Country", "name": "India" }
      ],
      "description": "Practical assistance with GST registration and returns, income tax return preparation, bookkeeping, Udyam MSME, FSSAI licenses, and business registrations for small businesses and professionals."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "When does a small business or shop need to register for GST?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In India, businesses with an annual turnover exceeding ₹40 lakhs for goods (₹20 lakhs in certain special states) or ₹20 lakhs for services must register. Voluntary registration is also beneficial for claiming Input Tax Credit (ITC) and supplying goods online or interstate."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of Udyam (MSME) registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Udyam is the official central government registration for Micro, Small and Medium Enterprises. It is free to obtain and helps you get lower interest rates on bank loans, priority government tenders, collateral-free credit schemes (CGTMSE), and protection against delayed buyer payments."
          }
        },
        {
          "@type": "Question",
          "name": "Do food businesses and grocery shops require FSSAI registration?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Food Safety and Standards Authority of India (FSSAI) rules, any business dealing with food—including small grocery shops, restaurants, bakeries, cloud kitchens, and packaged food makers—must have a valid FSSAI registration or state license to operate legally."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help prepare CMA data and project reports for bank loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We help prepare structured project profiles, financial forecasts, and Credit Monitoring Arrangement (CMA) data formats required by banks for Mudra, PMEGP, cash credit (CC), or term loan applications."
          }
        }
      ]
    }
  ]
};

export default function TaxServices() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'gst-services':
        return <Receipt size={24} />;
      case 'income-tax-services':
        return <FileSpreadsheet size={24} />;
      case 'accounting-bookkeeping':
        return <BookOpen size={24} />;
      case 'business-registration-startup':
        return <Building2 size={24} />;
      case 'government-registrations':
        return <Award size={24} />;
      case 'partnership-corporate-docs':
        return <FileText size={24} />;
      case 'project-reports-cma':
        return <Briefcase size={24} />;
      case 'compliance-payroll-assistance':
        return <CalendarClock size={24} />;
      default:
        return <FileSpreadsheet size={24} />;
    }
  };

  return (
    <>
      <SEO 
        title="Tax, Accounting & Business Compliance | GST, Income Tax & Registrations"
        description="Practical compliance assistance for small businesses, shops, startups and professionals across Tamil Nadu and Karnataka. GST filing, income tax, accounts, Udyam MSME, FSSAI and registrations."
        canonicalPath="/services/tax-compliance"
        schema={taxSchema}
      />

      {/* Subpage Banner with Realistic Proportional Hero Media & Breadcrumbs */}
      <section className="subpage-hero" aria-labelledby="tax-page-title">
        <div className="container">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span className="breadcrumb-current" aria-current="page">Tax, Accounting & Business Compliance</span>
          </nav>

          <div className="subpage-hero-grid">
            <div className="subpage-hero-content">
              <span className="section-tag" style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)' }}>Division 02</span>
              <h1 id="tax-page-title" className="subpage-title">
                Tax, Accounting & Business Compliance
              </h1>
              <p className="subpage-desc">
                Practical, day-to-day assistance with GST, income tax filing, bookkeeping ledgers, government registrations, and business documentation in simple English for local enterprises and individuals.
              </p>

              {/* Geographic Scope Callout */}
              <div className="geo-availability-bar">
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Service Delivery Coverage: </strong>
                  <span>Online documentation, return preparation, and tax filing assistance available across India. In-person record organization and business registration guidance available at our administrative headquarters in Harur, Dharmapuri District, Tamil Nadu.</span>
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#compliance-list" className="btn btn-primary">
                  <span>Explore Compliance Services</span>
                  <ArrowRight size={16} />
                </a>
                <Link to="/contact?category=tax" className="btn btn-secondary">
                  <span>Discuss Your Requirement</span>
                </Link>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img 
                src={gstFilingImg} 
                alt="Indian tax consultant reviewing GST invoices, accounting records, and compliance files" 
                className="subpage-hero-img"
                width="640"
                height="320"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Professional & Legal Disclosure Notice */}
      <section style={{ backgroundColor: '#F0F9FF', borderBottom: '1px solid #BAE6FD', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <Info size={22} style={{ color: '#0284C7', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.875rem', color: '#0369A1', lineHeight: 1.55 }}>
              <strong style={{ display: 'block', marginBottom: '2px', color: '#0C4A6E' }}>
                Professional Notice & Scope Transparency:
              </strong>
              This division is led by professionals currently in the CA articleship pathway. We provide direct assistance with day-to-day documentation, tax return compilation, bookkeeping, and filing support. Services requiring statutory audit certification, formal signatory attestations, or restricted professional opinions are coordinated with or referred to qualified, authorized practicing professionals as per applicable ICAI and legal guidelines. VT Business Solutions is not a CA firm.
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Badges Strip */}
      <section style={{ padding: '20px 0', borderBottom: '1px solid var(--border-subtle)', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={gstLogo} alt="GST Portal Compliance Support" style={{ height: '36px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)' }}>GST Return Support</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={itrLogo} alt="Income Tax India Filing Assistance" style={{ height: '36px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Income Tax Filing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={msmeLogo} alt="Udyam MSME Government Registration" style={{ height: '36px', objectFit: 'contain' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-main)' }}>MSME / Udyam Assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Comprehensive Tax & Compliance Categories */}
      <section className="section" id="compliance-list" aria-labelledby="tax-categories-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Compliance Services</span>
            <h2 id="tax-categories-heading" className="section-title">
              Complete Tax, Registration & Accounting Support
            </h2>
            <p className="section-subtitle">
              Clearly organized categories covering your routine business filings, accounts, and legal registrations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {TAX_SERVICE_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                id={cat.id}
                className="division-section-card"
                style={{ scrollMarginTop: '100px' }}
              >
                <div className="division-header-bar">
                  <div className="division-title-group">
                    <div className="division-icon-box" style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', color: 'var(--color-primary)' }}>
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <span className="service-tile-tag" style={{ color: 'var(--color-primary)' }}>{cat.tag}</span>
                      <h3 className="division-title" style={{ marginTop: '4px' }}>
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <Link 
                    to={`/contact?category=tax&service=${encodeURIComponent(cat.title)}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Enquire About This</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div style={{ padding: '24px 32px' }}>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {cat.summary}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {cat.offerings.map((item, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          background: '#F8FAFC', 
                          border: '1px solid var(--border-subtle)', 
                          borderRadius: 'var(--radius-md)', 
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Check size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                          <strong style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)' }}>
                            {item.name}
                          </strong>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0, paddingLeft: '24px' }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Link 
                      to={`/contact?category=tax&service=${encodeURIComponent(cat.title)}`}
                      className="btn btn-primary"
                    >
                      <span>Need {cat.title}? Talk to Us</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Business FAQs (AEO / GEO optimized) */}
      <section className="section section-surface" aria-labelledby="tax-faq-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Common Questions</span>
            <h2 id="tax-faq-heading" className="section-title">
              Frequently Asked Tax & Registration Questions
            </h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>When does a small business or shop need to register for GST?</span>
              </div>
              <p className="faq-answer">
                In India, businesses with an annual turnover exceeding ₹40 lakhs for goods (₹20 lakhs in certain special states) or ₹20 lakhs for services must register. Voluntary registration is also beneficial for claiming Input Tax Credit (ITC) and supplying goods online or interstate.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>What are the benefits of Udyam (MSME) registration?</span>
              </div>
              <p className="faq-answer">
                Udyam is the official central government registration for Micro, Small and Medium Enterprises. It is free to obtain and helps you get lower interest rates on bank loans, priority government tenders, collateral-free credit schemes (CGTMSE), and protection against delayed buyer payments.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Do food businesses and grocery shops require FSSAI registration?</span>
              </div>
              <p className="faq-answer">
                Yes. Under Food Safety and Standards Authority of India (FSSAI) rules, any business dealing with food—including small grocery shops, restaurants, bakeries, cloud kitchens, and packaged food makers—must have a valid FSSAI registration or state license to operate legally.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Can you help prepare CMA data and project reports for bank loans?</span>
              </div>
              <p className="faq-answer">
                Yes. We help prepare structured project profiles, financial forecasts, and Credit Monitoring Arrangement (CMA) data formats required by banks for Mudra, PMEGP, cash credit (CC), or term loan applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            <div>
              <span className="section-tag">Direct Consultation</span>
              <h2 className="section-title">Discuss Your Compliance Requirement</h2>
              <p style={{ marginBottom: '24px', fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Have questions regarding GST registration, pending tax returns, or company documentation? Contact our consultation desk in Harur, Tamil Nadu.
              </p>

              <div className="corp-card" style={{ marginBottom: '16px' }}>
                <h4 style={{ marginBottom: '8px', color: 'var(--color-primary)' }}>Direct Desk Helpline</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Call or message for guidance:</p>
                <a href="tel:+918925063980" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  +91 89250 63980
                </a>
              </div>

              <div className="corp-card">
                <h4 style={{ marginBottom: '8px', color: 'var(--color-primary)' }}>Registered Headquarters</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  5/1B16, Administrative Office, Harur Town, Dharmapuri District, Tamil Nadu - 636903
                </p>
              </div>
            </div>

            <div>
              <ContactForm preselectedCategory="Tax & Business Compliance" preselectedService="GST Services & Compliance Support" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
