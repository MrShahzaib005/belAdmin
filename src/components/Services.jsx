import React from 'react';
import { FileText, Calculator, FolderOpen, Globe, CheckCircle2, ArrowRight, Mail } from "lucide-react";

export function Services({ onNavigate }) {
  const serviceCategories = [
    {
      icon: FileText,
      category: "Core Administration",
      color: "text-primary-custom",
      bgColor: "bg-primary-custom",
      activities: [
        "General administration",
        "Email processing",
        "Document preparation",
        "Follow-up of customers and suppliers",
        "Payment reminders",
        "Order tracking"
      ]
    },
    {
      icon: Calculator,
      category: "Financial Support",
      color: "text-accent-custom",
      bgColor: "bg-accent-custom",
      activities: [
        "Accounting preparation (non-accountant tasks)",
        "Invoice organization and tracking",
        "Expense documentation",
        "Financial document filing"
      ]
    },
    {
      icon: FolderOpen,
      category: "Digital Organization",
      color: "text-primary-custom",
      bgColor: "bg-primary-custom",
      activities: [
        "Create digital folders",
        "Data input and management",
        "File organization systems",
        "Document digitization support"
      ]
    },
    {
      icon: Globe,
      category: "Optional Services",
      color: "text-accent-custom",
      bgColor: "bg-accent-custom",
      activities: [
        "Help with social media content",
        "Basic text management for websites",
        "Content coordination",
        "Communication support"
      ]
    }
  ];

  const servicePackages = [
    {
      name: "Essential",
      price: "Starting at €XXX/month",
      description: "Perfect for freelancers and micro-enterprises",
      features: [
        "Up to 20 hours/month",
        "Email & document management",
        "Customer/supplier follow-up",
        "Basic digital organization",
        "Multilingual support (NL/FR/EN)"
      ]
    },
    {
      name: "Professional",
      price: "Starting at €XXX/month",
      description: "Ideal for growing SMEs",
      features: [
        "Up to 40 hours/month",
        "All Essential features",
        "Accounting preparation support",
        "Advanced digital systems",
        "Priority response time",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "Comprehensive support for established businesses",
      features: [
        "Flexible hours",
        "All Professional features",
        "Optional social media support",
        "Website text management",
        "Custom workflow integration",
        "Quarterly strategic reviews"
      ]
    }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We analyze your administrative needs and pain points"
    },
    {
      number: "02",
      title: "System Setup",
      description: "Create structured workflows and secure access protocols"
    },
    {
      number: "03",
      title: "Seamless Execution",
      description: "Handle tasks efficiently with regular quality checks"
    },
    {
      number: "04",
      title: "Continuous Improvement",
      description: "Regular reviews and optimization of processes"
    }
  ];

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <span className="badge-custom d-inline-block mb-4">
                Transparent Pricing • Defined Scope
              </span>
              <h1 className="display-4 fw-semibold mb-4">
                Structured Support. <span className="text-accent-custom">Consistent Results.</span>
              </h1>
              <p className="fs-5 opacity-90">
                Clear service definitions, transparent processes, and measurable outcomes for your Belgian business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Comprehensive Service Coverage</h2>
            <p className="fs-5 text-muted-custom">
              Every service is executed with precision, confidentiality, and Belgian business standards
            </p>
          </div>

          <div className="row g-4">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="col-md-6">
                  <div className="card card-bordered h-100 card-hover">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <div className={`icon-container-sm ${category.bgColor} bg-opacity-10`}>
                          <Icon className={category.color} size={24} />
                        </div>
                        <h3 className="h5 mb-0">{category.category}</h3>
                      </div>
                      <ul className="list-unstyled vstack gap-3">
                        {category.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="d-flex align-items-start gap-3">
                            <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={20} />
                            <span className="text-muted-custom">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-section bg-light-custom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Choose Your Service Package</h2>
            <p className="fs-5 text-muted-custom">
              Flexible packages designed to scale with your business needs
            </p>
          </div>

          <div className="row g-4">
            {servicePackages.map((pkg, index) => (
              <div key={index} className="col-lg-4">
                <div className={`card h-100 position-relative ${pkg.popular ? 'border-primary-custom border-2 shadow' : ''}`}>
                  {pkg.popular && (
                    <span className="badge-popular">Most Popular</span>
                  )}
                  <div className="card-body text-center p-4">
                    <h3 className="h4 mb-2">{pkg.name}</h3>
                    <p className="fs-4 text-primary-custom mb-2">{pkg.price}</p>
                    <p className="text-muted-custom small mb-4">{pkg.description}</p>
                    <ul className="list-unstyled text-start vstack gap-3 mb-4">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="d-flex align-items-start gap-2">
                          <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={20} />
                          <span className="small">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`btn w-100 ${pkg.popular ? 'btn-accent' : 'btn-primary'}`}>
                      Get Started
                      <ArrowRight className="ms-2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Our Structured Workflow</h2>
              <p className="fs-5 text-muted-custom mb-4">
                A proven process that ensures consistency, quality, and complete transparency at every step.
              </p>

              <div className="vstack gap-4">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="d-flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="workflow-number">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h4 className="h6 mb-2">{step.title}</h4>
                      <p className="text-muted-custom mb-0">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <div className="ratio ratio-3x4 rounded shadow overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGF0YSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2NTgxNjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital security and workflow"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Guarantees */}
      <section className="py-5 bg-primary-custom text-white">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="stat-number">100%</div>
              <p className="mb-0">GDPR Compliant</p>
            </div>
            <div className="col-md-3">
              <div className="stat-number">3</div>
              <p className="mb-0">Languages Supported</p>
            </div>
            <div className="col-md-3">
              <div className="stat-number">24h</div>
              <p className="mb-0">Response Time</p>
            </div>
            <div className="col-md-3">
              <div className="stat-number">100%</div>
              <p className="mb-0">Remote Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-light-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-3">Ready to Get Started?</h2>
              <p className="fs-5 text-muted-custom mb-4">
                Schedule a consultation to discuss your administrative needs and discover the right package for your business.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-accent btn-lg">
                  <Mail className="me-2" size={20} />
                  Schedule Consultation
                </button>
                <button 
                  onClick={() => onNavigate('about')}
                  className="btn btn-outline-primary btn-lg"
                >
                  Learn About Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}