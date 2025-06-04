
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import WhatIsMarkAI from '@/components/sections/WhatIsMarkAI';
import PilotProgram from '@/components/sections/PilotProgram';
import HowMarkWorks from '@/components/sections/HowMarkWorks';
import WhoShouldUse from '@/components/sections/WhoShouldUse';
import SolutionBenefits from '@/components/sections/SolutionBenefits';
import PilotDetails from '@/components/sections/PilotDetails';
import ChatDemo from '@/components/sections/ChatDemo';
import Roadmap from '@/components/sections/Roadmap';
import PilotApplication from '@/components/sections/PilotApplication';
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
      <WhatIsMarkAI />
      <PilotProgram />
      <HowMarkWorks />
      <WhoShouldUse />
      <SolutionBenefits />
      <PilotDetails />
      <ChatDemo />
      <Roadmap />
      <PilotApplication />
      <Footer />
    </div>
  );
};

export default Index;
