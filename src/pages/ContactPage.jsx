import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import '../styles/pages.css';

const contactSchema = {
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
          "name": "Contact Us",
          "item": "https://vtbusinesssupport.in/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contact VT Business Solutions",
      "url": "https://vtbusinesssupport.in/contact",
      "description": "Connect with VT Business Solutions for website development, shop billing systems, GST filing, and business compliance.",
      "mainEntity": {
        "@id": "https://vtbusinesssupport.in/#organization"
      }
    }
  ]
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const queryCategory = searchParams.get('category');
  const queryService = searchParams.get('service') || '';

  const preselectedCategory = (() => {
    if (queryCategory === 'it') return 'IT & Technology Solutions';
    if (queryCategory === 'tax') return 'Tax & Business Compliance';
    if (queryCategory === 'other') return 'Other Business Requirements';
    return 'IT & Technology Solutions';
  })();

  return (
    <>
      <SEO 
        title="Contact Us | IT Solutions & Tax Compliance Desk"
        description="Connect with VT Business Solutions for website development, shop billing systems, GST filing, and business compliance. Offices in Harur (Tamil Nadu) and Electronic City (Bengaluru)."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      {/* Subpage Banner with Breadcrumbs */}
      <section className="subpage-hero" aria-labelledby="contact-page-title">
        <div className="container">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span className="breadcrumb-current" aria-current="page">Contact Us</span>
          </nav>

          <div className="subpage-hero-content">
            <span className="section-tag">Direct Communication</span>
            <h1 id="contact-page-title" className="subpage-title">
              Discuss Your Requirement
            </h1>
            <p className="subpage-desc">
              Have a question about a website, shop billing software, cloud server setup, or GST and tax compliance? Reach out directly via our enquiry form, WhatsApp desk, or phone.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Directory Section */}
      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Directory & Offices */}
            <div className="contact-info-panel">
              <div>
                <span className="section-tag">Direct Contact</span>
                <h2 style={{ fontSize: '1.65rem', marginBottom: '12px' }}>Get in Touch With Us</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', marginBottom: '24px' }}>
                  We respond promptly to all inquiries. For immediate assistance or a quick consultation, feel free to call or WhatsApp our desk directly.
                </p>
              </div>

              <div className="contact-direct-card">
                <div className="contact-direct-item">
                  <div className="contact-icon-circle">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="contact-item-label">Telephone Helpline</span>
                    <div>
                      <a href="tel:+918925063980" className="contact-item-value" style={{ color: 'var(--color-primary)' }}>
                        +91 89250 63980
                      </a>
                    </div>
                    <span className="contact-item-subtext">Monday – Saturday, 9:00 AM to 6:30 PM IST</span>
                  </div>
                </div>

                <div className="contact-direct-item">
                  <div className="contact-icon-circle">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="contact-item-label">Email Communications</span>
                    <div>
                      <a href="mailto:vtconsulting.in@gmail.com" className="contact-item-value" style={{ color: 'var(--color-primary)' }}>
                        vtconsulting.in@gmail.com
                      </a>
                    </div>
                    <span className="contact-item-subtext">Direct inbox for project requirements & tax documents</span>
                  </div>
                </div>

                <div className="contact-direct-item">
                  <div className="contact-icon-circle" style={{ backgroundColor: '#DCFCE7', color: '#16A34A' }}>
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="contact-item-label">WhatsApp Business Desk</span>
                    <div>
                      <a 
                        href="https://wa.me/918925063980?text=Hi%20VT%20Business%20Solutions,%20I%20would%20like%20to%20discuss%20a%20requirement." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-item-value"
                        style={{ color: '#15803D' }}
                      >
                        +91 89250 63980 (Start Instant Chat)
                      </a>
                    </div>
                    <span className="contact-item-subtext">Fastest channel for local shop & business inquiries</span>
                  </div>
                </div>
              </div>

              {/* Physical Office Hubs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="corp-card" style={{ borderLeft: '3px solid var(--color-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
                    <strong style={{ fontSize: '0.9375rem' }}>Registered Headquarters (Tamil Nadu)</strong>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    5/1B16, Administrative Office, Harur Town, Dharmapuri District, Tamil Nadu - 636903
                  </p>
                </div>

                <div className="corp-card" style={{ borderLeft: '3px solid #2563EB' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <MapPin size={16} style={{ color: '#2563EB' }} />
                    <strong style={{ fontSize: '0.9375rem' }}>Operations Hub (Bengaluru)</strong>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    #79, 3rd Floor, Phase 1, Electronic City, Bengaluru, Karnataka - 560100
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div>
              <span className="section-tag">Enquiry Submission</span>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '12px' }}>Send Your Requirement</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem', marginBottom: '24px' }}>
                Select your service category and let us know what you need help with. We will review and connect with you directly.
              </p>

              <ContactForm 
                preselectedCategory={preselectedCategory} 
                preselectedService={queryService} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approachable Steps */}
      <section className="section section-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Our Commitment</span>
            <h2 className="section-title">What Happens After You Contact Us</h2>
          </div>

          <div className="differentiators-grid">
            <div className="diff-card">
              <span className="process-number">01</span>
              <h3 className="diff-title">Direct Review</h3>
              <p className="diff-desc">
                Your enquiry is reviewed directly by the developer or compliance professional who handles the work.
              </p>
            </div>

            <div className="diff-card">
              <span className="process-number">02</span>
              <h3 className="diff-title">Clear Estimate</h3>
              <p className="diff-desc">
                We explain the practical approach, deliverables, and cost in plain English with no hidden surprises.
              </p>
            </div>

            <div className="diff-card">
              <span className="process-number">03</span>
              <h3 className="diff-title">Reliable Delivery</h3>
              <p className="diff-desc">
                We build your application or prepare your filing on time, and keep you updated at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
