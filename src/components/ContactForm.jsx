import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Phone, RefreshCw, Mail, ArrowRight } from 'lucide-react';
import '../styles/contactForm.css';

const IT_SERVICES_LIST = [
  'Custom Software & Business Applications',
  'Website Development',
  'Shop Billing & Inventory Systems',
  'Booking & Appointment Systems',
  'Cloud, Servers & IT Infrastructure (AWS/Linux)',
  'Business IT Support & Troubleshooting',
  'Business Email Setup (Google Workspace / M365)',
  'Other IT Requirement'
];

const TAX_SERVICES_LIST = [
  'GST Services & Compliance Support',
  'Income Tax Return & TDS Assistance',
  'Accounting & Bookkeeping Support',
  'Business Registration (Proprietorship / Partnership / LLP / Pvt Ltd)',
  'Government Registrations (Udyam MSME / FSSAI Food License)',
  'Partnership & Corporate Documentation',
  'Project Reports & Bank Loan CMA Data',
  'Payroll & Ongoing Compliance Reminders',
  'Other Tax / Compliance Requirement'
];

const OTHER_SERVICES_LIST = [
  'Combined IT & Compliance Support',
  'General Business Consultation',
  'Other Specific Requirement'
];

export default function ContactForm({ preselectedCategory = '', preselectedService = '' }) {
  // Determine initial category
  const initialCategory = (() => {
    if (preselectedCategory.includes('Tax')) return 'Tax & Business Compliance';
    if (preselectedCategory.includes('IT')) return 'IT & Technology Solutions';
    if (preselectedCategory.includes('Other')) return 'Other Business Requirements';
    return 'IT & Technology Solutions';
  })();

  const [category, setCategory] = useState(initialCategory);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specificService: preselectedService || IT_SERVICES_LIST[0],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverErrorMsg, setServerErrorMsg] = useState('');

  // Update specificService list options when category changes
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, specificService: preselectedService }));
    } else {
      if (category === 'IT & Technology Solutions') {
        setFormData(prev => ({ ...prev, specificService: IT_SERVICES_LIST[0] }));
      } else if (category === 'Tax & Business Compliance') {
        setFormData(prev => ({ ...prev, specificService: TAX_SERVICES_LIST[0] }));
      } else {
        setFormData(prev => ({ ...prev, specificService: OTHER_SERVICES_LIST[0] }));
      }
    }
  }, [category, preselectedService]);

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    setCategory(newCat);
    if (newCat === 'IT & Technology Solutions') {
      setFormData(prev => ({ ...prev, specificService: IT_SERVICES_LIST[0] }));
    } else if (newCat === 'Tax & Business Compliance') {
      setFormData(prev => ({ ...prev, specificService: TAX_SERVICES_LIST[0] }));
    } else {
      setFormData(prev => ({ ...prev, specificService: OTHER_SERVICES_LIST[0] }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    const phoneRegex = /^[0-9+() -]{8,18}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid contact phone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description of your requirement (minimum 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const formattedWhatsAppText = encodeURIComponent(
    `Hello VT Business Solutions,\n\nI want to discuss an enquiry:\nCategory: ${category}\nService: ${formData.specificService}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nRequirement:\n${formData.message}`
  );

  const formattedMailtoUrl = `mailto:vtconsulting.in@gmail.com?subject=${encodeURIComponent(
    `Enquiry: ${category} - ${formData.specificService} (${formData.name})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${category}\nService: ${formData.specificService}\n\nRequirement:\n${formData.message}`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setServerErrorMsg('');

    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

    // Check if an actual backend delivery endpoint is configured
    if (web3Key) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `Enquiry: [${category}] ${formData.specificService} - ${formData.name}`,
            category: category,
            service: formData.specificService,
            message: formData.message,
            to_email: 'vtconsulting.in@gmail.com'
          })
        });

        const data = await res.json();
        if (res.ok && data.success) {
          setStatus('success');
        } else {
          throw new Error(data.message || 'Delivery service returned an error.');
        }
      } catch (err) {
        setStatus('error');
        setServerErrorMsg(err.message || 'Transmission failed. Please use WhatsApp or email directly.');
      }
    } else if (apiUrl) {
      try {
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            category
          })
        });
        if (res.ok) {
          setStatus('success');
        } else {
          throw new Error(`Server returned HTTP ${res.status}`);
        }
      } catch (err) {
        setStatus('error');
        setServerErrorMsg(err.message || 'Transmission failed. Please use WhatsApp or email directly.');
      }
    } else {
      // When no remote API server is provisioned, we do NOT fake an email delivery confirmation.
      // Instead, we immediately open WhatsApp or mail client so the message is guaranteed to reach VT Business Solutions.
      window.open(`https://wa.me/918925063980?text=${formattedWhatsAppText}`, '_blank');
      setStatus('direct-sent');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      specificService: IT_SERVICES_LIST[0],
      message: ''
    });
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success' || status === 'direct-sent') {
    return (
      <div className="contact-form-card">
        <div className="success-state-box">
          <div className="success-icon-wrap">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="success-title">
            {status === 'success' ? 'Enquiry Delivered Successfully' : 'Requirement Ready to Dispatch'}
          </h3>
          <p className="success-desc">
            Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.specificService}</strong> ({category}) has been compiled.
          </p>

          <div className="success-actions" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a 
              href={`https://wa.me/918925063980?text=${formattedWhatsAppText}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp (+91 89250 63980)</span>
            </a>

            <a 
              href={formattedMailtoUrl}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Mail size={16} />
              <span>Send via Email Client</span>
            </a>
            
            <button 
              type="button" 
              onClick={resetForm} 
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}
            >
              <RefreshCw size={15} />
              <span>Submit Another Requirement</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentServicesList = 
    category === 'IT & Technology Solutions' 
      ? IT_SERVICES_LIST 
      : category === 'Tax & Business Compliance'
      ? TAX_SERVICES_LIST
      : OTHER_SERVICES_LIST;

  return (
    <div className="contact-form-card">
      {status === 'error' && (
        <div className="form-alert form-alert-error" role="alert" style={{ marginBottom: '16px' }}>
          <AlertCircle size={20} style={{ flexShrink: 0 }} />
          <div>
            <strong>Delivery note: </strong>
            <span>{serverErrorMsg} You can message us directly on WhatsApp at +91 89250 63980.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate aria-label="Business Consultation Enquiry Form">
        {/* Category Radio / Selector */}
        <div className="form-group" style={{ marginBottom: '16px' }}>
          <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block' }}>
            What is your enquiry about? *
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
            {['IT & Technology Solutions', 'Tax & Business Compliance', 'Other Business Requirements'].map((catOption) => (
              <label 
                key={catOption}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  border: category === catOption ? '2px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: category === catOption ? 'var(--color-primary-subtle)' : '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: category === catOption ? 700 : 500,
                  color: category === catOption ? 'var(--color-primary)' : 'var(--color-text-main)',
                  transition: 'all 0.15s ease'
                }}
              >
                <input 
                  type="radio" 
                  name="category" 
                  value={catOption}
                  checked={category === catOption}
                  onChange={handleCategoryChange}
                  style={{ accentColor: 'var(--color-primary)' }}
                />
                <span>{catOption}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Specific Service Dropdown */}
        <div className="form-group" style={{ marginBottom: '16px' }}>
          <label htmlFor="specificService" className="form-label">
            Specific Service / Area *
          </label>
          <select
            id="specificService"
            name="specificService"
            className="form-select"
            value={formData.specificService}
            onChange={handleChange}
            disabled={status === 'submitting'}
          >
            {currentServicesList.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
        </div>

        {/* Name & Email */}
        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="e.g. Anand Kumar"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="anand@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
          </div>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Mobile / Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'submitting'}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">Brief Description of Your Requirement *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-textarea"
            placeholder="Please tell us about your business, shop, or what you need help with..."
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
        </div>

        <div className="form-submit-row">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={status === 'submitting'}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {status === 'submitting' ? (
              <span>Sending Requirement...</span>
            ) : (
              <>
                <span>Send Requirement Details</span>
                <Send size={16} />
              </>
            )}
          </button>
          
          <p className="form-privacy-note text-center" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
            We respect your privacy. Your information is only used to respond to your business enquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
