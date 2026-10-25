import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Server, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyConfig';
import VTLogo from '../assets/VTlogo.svg';
import '../styles/footer.css';

export default function Footer() {
  const whatsappUrl = COMPANY_CONTACT.getWhatsAppUrl();

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Positioning */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-row">
              <img 
                src={VTLogo} 
                alt="VT Business Solutions Logo" 
                className="footer-logo-img" 
                width="40" 
                height="40" 
              />
              <span className="footer-brand-title">VT Business Solutions</span>
            </Link>
            <p className="footer-brand-desc">
              Practical IT solutions, custom software, websites, and business compliance support for small businesses, retail shops, startups, and professionals across Tamil Nadu and Bengaluru.
            </p>
            <div className="footer-direct-links">
              <a href={`tel:${COMPANY_CONTACT.phoneTel}`} className="footer-direct-link">
                <Phone size={16} style={{ color: '#60A5FA' }} />
                <span>{COMPANY_CONTACT.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="footer-direct-link">
                <Mail size={16} style={{ color: '#60A5FA' }} />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-direct-link"
              >
                <MessageSquare size={16} style={{ color: '#4ADE80' }} />
                <span>WhatsApp Business Desk</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link-item">
                  <ArrowRight size={13} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link-item">
                  <ArrowRight size={13} />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link-item">
                  <ArrowRight size={13} />
                  <span>Services Overview</span>
                </Link>
              </li>
              <li>
                <Link to="/services/it-technology" className="footer-link-item">
                  <ArrowRight size={13} />
                  <span>IT & Technology Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/services/tax-compliance" className="footer-link-item">
                  <ArrowRight size={13} />
                  <span>Tax & Business Compliance</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-item">
                  <ArrowRight size={13} />
                  <span>Contact Consultation Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer-heading">Service Divisions</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/it-technology#custom-software-apps" className="footer-link-item">
                  <Server size={14} style={{ color: '#60A5FA' }} />
                  <span>Custom Software & Billing</span>
                </Link>
              </li>
              <li>
                <Link to="/services/it-technology#website-development" className="footer-link-item">
                  <Server size={14} style={{ color: '#60A5FA' }} />
                  <span>Website Development</span>
                </Link>
              </li>
              <li>
                <Link to="/services/it-technology#cloud-servers" className="footer-link-item">
                  <Server size={14} style={{ color: '#60A5FA' }} />
                  <span>AWS Cloud & Linux Servers</span>
                </Link>
              </li>
              <li>
                <Link to="/services/tax-compliance#gst-services" className="footer-link-item">
                  <ShieldCheck size={14} style={{ color: '#93C5FD' }} />
                  <span>GST Registration & Returns</span>
                </Link>
              </li>
              <li>
                <Link to="/services/tax-compliance#income-tax-services" className="footer-link-item">
                  <ShieldCheck size={14} style={{ color: '#93C5FD' }} />
                  <span>Income Tax Return Assistance</span>
                </Link>
              </li>
              <li>
                <Link to="/services/tax-compliance#government-registrations" className="footer-link-item">
                  <ShieldCheck size={14} style={{ color: '#93C5FD' }} />
                  <span>Udyam MSME & FSSAI Licenses</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hubs */}
          <div className="footer-contact-block">
            <h4 className="footer-heading">Office Locations</h4>
            
            <div className="footer-office-card">
              <span className="footer-office-tag">Registered HQ</span>
              <div className="footer-office-title">
                <MapPin size={15} style={{ color: '#60A5FA' }} />
                <span>Harur, Tamil Nadu</span>
              </div>
              <p className="footer-office-text">
                5/1B16, Administrative Office, Harur Town, Dharmapuri District, Tamil Nadu - 636903
              </p>
            </div>

            <div className="footer-office-card">
              <span className="footer-office-tag">Operations Hub</span>
              <div className="footer-office-title">
                <MapPin size={15} style={{ color: '#60A5FA' }} />
                <span>Electronic City, Bengaluru</span>
              </div>
              <p className="footer-office-text">
                #79, 3rd Floor, Phase 1, Electronic City, Bengaluru, Karnataka - 560100
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure Line */}
        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.5 }}>
          <strong>Professional Notice:</strong> Tax and compliance services are provided by professionals in the CA articleship pathway. We offer practical documentation, bookkeeping, and filing assistance. Statutory audits and certifications are coordinated with authorized practicing professionals where required by law. VT Business Solutions is not a CA firm.
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VT Business Solutions. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/contact" className="footer-legal-link">Privacy & Professional Notice</Link>
            <span>•</span>
            <Link to="/contact" className="footer-legal-link">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
