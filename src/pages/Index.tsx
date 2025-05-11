
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import AiTeammate from '@/components/sections/AiTeammate';
import Benefits from '@/components/sections/Benefits';
import SocialProof from '@/components/sections/SocialProof';
import Roadmap from '@/components/sections/Roadmap';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AiTeammate />
      <Benefits />
      <SocialProof />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
