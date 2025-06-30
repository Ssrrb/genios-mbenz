import { drizzle } from 'drizzle-orm/neon-http';


// Ensure DATABASE_URL exists with a default if not provided
const connectionString = process.env.DATABASE_URL || '';

// Type for proper Drizzle setup
export const db = drizzle(connectionString);
