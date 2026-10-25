import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search } from 'lucide-react';
import SEO from '../components/SEO';
import '../styles/pages.css';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found (404)"
        description="The requested page could not be located on VT Business Solutions."
        canonicalPath="/404"
        noindex={true}
      />

      <section className="section" style={{ padding: 'var(--space-24) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-tag" style={{ color: '#DC2626', backgroundColor: '#FEE2E2', borderColor: '#FCA5A5' }}>
            HTTP 404 Error
          </span>
          <h1 style={{ fontSize: '3rem', margin: '16px 0 12px', color: 'var(--color-primary)' }}>Page Not Found</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
            The page you are looking for may have been relocated, restructured, or is currently unavailable. Please verify the web address or navigate using our primary links below.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              <span>View Service Catalog</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              <span>Contact Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
