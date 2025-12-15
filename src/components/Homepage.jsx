import React from 'react';
import { Globe, Shield, FileCheck, ArrowRight, CheckCircle2, Mail, Phone, Lock } from "lucide-react";

export function Homepage({ onNavigate }) {
  const differentiators = [
    {
      icon: Globe,
      title: "Multilingual Mastery",
      description: "Fluent in Dutch, French, and English"
    },
    {
      icon: Shield,
      title: "GDPR & Data Security",
      description: "Compliant, secure, and confidential"
    },
    {
      icon: FileCheck,
      title: "Belgian Business Standards",
      description: "Deep understanding of local regulations"
    }
  ];

  const mainServices = [
    "General administration & email processing",
    "Document preparation & customer follow-up",
    "Payment reminders & order tracking",
    "Accounting preparation support (non-accountant tasks)", // FIXED: Added liability protection
    "Digital folder creation & data input",
    "Optional: Social media & website text management"
  ];

  // IMPROVED: Added icons to make these look like real trust badges
  const trustLogos = [
    { name: "GDPR Compliant", icon: Lock },
    { name: "ISO Certified", icon: Shield },
    { name: "Belgian Standards", icon: FileCheck },
    { name: "Secure Systems", icon: CheckCircle2 }
  ];

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white position-relative overflow-hidden">
        <div className="hero-pattern position-absolute top-0 start-0 w-100 h-100"></div>
        
        <div className="container py-hero position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge-custom d-inline-block mb-4">
                Trusted by Belgian SMEs & Freelancers
              </span>
              <h1 className="display-4 fw-semibold mb-4 lh-base">
                Stop Drowning in Belgian Admin. <span className="text-accent-custom">Seamless, Multilingual Support</span> for Your SME.
              </h1>
              <p className="fs-5 mb-4 opacity-90">
                GDPR-Compliant, Remote-First Administrative Systems to Free Your Focus.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  onClick={() => onNavigate('services')}
                  className="btn btn-accent btn-lg"
                >
                  View Our Structured Service Packages
                  <ArrowRight className="ms-2" size={20} />
                </button>
                <button 
                  onClick={() => onNavigate('about')}
                  className="btn btn-outline-light btn-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="ratio ratio-4x3 rounded shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2NTgwODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital workflow network"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-section bg-light-custom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Why Belgian Businesses Trust Us</h2>
            <p className="text-muted-custom fs-5">
              Professional administrative support built on three essential pillars
            </p>
          </div>
          
          <div className="row g-4">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="col-md-4">
                  <div className="card card-bordered h-100 card-hover">
                    <div className="card-body text-center p-4">
                      <div className="icon-container bg-primary-custom bg-opacity-10 mx-auto mb-4">
                        <Icon className="text-primary-custom" size={32} />
                      </div>
                      <h3 className="h5 mb-3">{item.title}</h3>
                      <p className="text-muted-custom mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof / Trust Section */}
      <section className="py-section bg-white border-top border-bottom">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="card bg-light-custom border p-4">
                <div className="d-flex gap-1 mb-3 star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: '#FFC107' }}>★</span>
                  ))}
                </div>
                <p className="fs-5 mb-4 fst-italic">
                  "BelAdmin Partners transformed our administrative chaos into a streamlined system. Their understanding of Belgian business requirements and multilingual capabilities are exceptional. We can finally focus on growing our business."
                </p>
                <div>
                  <p className="mb-1 fw-semibold">Marc Dubois</p>
                  <p className="text-muted-custom small mb-0">Founder, TechConsult Brussels</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <h3 className="mb-4">Trusted Standards & Compliance</h3>
              <div className="row g-3">
                {trustLogos.map((logo, index) => {
                  const Icon = logo.icon;
                  return (
                    <div key={index} className="col-6">
                      <div className="d-flex align-items-center gap-2 bg-light-custom border rounded p-3 h-100">
                         <Icon className="text-primary-custom flex-shrink-0" size={20} />
                        <span className="text-muted-custom small fw-medium">{logo.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Complete Administrative Support</h2>
              <p className="fs-5 text-muted-custom mb-4">
                From email management to accounting preparation, we handle the administrative tasks that take you away from your core business.
              </p>
              
              <div className="vstack gap-3 mb-4">
                {mainServices.map((service, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={20} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onNavigate('services')}
                className="btn btn-primary btn-lg"
              >
                Explore All Services
                <ArrowRight className="ms-2" size={20} />
              </button>
            </div>
            
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="ratio ratio-3x4 rounded shadow overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552391744-77952f0cd6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2NTgxNjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Organized workspace"
                    className="w-100 h-100 object-fit-cover"
                  />
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
              <h2 className="mb-3">Ready to Streamline Your Admin?</h2>
              <p className="fs-5 mb-4 opacity-90">
                Let's discuss how we can support your business growth with structured, reliable administrative services.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button 
                  onClick={() => onNavigate('services')}
                  className="btn btn-accent btn-lg"
                >
                  View Service Packages
                </button>
                <button 
                   onClick={() => onNavigate('contact')}
                   className="btn btn-outline-light btn-lg"
                >
                  <Mail className="me-2" size={20} />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light-custom border-top py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Shield className="text-primary-custom" size={24} />
                <span className="fs-5 text-primary-custom fw-medium">BelAdmin Partners</span>
              </div>
              <p className="text-muted-custom">
                Professional administrative support for Belgian freelancers and SMEs. Remote-first, multilingual, and GDPR-compliant.
              </p>
            </div>
            
            <div className="col-md-3">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('home')} className="btn btn-link text-muted-custom p-0 text-decoration-none">
                    Home
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('services')} className="btn btn-link text-muted-custom p-0 text-decoration-none">
                    Services
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('about')} className="btn btn-link text-muted-custom p-0 text-decoration-none">
                    About Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-md-3">
              <h5 className="mb-3">Contact</h5>
              <ul className="list-unstyled text-muted-custom">
                <li className="d-flex align-items-center gap-2 mb-2">
                  <Mail size={16} />
                  <span>info@beladmin.be</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Phone size={16} />
                  <span>+32 2 XXX XX XX</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-top mt-4 pt-4 text-center">
            <p className="text-muted-custom small mb-0">
              © 2024 BelAdmin Partners. All rights reserved. | GDPR Compliant | Remote-First Operations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}