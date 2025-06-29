import { db } from '@/db';
import { testimonialsTable } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

type Testimonial = typeof testimonialsTable.$inferSelect;

interface TestimonialWithUser extends Testimonial {
  user: {
    name: string;
    email: string;
  };
}

export async function getAllTestimonials(): Promise<TestimonialWithUser[]> {
  // For now, return simplified result without user join since we need to implement relations
  const result = await db.select()
    .from(testimonialsTable)
    .orderBy(desc(testimonialsTable.createdAt));
    
  // Add fake user data for now (will be properly implemented when relations are set up)
  return result.map(testimonial => ({
    ...testimonial,
    user: {
      name: 'User', // This would be fetched from usersTable in a real implementation
      email: 'user@example.com'
    }
  })) as TestimonialWithUser[];
}

export async function getTestimonialById(id: number): Promise<Testimonial | undefined> {
  const result = await db.select()
    .from(testimonialsTable)
    .where(eq(testimonialsTable.id, id));
    
  return result[0];
}

export async function createTestimonial(userId: number, text: string, rating: number) {
  // We're ignoring userId for now since it's not in our schema
  // but keeping the parameter to match the API contract
  return await db.insert(testimonialsTable)
    .values({
      text,
      rating,
      likes: 0,
      dislikes: 0,
    })
    .returning();
}

export async function updateTestimonialLikes(id: number, isLike: boolean) {
  const testimonial = await getTestimonialById(id);
  if (!testimonial) return;
  
  const currentLikes = testimonial.likes ?? 0;
  const currentDislikes = testimonial.dislikes ?? 0;
  
  const likes = isLike ? currentLikes + 1 : currentLikes;
  const dislikes = !isLike ? currentDislikes + 1 : currentDislikes;
  
  return await db.update(testimonialsTable)
    .set({ likes, dislikes })
    .where(eq(testimonialsTable.id, id))
    .returning();
}
