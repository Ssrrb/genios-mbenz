import { NextResponse } from 'next/server';
import { updateTestimonialLikes } from '@/db/testimonials';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const testimonialId = parseInt(id, 10);
    if (isNaN(testimonialId)) {
      return NextResponse.json({ error: 'Invalid testimonial ID' }, { status: 400 });
    }

    const body = await request.json();
    const { isLike } = body;

    if (typeof isLike !== 'boolean') {
      return NextResponse.json(
        { error: 'isLike must be a boolean' },
        { status: 400 }
      );
    }

    const updatedTestimonial = await updateTestimonialLikes(testimonialId, isLike);

    if (!updatedTestimonial) {
      return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
    }

    return NextResponse.json(updatedTestimonial[0]);
  } catch (error) {
    console.error('Error updating testimonial likes:', error);
    return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
  }
}
