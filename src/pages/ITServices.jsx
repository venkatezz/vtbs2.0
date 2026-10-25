import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Globe, 
  Server, 
  Wrench, 
  Check, 
  ArrowRight, 
  HelpCircle,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { IT_SERVICE_CATEGORIES } from '../data/servicesData';
import heroIndianImg from '../assets/hero-indian.jpg';
import ContactForm from '../components/ContactForm';
import '../styles/pages.css';

const itSchema = {
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
          "name": "IT & Technology Solutions",
          "item": "https://vtbusinesssupport.in/services/it-technology"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "IT & Technology Solutions",
      "serviceType": "Information Technology, Software & Cloud Services",
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
      "description": "Requirement-based IT services including custom business applications, shop billing software, websites, AWS cloud hosting, Linux servers, and workplace IT troubleshooting."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you build a billing and inventory system for my retail shop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We understand that local retail and wholesale shops need fast daily barcode billing, stock alerts, and customer receipts without unnecessary complexity. We build simple, customized billing software to fit your daily shop flow."
          }
        },
        {
          "@type": "Question",
          "name": "How much time does it take to create a business website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A clean, mobile-friendly business website typically takes 1 to 2 weeks once content and photos are provided. For custom web applications with specific features like booking or customer portals, we provide a realistic timeline after discussing your requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can you set up professional business email like name@mycompany.in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We configure professional email using Google Workspace (Gmail for business) or Microsoft 365, along with proper DNS security records (SPF, DKIM, DMARC) so your emails reach customer inboxes safely and don't end up in spam."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with ongoing computer and server maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle Linux server administration, cloud hosting on AWS, routine security patches, automated backups, and troubleshooting for workplace computers and office networks remotely and on-site."
          }
        }
      ]
    }
  ]
};

export default function ITServices() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'custom-software-apps':
        return <Code2 size={24} />;
      case 'website-development':
        return <Globe size={24} />;
      case 'cloud-servers':
        return <Server size={24} />;
      case 'it-support':
        return <Wrench size={24} />;
      default:
        return <Code2 size={24} />;
    }
  };

  return (
    <>
      <SEO 
        title="IT & Technology Solutions | Websites, Custom Apps & Cloud Support"
        description="Requirement-based IT solutions for businesses, retail shops, startups and professionals: websites, billing & inventory systems, booking apps, AWS cloud, Linux servers, and workplace IT support across Tamil Nadu and Bengaluru."
        canonicalPath="/services/it-technology"
        schema={itSchema}
      />

      {/* Subpage Banner with Realistic Proportional Hero Media & Breadcrumbs */}
      <section className="subpage-hero" aria-labelledby="it-page-title">
        <div className="container">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span className="breadcrumb-current" aria-current="page">IT & Technology Solutions</span>
          </nav>

          <div className="subpage-hero-grid">
            <div className="subpage-hero-content">
              <span className="section-tag">Division 01</span>
              <h1 id="it-page-title" className="subpage-title">
                IT & Technology Solutions
              </h1>
              <p className="subpage-desc">
                We take a practical, requirement-based approach: we understand your specific daily bottleneck or goal first, then build or configure the right website, business application, or server setup for you.
              </p>

              {/* Geographic & Delivery Scope Notice */}
              <div className="geo-availability-bar">
                <MapPin size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Service Delivery Coverage: </strong>
                  <span>Remote custom application development, websites, and cloud management provided nationwide. On-site network cabling, hardware setup, and systems troubleshooting available in Bengaluru and regional corridors across Tamil Nadu (Harur, Dharmapuri, Salem, Krishnagiri, Hosur).</span>
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#services-list" className="btn btn-primary">
                  <span>View What We Build</span>
                  <ArrowRight size={16} />
                </a>
                <Link to="/contact?category=it" className="btn btn-secondary">
                  <span>Discuss Your Requirement</span>
                </Link>
              </div>
            </div>
            <div className="subpage-hero-media">
              <img 
                src={heroIndianImg} 
                alt="Indian software developer working on business application code at a workspace desk" 
                className="subpage-hero-img"
                width="640"
                height="320"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Comprehensive Service Categories */}
      <section className="section" id="services-list" aria-labelledby="it-categories-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Capabilities</span>
            <h2 id="it-categories-heading" className="section-title">
              What We Actually Build & Support
            </h2>
            <p className="section-subtitle">
              From business websites to custom billing software and server setup, explore our four main technology areas.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {IT_SERVICE_CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                id={cat.id}
                className="division-section-card"
                style={{ scrollMarginTop: '100px' }}
              >
                <div className="division-header-bar">
                  <div className="division-title-group">
                    <div className="division-icon-box">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <span className="service-tile-tag">{cat.tag}</span>
                      <h3 className="division-title" style={{ marginTop: '4px' }}>
                        {cat.title}
                      </h3>
                      <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem', marginTop: '2px' }}>
                        "{cat.questionPrompt}"
                      </p>
                    </div>
                  </div>
                  <Link 
                    to={`/contact?category=it&service=${encodeURIComponent(cat.title)}`}
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
                      to={`/contact?category=it&service=${encodeURIComponent(cat.title)}`}
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

      {/* Practical FAQs for Small Businesses (AEO / GEO optimized) */}
      <section className="section section-surface" aria-labelledby="it-faq-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Common Questions</span>
            <h2 id="it-faq-heading" className="section-title">
              Questions Local Business Owners Ask Us
            </h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Can you build a billing and inventory system for my retail shop?</span>
              </div>
              <p className="faq-answer">
                Yes. We understand that local retail and wholesale shops need fast daily barcode billing, stock alerts, and customer receipts without unnecessary complexity. We build simple, customized billing software to fit your daily shop flow.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>How much time does it take to create a business website?</span>
              </div>
              <p className="faq-answer">
                A clean, mobile-friendly business website typically takes 1 to 2 weeks once content and photos are provided. For custom web applications with specific features like booking or customer portals, we provide a realistic timeline after discussing your requirements.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Can you set up professional business email like name@mycompany.in?</span>
              </div>
              <p className="faq-answer">
                Yes. We configure professional email using Google Workspace (Gmail for business) or Microsoft 365, along with proper DNS security records (SPF, DKIM, DMARC) so your emails reach customer inboxes safely and don't end up in spam.
              </p>
            </div>

            <div className="faq-card">
              <div className="faq-question">
                <HelpCircle size={18} style={{ flexShrink: 0 }} />
                <span>Do you help with ongoing computer and server maintenance?</span>
              </div>
              <p className="faq-answer">
                Yes. We handle Linux server administration, cloud hosting on AWS, routine security patches, automated backups, and troubleshooting for workplace computers and office networks remotely and on-site.
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
              <span className="section-tag">Direct Contact</span>
              <h2 className="section-title">Discuss Your IT Requirement</h2>
              <p style={{ marginBottom: '24px', fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Tell us what you want to build or what technical problem you are facing. We will review your requirement and suggest a sensible, cost-effective solution.
              </p>

              <div className="corp-card" style={{ marginBottom: '16px' }}>
                <h4 style={{ marginBottom: '8px', color: 'var(--color-primary)' }}>Telephone & WhatsApp</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>Call or message our desk directly:</p>
                <a href="tel:+918925063980" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  +91 89250 63980
                </a>
              </div>

              <div className="corp-card">
                <h4 style={{ marginBottom: '8px', color: 'var(--color-primary)' }}>Operations Hub</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  #79, 3rd Floor, Phase 1, Electronic City, Bengaluru, Karnataka - 560100
                </p>
              </div>
            </div>

            <div>
              <ContactForm preselectedCategory="IT & Technology Solutions" preselectedService="Custom Software & Business Applications" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
