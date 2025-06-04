
import React from 'react';
import { Zap, Target, TrendingUp, BarChart3 } from 'lucide-react';

const SolutionBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Boost Efficiency",
      description: "Automate repetitive tasks and focus on strategy."
    },
    {
      icon: Target,
      title: "Maintain Consistency",
      description: "On‑brand messaging across all channels."
    },
    {
      icon: TrendingUp,
      title: "Scale Easily",
      description: "Expand your marketing output without hiring more staff."
    },
    {
      icon: BarChart3,
      title: "Data‑Driven Growth",
      description: "Built‑in analytics highlight areas for improvement."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(139,92,246,0.07),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Workflow</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass p-8 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass p-8 rounded-lg border border-white/10 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-300">
              Mark avatar pointing to an upward-trending bar chart projected behind him—highlighting growth and ROI driven by the solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBenefits;
