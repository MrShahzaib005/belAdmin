import React from 'react';
import { Shield } from "lucide-react";

export function Navigation({ currentPage, onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container-fluid container-lg">
        <button 
          onClick={() => onNavigate('home')}
          className="navbar-brand d-flex align-items-center gap-2 border-0 bg-transparent"
        >
          <Shield className="text-primary-custom" size={32} />
          <span className="fs-4 text-primary-custom fw-medium">BelAdmin Partners</span>
        </button>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
            <li className="nav-item">
              <button
                onClick={() => onNavigate('home')}
                className={`nav-link border-0 bg-transparent px-3 ${
                  currentPage === 'home' ? 'nav-link-active' : 'text-muted-custom'
                }`}
              >
                Home Page
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => onNavigate('services')}
                className={`nav-link border-0 bg-transparent px-3 ${
                  currentPage === 'services' ? 'nav-link-active' : 'text-muted-custom'
                }`}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => onNavigate('about')}
                className={`nav-link border-0 bg-transparent px-3 ${
                  currentPage === 'about' ? 'nav-link-active' : 'text-muted-custom'
                }`}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => onNavigate('contact')}
                className={`nav-link border-0 bg-transparent px-3 ${
                  currentPage === 'contact' ? 'nav-link-active' : 'text-muted-custom'
                }`}
              >
                Contact Us
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => onNavigate('services')}
                className="btn btn-accent"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}