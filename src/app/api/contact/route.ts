import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const data: ContactFormData = await request.json();

    // Validate data
    if (!data.name || !data.email || !data.phone || !data.type) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get API configuration
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_KEY;

    // For development, mock successful response if API_URL is not configured
    if (!apiUrl && process.env.NODE_ENV === 'development') {
      console.log('Using mock response (API_URL not configured)');
      return NextResponse.json({ message: 'Form submitted successfully' });
    }

    if (!apiUrl) {
      return NextResponse.json(
        { message: 'API not configured' },
        { status: 500 }
      );
    }

    // Forward to external API
    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey && { 'Authorization': `Bearer ${apiKey}` }),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: error.message || 'Failed to submit form' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 