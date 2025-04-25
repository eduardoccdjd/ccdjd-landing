'use server';

import { ContactFormData } from '@/types';

type FormResponse = {
  success: boolean;
  message: string;
};

export async function submitContactForm(data: ContactFormData): Promise<FormResponse> {
  try {
    // Validate data
    if (!data.name || !data.email || !data.phone || !data.type) {
      return {
        success: false,
        message: 'Missing required fields'
      };
    }

    // Get API configuration (secure server-side access)
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_KEY;

    if (!apiUrl) {
      return {
        success: false,
        message: 'API not configured'
      };
    }

    // Forward to external API
    const response = await fetch(`${apiUrl}/interested/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey && { 'x-api-key': apiKey }),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return {
        success: false,
        message: error.message || 'Failed to submit form'
      };
    }

    return {
      success: true,
      message: 'Form submitted successfully'
    };
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return {
      success: false,
      message: 'An unexpected error occurred'
    };
  }
} 