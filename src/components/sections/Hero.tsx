
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Check } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when Mark.AI is ready.",
        duration: 5000,
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-dark bg-grid px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_40%)]"></div>
      
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          Your First <span className="gradient-text">AI Hire</span> is Ready.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-up-delay-1">
          Mark.AI handles the marketing chaos, so you can lead your business.
        </p>
        
        <div className="max-w-md mx-auto animate-fade-up-delay-2">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3" id="waitlist">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit" 
                className="h-12 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          ) : (
            <div className="h-12 flex items-center justify-center space-x-2 bg-green-600/20 text-green-400 rounded-md border border-green-500/30 px-4">
              <Check size={20} />
              <span>You've joined the waitlist!</span>
            </div>
          )}
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-3 text-sm text-gray-400 animate-fade-up-delay-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 border-2 border-gray-900 flex items-center justify-center text-xs"
              >
                {i}
              </div>
            ))}
          </div>
          <span>200+ people on waitlist</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
