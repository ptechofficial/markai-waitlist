
import React from 'react';
import { MessageSquare, Cog, RefreshCw } from 'lucide-react';

const HowMarkWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Conversational Onboarding",
      description: "Tell Mark.ai about your brand, tone, and workflows—no technical setup required.",
      number: "1"
    },
    {
      icon: Cog,
      title: "Automated Execution", 
      description: "Mark.ai drafts posts, manages your calendar, and sends follow‑ups automatically.",
      number: "2"
    },
    {
      icon: RefreshCw,
      title: "Continuous Learning",
      description: "Every feedback loop makes Mark.ai smarter and more aligned with your needs.",
      number: "3"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.07),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your AI Employee in 3 Steps</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  
                  <div className="glass p-8 rounded-lg border border-white/10 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                      <step.icon size={24} className="text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass p-8 rounded-lg border border-white/10 max-w-3xl mx-auto">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-300">
              Timeline of pilot process steps: A simple storyboard of three panels featuring the Mark avatar: (1) chatting via speech bubble, (2) typing at a keyboard, (3) reading feedback on a screen—illustrating the flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMarkWorks;
