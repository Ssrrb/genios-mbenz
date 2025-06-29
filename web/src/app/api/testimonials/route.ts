import { NextRequest, NextResponse } from 'next/server';
import { createTestimonial, getAllTestimonials } from '@/db/testimonials';

export async function GET() {
  try {
    const testimonials = await getAllTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, text, rating } = body;
    
    // Validate required fields
    if (!userId || !text || rating === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, text, and rating are required' },
        { status: 400 }
      );
    }
    
    // Validate rating range (1-5)
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    const newTestimonial = await createTestimonial(userId, text, rating);
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
