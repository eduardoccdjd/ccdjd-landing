'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types';

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function submitForm(data: ContactFormData) {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }
      
      setSuccess(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    error,
    success,
    submitForm,
  };
} 