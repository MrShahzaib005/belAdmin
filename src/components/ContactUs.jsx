import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Shield } from "lucide-react";

export function ContactUs({ onNavigate }) {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@beladmin.be",
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+32 2 XXX XX XX",
      description: "Mon-Fri, 9:00 AM - 6:00 PM CET"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Brussels, Belgium",
      description: "Remote-first operations"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM CET"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <span className="badge-custom d-inline-block mb-4">
                Get in Touch • 24h Response Time
              </span>
              <h1 className="display-4 fw-semibold mb-4">
                Let's Discuss Your <span className="text-accent-custom">Administrative Needs</span>
              </h1>
              <p className="fs-5 opacity-90">
                Schedule a free consultation to learn how we can streamline your Belgian business administration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg" 
                          id="firstName" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg" 
                          id="lastName" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          className="form-control form-control-lg" 
                          id="email" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control form-control-lg" 
                          id="phone" 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="company" className="form-label">Company Name</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg" 
                          id="company" 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="businessType" className="form-label">Business Type *</label>
                        <select className="form-select form-select-lg" id="businessType" required>
                          <option value="">Select your business type...</option>
                          <option value="freelancer">Freelancer</option>
                          <option value="micro">Micro-Enterprise (1-10 employees)</option>
                          <option value="sme">SME (11-50 employees)</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="service" className="form-label">Service Interest *</label>
                        <select className="form-select form-select-lg" id="service" required>
                          <option value="">Select a service...</option>
                          <option value="essential">Essential Package</option>
                          <option value="professional">Professional Package</option>
                          <option value="enterprise">Enterprise Package</option>
                          <option value="custom">Custom Solution</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea 
                          className="form-control form-control-lg" 
                          id="message" 
                          rows={5}
                          placeholder="Tell us about your administrative challenges and needs..."
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="gdprConsent" 
                            required 
                          />
                          <label className="form-check-label text-muted-custom small" htmlFor="gdprConsent">
                            I agree to the processing of my personal data in accordance with GDPR regulations. 
                            Your information will be used solely to respond to your inquiry.
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-accent btn-lg w-100">
                          <Send className="me-2" size={20} />
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="sticky-top" style={{top: '100px'}}>
                <h3 className="mb-4">Contact Information</h3>
                <div className="vstack gap-4 mb-5">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="d-flex align-items-start gap-3">
                        <div className="icon-container-sm bg-primary-custom bg-opacity-10 flex-shrink-0">
                          <Icon className="text-primary-custom" size={20} />
                        </div>
                        <div>
                          <h5 className="h6 mb-1">{info.title}</h5>
                          <p className="mb-1">{info.content}</p>
                          <p className="text-muted-custom small mb-0">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* GDPR Notice */}
                <div className="card bg-light-custom border-0">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <Shield className="text-primary-custom flex-shrink-0" size={24} />
                      <h5 className="h6 mb-0">Your Privacy Matters</h5>
                    </div>
                    <p className="text-muted-custom small mb-0">
                      All communications are encrypted and GDPR-compliant. We never share your 
                      information with third parties. Your data is stored securely and used only 
                      for the purpose of responding to your inquiry.
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-4">
                  <h5 className="h6 mb-3">Not ready to contact us?</h5>
                  <div className="d-grid gap-2">
                    <button 
                      onClick={() => onNavigate('services')}
                      className="btn btn-outline-primary text-start"
                    >
                      View Our Service Packages
                    </button>
                    <button 
                      onClick={() => onNavigate('about')}
                      className="btn btn-outline-primary text-start"
                    >
                      Learn More About Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-light-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="mb-3">Frequently Asked Questions</h2>
                <p className="text-muted-custom">
                  Quick answers to common questions about our services
                </p>
              </div>

              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq1"
                    >
                      How quickly can we get started?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Most clients are onboarded within 5-7 business days. We'll schedule an initial consultation, 
                      set up secure access to your systems, and establish your customized workflow. For urgent needs, 
                      expedited onboarding is available.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq2"
                    >
                      What languages do you support?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We provide full support in Dutch, French, and English—essential for Belgian business operations. 
                      All team members are fluent in these languages, ensuring seamless communication with your customers, 
                      suppliers, and government entities.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq3"
                    >
                      Is my data secure?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Absolutely. We use encrypted cloud systems, follow strict GDPR protocols, and maintain comprehensive 
                      confidentiality agreements. All team members are trained in data security best practices, and we 
                      conduct regular security audits.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq4"
                    >
                      Can I change my package later?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, our packages are designed to scale with your business. You can upgrade or adjust your service 
                      level at any time with 30 days' notice. We'll work with you to ensure a smooth transition.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq5"
                    >
                      Do you work with accountants?
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! We handle the administrative preparation work (organizing invoices, documenting expenses, etc.) 
                      and coordinate seamlessly with your accountant. This division ensures compliance while reducing 
                      your accounting costs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-primary-custom text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-3">Prefer a Phone Call?</h2>
              <p className="fs-5 mb-4 opacity-90">
                Schedule a free 30-minute consultation call to discuss your specific needs.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="tel:+3222XXXXXX" className="btn btn-accent btn-lg">
                  <Phone className="me-2" size={20} />
                  Call Us Now
                </a>
                <button 
                  onClick={() => onNavigate('services')}
                  className="btn btn-outline-light btn-lg"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}