import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const businesses = pgTable("businesses", {
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleZh: text("title_zh").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionZh: text("description_zh").notNull(),
  category: text("category").notNull(), 
  icon: text("icon").notNull(),
});

export const offices = pgTable("offices", {
  id: serial("id").primaryKey(),
  cityEn: text("city_en").notNull(),
  cityZh: text("city_zh").notNull(),
  countryEn: text("country_en").notNull(),
  countryZh: text("country_zh").notNull(),
  addressEn: text("address_en"),
  addressZh: text("address_zh"),
  typeEn: text("type_en"),
  typeZh: text("type_zh"),
  coordinates: text("coordinates"), // JSON string or comma-separated
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  nameEn: text("name_en").notNull(),
  nameZh: text("name_zh").notNull(),
  roleEn: text("role_en").notNull(),
  roleZh: text("role_zh").notNull(),
  titleEn: text("title_en").notNull(),
  titleZh: text("title_zh").notNull(),
  bioEn: text("bio_en").notNull(),
  bioZh: text("bio_zh").notNull(),
  imageUrl: text("image_url"),
});

export const advantages = pgTable("advantages", {
  id: serial("id").primaryKey(),
  titleEn: text("title_en").notNull(),
  titleZh: text("title_zh").notNull(),
  descriptionEn: text("description_en").notNull(),
  descriptionZh: text("description_zh").notNull(),
  icon: text("icon").notNull(),
});

// === SCHEMAS ===
export const insertBusinessSchema = createInsertSchema(businesses).omit({ id: true });
export const insertOfficeSchema = createInsertSchema(offices).omit({ id: true });
export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({ id: true });
export const insertAdvantageSchema = createInsertSchema(advantages).omit({ id: true });

// === TYPES ===
export type Business = typeof businesses.$inferSelect;
export type Office = typeof offices.$inferSelect;
export type TeamMember = typeof teamMembers.$inferSelect;
export type Advantage = typeof advantages.$inferSelect;
