
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WaitlistFormData {
  name: string;
  email: string;
  businessType: string;
  businessWebsite: string;
}

export function useWaitlist() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  // Submit only the email initially
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Show the dialog to collect more information
    setShowDialog(true);
  };

  // Submit the full form data
  const handleFormSubmit = (formData: WaitlistFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowDialog(false);
      setEmail('');
      
      toast({
        title: "Congratulations! You're on the waitlist.",
        description: "Check your email for future communications.",
        duration: 5000,
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return {
    email,
    setEmail,
    isSubmitting,
    isSubmitted,
    showDialog,
    setShowDialog,
    handleEmailSubmit,
    handleFormSubmit
  };
}
