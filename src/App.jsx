import React, { useState, useEffect } from "react";
// Assuming these component files are correctly defined and imported
import { Navigation } from "./components/Navigation";
import { Homepage } from "./components/Homepage";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Load Bootstrap JavaScript
    const script = document.createElement('script');
    // Using async = true is generally better for external scripts
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleNavigate = (page) => {
    setCurrentPage(page);
    // Smoothly scroll to the top of the page on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-vh-100">
      {/* The Navigation component receives the current page state and the navigation handler */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Conditional rendering based on the currentPage state */}
      {/* Each page component receives the navigation handler as a prop */}
      {currentPage === 'home' && <Homepage onNavigate={handleNavigate} />}
      {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutUs onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactUs onNavigate={handleNavigate} />}
      
      {/* Note: The Footer component (if used) would typically be rendered below the conditional content */}
    </div>
  );
}