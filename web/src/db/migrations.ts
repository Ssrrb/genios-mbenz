import { db } from "./index";
import { testimonialsTable } from "./schema";

async function createTestimonialsTable() {
  try {
    console.log("Creating testimonials table...");
    await db.execute(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        rating INTEGER NOT NULL,
        likes INTEGER DEFAULT 0,
        dislikes INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      );
    `);
    console.log("Testimonials table created successfully!");
  } catch (error) {
    console.error("Error creating testimonials table:", error);
    throw error;
  }
}

export async function runMigrations() {
  await createTestimonialsTable();
}
