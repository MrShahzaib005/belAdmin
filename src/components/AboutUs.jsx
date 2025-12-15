import React from 'react';
import { Target, Eye, Shield, Users, ArrowRight, CheckCircle2, Mail, Globe, Lock, Clock } from "lucide-react";

export function AboutUs({ onNavigate }) {
  const coreValues = [
    {
      icon: Shield,
      title: "Trust & Confidentiality",
      description: "Your data security and business confidentiality are our top priorities, backed by GDPR compliance."
    },
    {
      icon: Target,
      title: "Precision & Structure",
      description: "Every task follows established SOPs and quality checks to ensure consistent, reliable results."
    },
    {
      icon: Globe,
      title: "Multilingual Excellence",
      description: "Native fluency in Dutch, French, and English enables seamless communication across Belgium."
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We view ourselves as an extension of your team, not just a service provider."
    }
  ];

  const workflowSteps = [
    {
      title: "Client Request",
      description: "Secure submission via portal",
      icon: Mail
    },
    {
      title: "Task Management",
      description: "Assigned & tracked in system",
      icon: CheckCircle2
    },
    {
      title: "Structured SOP",
      description: "Executed with quality protocols",
      icon: Target
    },
    {
      title: "Deliverable",
      description: "Completed & documented",
      icon: ArrowRight
    },
    {
      title: "Quality Check",
      description: "Verified & client approved",
      icon: Shield
    }
  ];

  const teamMembers = [
    {
      role: "Administrative Operations",
      expertise: "Email management, document preparation, supplier coordination",
      languages: "NL • FR • EN"
    },
    {
      role: "Financial Support",
      expertise: "Accounting prep, invoice tracking, expense documentation",
      languages: "NL • FR • EN"
    },
    {
      role: "Digital Systems",
      expertise: "Data organization, digital filing, workflow optimization",
      languages: "NL • FR • EN"
    },
    {
      role: "Client Relations",
      expertise: "Onboarding, strategy, quality assurance",
      languages: "NL • FR • EN"
    }
  ];

  const operationalPrinciples = [
    {
      icon: Lock,
      title: "GDPR-First Security",
      description: "All data handling follows strict European privacy regulations"
    },
    {
      icon: Clock,
      title: "Remote Efficiency",
      description: "Cloud-based systems enable seamless collaboration from anywhere"
    },
    {
      icon: Target,
      title: "SOP-Driven Quality",
      description: "Documented procedures ensure consistent execution"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Fixed team members who learn your business deeply"
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
                Remote-First • GDPR-Compliant • Belgian Standards
              </span>
              <h1 className="display-4 fw-semibold mb-4">
                Your Partners in <span className="text-accent-custom">Productivity.</span>
              </h1>
              <p className="fs-5 opacity-90">
                We believe in long-term relationships built on trust, consistency, and professional excellence. Your success is our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="mb-5">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Target className="text-primary-custom" size={32} />
                  <h2 className="mb-0">Our Mission</h2>
                </div>
                <p className="fs-5 text-muted-custom">
                  To free Belgian entrepreneurs and SMEs from administrative burden by providing structured, multilingual, and GDPR-compliant support that enables them to focus on their core business and strategic growth.
                </p>
              </div>

              <div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Eye className="text-accent-custom" size={32} />
                  <h2 className="mb-0">Our Vision</h2>
                </div>
                <p className="fs-5 text-muted-custom">
                  To become the most trusted remote administrative partner for Belgian businesses, known for our precision, confidentiality, and deep understanding of local business requirements.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <div className="ratio ratio-1x1 rounded shadow overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552391744-77952f0cd6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2NTgxNjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional workspace"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section bg-light-custom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">What We Stand For</h2>
            <p className="fs-5 text-muted-custom">
              Our core values guide every interaction and every task we complete
            </p>
          </div>

          <div className="row g-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card card-bordered text-center h-100 card-hover">
                    <div className="card-body p-4">
                      <div className="icon-container bg-primary-custom bg-opacity-10 mx-auto mb-3">
                        <Icon className="text-primary-custom" size={28} />
                      </div>
                      <h3 className="h6 mb-3">{value.title}</h3>
                      <p className="text-muted-custom small mb-0">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Model */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">Remote-First, Digital Workflow</h2>
            <p className="fs-5 text-muted-custom">
              Our structured operational model ensures transparency, security, and efficiency at every stage
            </p>
          </div>

          {/* Workflow Visualization */}
          <div className="bg-light-custom p-5 rounded mb-5">
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="d-flex align-items-center gap-3">
                    <div className="text-center">
                      <div className="icon-container-lg bg-primary-custom rounded shadow mx-auto mb-2">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div style={{ maxWidth: '140px' }}>
                        <p className="small fw-semibold mb-1">{step.title}</p>
                        <p className="text-muted-custom" style={{ fontSize: '0.75rem' }}>{step.description}</p>
                      </div>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight className="text-primary-custom d-none d-md-block" size={24} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Operational Principles */}
          <div className="row g-4">
            {operationalPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="bg-light-custom p-4 rounded border h-100">
                    <Icon className="text-accent-custom mb-3" size={32} />
                    <h4 className="h6 mb-2">{principle.title}</h4>
                    <p className="text-muted-custom small mb-0">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-section bg-light-custom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="mb-3">The Partners</h2>
            <p className="fs-5 text-muted-custom">
              Experienced professionals with defined roles and collective expertise in Belgian business administration
            </p>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6">
                <div className="card card-bordered h-100 card-hover">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="icon-container bg-primary-custom bg-opacity-10 flex-shrink-0">
                        <Users className="text-primary-custom" size={32} />
                      </div>
                      <div className="flex-fill">
                        <h3 className="h5 mb-2">{member.role}</h3>
                        <p className="text-muted-custom mb-3">{member.expertise}</p>
                        <span className="badge bg-primary-custom bg-opacity-10 text-primary-custom">
                          {member.languages}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Remote Works */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="ratio ratio-4x3 rounded shadow overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGF0YSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2NTgxNjEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital security"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="mb-4">Why Remote-First Works</h2>
              <p className="fs-5 text-muted-custom mb-4">
                Our digital-first approach isn't just convenient—it's more secure, efficient, and cost-effective than traditional office-based administration.
              </p>

              <div className="vstack gap-4">
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Enhanced Security</h4>
                    <p className="text-muted-custom mb-0">Encrypted cloud systems provide better data protection than physical documents</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Full Transparency</h4>
                    <p className="text-muted-custom mb-0">Real-time task tracking and documentation you can access anytime</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Cost Efficiency</h4>
                    <p className="text-muted-custom mb-0">No overhead costs—you pay only for productive administrative work</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3">
                  <CheckCircle2 className="text-primary-custom flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Geographic Flexibility</h4>
                    <p className="text-muted-custom mb-0">Work with the best talent regardless of physical location</p>
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
              <h2 className="mb-3">Ready to Partner with Us?</h2>
              <p className="fs-5 mb-4 opacity-90">
                Let's discuss how our structured approach can support your business growth.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-accent btn-lg">
                  <Mail className="me-2" size={20} />
                  Contact Us Today
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="btn btn-outline-light btn-lg"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}