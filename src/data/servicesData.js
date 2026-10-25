import heroIndianImg from '../assets/hero-indian.jpg';
import gstFilingImg from '../assets/gst-filing.jpg';

/**
 * DIVISION 01: IT & TECHNOLOGY SOLUTIONS
 * Requirement-based development for small businesses, shops, startups, and professionals.
 */
export const IT_SERVICE_CATEGORIES = [
  {
    id: 'custom-software-apps',
    title: 'Custom Software & Business Applications',
    questionPrompt: 'Need a custom application instead of managing everything manually?',
    summary: 'Tailored software systems built to solve your specific operational bottlenecks. Available on a requirement and feasibility basis.',
    tag: 'Requirement-Based Development',
    offerings: [
      { name: 'Shop Billing & Inventory Systems', desc: 'Manage your daily billing, barcode scanning, stock tracking, and sales receipts from one simple screen.' },
      { name: 'Booking & Appointment Systems', desc: 'Allow your customers to schedule services, consults, or appointments online with automated reminders.' },
      { name: 'Small-Business Management Systems', desc: 'Centralize your customer records, enquiries, quotation follow-ups, and daily work orders.' },
      { name: 'Business Dashboards & Reporting', desc: 'View your daily sales, pending orders, and cash flow in clean, easy-to-read charts.' },
      { name: 'Internal Workflow Applications', desc: 'Automate repetitive office tasks, staff checklists, and approval steps.' }
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    questionPrompt: 'Need a clear, professional website to reach more customers?',
    summary: 'A fast, mobile-friendly website gives your business credibility and helps local customers discover your services 24/7.',
    tag: 'Web Presence & Digital Growth',
    offerings: [
      { name: 'Business & Company Websites', desc: 'Clean, modern multi-page websites showcasing your business profile, services, and contact details.' },
      { name: 'Service & Portfolio Websites', desc: 'Ideal for professionals, consultants, contractors, and clinics wanting to showcase past work.' },
      { name: 'Landing Pages', desc: 'Focused single-page websites engineered for specific promotions, product launches, or ad campaigns.' },
      { name: 'E-commerce & Product Catalogs', desc: 'Online product showcases with WhatsApp order buttons or secure payment gateway integration.' },
      { name: 'Custom Requirement-Based Websites', desc: 'Websites with custom calculators, enquiry forms, customer portals, or specific functional workflows.' }
    ]
  },
  {
    id: 'cloud-servers',
    title: 'Cloud, Servers & IT Infrastructure',
    questionPrompt: 'Need help setting up your server, business email, or cloud hosting?',
    summary: 'Reliable hosting, server deployment, and cloud administration so your systems stay online without technical headaches.',
    tag: 'Cloud & Infrastructure',
    offerings: [
      { name: 'AWS & Cloud Deployment', desc: 'Setup and configuration of virtual servers (EC2), secure storage (S3), and scalable cloud infrastructure.' },
      { name: 'Linux & Windows Server Administration', desc: 'Operating system setup, security updates, firewall protection, and routine server health monitoring.' },
      { name: 'Business Email Setup', desc: 'Professional custom domain email on Google Workspace or Microsoft 365 with strict spam protection (SPF, DKIM, DMARC).' },
      { name: 'File Sharing & Storage Solutions', desc: 'Secure cloud storage and shared folder setups for your team to access files safely from anywhere.' },
      { name: 'Automated Backup Solutions', desc: 'Scheduled database dumps and cloud backups to ensure your critical business data is never lost.' }
    ]
  },
  {
    id: 'it-support',
    title: 'Business IT Support & Troubleshooting',
    questionPrompt: 'Facing computer, network, or software issues in your office?',
    summary: 'Hands-on technical troubleshooting and ongoing maintenance for your workplace computers, printers, and office networks.',
    tag: 'Technical Assistance',
    offerings: [
      { name: 'Workplace Technical Troubleshooting', desc: 'Rapid resolution for computer slowdowns, software errors, connectivity issues, and operating system repairs.' },
      { name: 'Software Installation & System Setup', desc: 'Installing office applications, accounting tools, antivirus solutions, and configuring new staff laptops.' },
      { name: 'Office Network & Wi-Fi Setup', desc: 'Router configuration, secure office Wi-Fi setup, and local area network (LAN) cable connections.' },
      { name: 'Routine Task Automation', desc: 'Simple scripts to automate repetitive daily file exports, report generation, and data transfers.' },
      { name: 'IT Consultation for Small Businesses', desc: 'Practical advice on selecting the right affordable computers, software tools, and cloud subscriptions.' }
    ]
  }
];

/**
 * DIVISION 02: TAX, ACCOUNTING & BUSINESS COMPLIANCE
 * Practical assistance for small businesses, shops, startups, and professionals.
 * IMPORTANT: Handled by professionals in the CA articleship pathway.
 * We provide preparation, documentation assistance, and coordination with eligible licensed professionals where required.
 */
export const TAX_SERVICE_CATEGORIES = [
  {
    id: 'gst-services',
    title: 'GST Services & Compliance Support',
    summary: 'End-to-end assistance with GST registrations, monthly returns, documentation, and notice clarification support.',
    tag: 'GST Support',
    offerings: [
      { name: 'New GST Registration Assistance', desc: 'Guidance on required documents and smooth application filing on the GST portal for shops, traders, and service providers.' },
      { name: 'GST Return Preparation & Filing Support', desc: 'Timely preparation and filing support for monthly and quarterly returns (GSTR-1, GSTR-3B) to avoid late fees.' },
      { name: 'Regular GST Compliance & ITC Matching', desc: 'Detailed matching of your purchase invoices against GSTR-2B to maximize eligible Input Tax Credit.' },
      { name: 'GST Invoice & Documentation Help', desc: 'Assistance setting up compliant tax invoice formats, HSN codes, and e-way bill procedures.' },
      { name: 'GST Notice Response Preparation', desc: 'Drafting factual replies and compiling documentation for departmental verification notices, where permitted.' },
      { name: 'GST Amendment & Cancellation', desc: 'Adding new business places, updating partner details, or filing for cancellation of inactive GST numbers.' }
    ]
  },
  {
    id: 'income-tax-services',
    title: 'Income Tax Return & TDS Assistance',
    summary: 'Support with individual, proprietary, and business income tax return compilation and quarterly TDS compliance.',
    tag: 'Direct Tax',
    offerings: [
      { name: 'Individual Income Tax Filing Assistance', desc: 'Preparation and filing support for salaried employees, freelancers, professionals, and capital gains (ITR-1, ITR-2, ITR-4).' },
      { name: 'Business & Professional Tax Assistance', desc: 'Computation of business turnover, presumptive taxation under Sec 44AD/44ADA, and return filing support.' },
      { name: 'TDS Compliance & Return Preparation', desc: 'Computation of Tax Deducted at Source (TDS), monthly payment challans, and quarterly return preparation.' },
      { name: 'Tax Document & Record Organization', desc: 'Compiling Form 26AS, AIS, TIS, bank interest certificates, and tax-saving proof records.' },
      { name: 'Tax Planning Support', desc: 'Practical guidance on eligible deductions and allowances within legal and professional limits.' }
    ]
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping Support',
    summary: 'Keep your financial records clean, organized, and up to date without the cost of a full-time in-house accountant.',
    tag: 'Financial Records',
    offerings: [
      { name: 'Day-to-Day Bookkeeping', desc: 'Systematic recording of daily sales, vendor purchases, payments, and receipts adhering to accounting standards.' },
      { name: 'Bank Statement Reconciliation', desc: 'Matching bank transactions with your cash book to catch discrepancies and uncredited cheques.' },
      { name: 'Accounting Software Setup', desc: 'Setup and chart-of-accounts configuration in Tally Prime, Zoho Books, Vyapar, or Excel ledgers.' },
      { name: 'Accounts Cleanup & Organization', desc: 'Organizing messy past invoices, clearing unposted transactions, and updating ledger balances.' },
      { name: 'Basic Financial Reports', desc: 'Monthly Trial Balance, Profit & Loss summaries, and Balance Sheets to help you know your true business health.' }
    ]
  },
  {
    id: 'business-registration-startup',
    title: 'Business Registration & Startup Support',
    summary: 'Clear guidance on choosing the right legal structure and complete registration assistance for new ventures.',
    tag: 'Startup Registration',
    offerings: [
      { name: 'Proprietorship Setup Guidance', desc: 'Easiest way to start a shop or small service business with bank current account documentation support.' },
      { name: 'Partnership Firm Registration Assistance', desc: 'Structuring partnership terms, deed drafting, notary assistance, and registrar filing coordination.' },
      { name: 'LLP Registration Assistance', desc: 'Name reservation, DSC procurement, drafting LLP agreements, and filing with the Ministry of Corporate Affairs (MCA).' },
      { name: 'Private Limited Incorporation Assistance', desc: 'End-to-end support for Pvt Ltd company incorporation through SPICe+ MCA forms.' },
      { name: 'PAN & TAN Applications', desc: 'Assistance applying for new business PAN cards and Tax Deduction Account Numbers (TAN).' }
    ]
  },
  {
    id: 'government-registrations',
    title: 'Government Registrations & Licenses',
    summary: 'Obtain statutory certificates and local licenses required to run your shop, manufacturing unit, or commercial facility.',
    tag: 'Licenses & Certificates',
    offerings: [
      { name: 'Udyam / MSME Registration Assistance', desc: 'Free official central government registration for small businesses to unlock bank loan subsidies and priority benefits.' },
      { name: 'FSSAI Food License Registration', desc: 'Mandatory food safety registration and state licensing assistance for restaurants, bakeries, grocery stores, and food makers.' },
      { name: 'Shops & Commercial Establishments Registration', desc: 'State labor department registration for shops, retail outlets, and commercial offices in Tamil Nadu/Karnataka.' },
      { name: 'Trade License & Local Municipal Clearances', desc: 'Documentation support for obtaining local municipal corporation/panchayat trade permissions.' },
      { name: 'Professional Tax Registration', desc: 'Employer and professional tax registration and periodic compliance coordination where applicable.' }
    ]
  },
  {
    id: 'partnership-corporate-docs',
    title: 'Partnership & Corporate Documentation',
    summary: 'Drafting formal legal agreements, resolutions, and managing statutory changes in your business entity.',
    tag: 'Legal Documentation',
    offerings: [
      { name: 'Partnership Deed Drafting Assistance', desc: 'Drafting clear partner profit-sharing ratios, capital contribution clauses, and dispute resolution terms.' },
      { name: 'Business Detail Changes & Amendments', desc: 'Assistance changing registered business addresses, adding new partners/directors, or updating capital.' },
      { name: 'LLP & Corporate Compliance Coordination', desc: 'Filing annual forms (Form 8, Form 11 for LLPs; AOC-4, MGT-7 for companies) in coordination with licensed professionals.' },
      { name: 'Business Closure & Cancellation', desc: 'Formal closure filings and registration surrender for inactive partnerships, LLPs, or proprietary firms.' }
    ]
  },
  {
    id: 'project-reports-cma',
    title: 'Project Reports & Bank Loan Documentation',
    summary: 'Clear project reports, financial projections, and CMA data required for bank loans and government subsidy schemes.',
    tag: 'Banking & Reports',
    offerings: [
      { name: 'Bank Loan Project Reports', desc: 'Comprehensive project profiles detailing business background, capital expenditure, and projected profitability.' },
      { name: 'CMA Data Preparation Support', desc: 'Credit Monitoring Arrangement (CMA) data formats detailing working capital limits for bank loan approvals.' },
      { name: 'Government Scheme Documentation', desc: 'Documentation compiling for PMEGP, NEEDS, Mudra, and MSME subsidy loan applications.' },
      { name: 'Financial Projections & Business Plans', desc: 'Multi-year balance sheet and cash flow projections for investors, landlords, or business expansions.' }
    ]
  },
  {
    id: 'compliance-payroll-assistance',
    title: 'Payroll & Ongoing Compliance Reminders',
    summary: 'Maintain simple salary records and stay updated on every filing deadline so you never pay penalty fees.',
    tag: 'Routine Compliance',
    offerings: [
      { name: 'Monthly Payroll & Salary Records', desc: 'Monthly payslip preparation, staff attendance sheets, and salary deduction calculations.' },
      { name: 'PF & ESI Compliance Coordination', desc: 'Assistance organizing monthly employee provident fund and employee state insurance return data.' },
      { name: 'Statutory Compliance Calendar', desc: 'Personalized deadline reminders for GST, TDS, advance tax, and annual corporate filings.' },
      { name: 'Audit Document Organization', desc: 'Sorting and indexing vouchers, bank books, and invoices to make statutory audit review fast and smooth.' }
    ]
  }
];

export const DIVISION_INFO = {
  it: {
    id: 'it-technology',
    number: 'Division 01',
    title: 'IT & Technology Solutions',
    shortHeading: 'Custom Technology Solutions for Businesses, Shops & Startups',
    description: 'We build websites, custom business software, billing systems, and manage your cloud servers and workplace IT support based on your exact requirements.',
    ctaText: 'Explore IT Services',
    link: '/services/it-technology',
    image: heroIndianImg,
    imageAlt: 'Indian software developer working on code in a clean, modest office workspace'
  },
  tax: {
    id: 'tax-compliance',
    number: 'Division 02',
    title: 'Tax, Accounting & Business Compliance',
    shortHeading: 'Practical Assistance with Taxes, Registrations & Accounts',
    description: 'We help small businesses, shops, startups, and individuals with GST, income tax, accounting ledgers, Udyam, FSSAI, and business registrations in simple English.',
    ctaText: 'Explore Tax & Compliance',
    link: '/services/tax-compliance',
    image: gstFilingImg,
    imageAlt: 'Indian tax advisor reviewing GST tax invoices and accounting records at an office desk'
  }
};
