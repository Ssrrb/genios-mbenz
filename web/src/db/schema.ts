import { integer, pgTable, varchar, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const user = pgTable('User', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  email: varchar('email', { length: 64 }).notNull(),
  password: varchar('password', { length: 64 }),
});

export const testimonialsTable = pgTable("testimonials", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  text: text().notNull(),
  rating: integer().notNull(),
  likes: integer().default(0),
  dislikes: integer().default(0),
  createdAt: timestamp().defaultNow().notNull(),
});
