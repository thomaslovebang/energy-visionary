import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  await storage.seedData();

  app.get(api.content.businesses.path, async (req, res) => {
    const lang = (req.query.lang as string) || "en";
    const data = await storage.getBusinesses();
    const localized = data.map(item => ({
      id: item.id,
      title: lang === "zh" ? item.titleZh : item.titleEn,
      description: lang === "zh" ? item.descriptionZh : item.descriptionEn,
      category: item.category,
      icon: item.icon
    }));
    res.json(localized);
  });

  app.get(api.content.offices.path, async (req, res) => {
    const lang = (req.query.lang as string) || "en";
    const data = await storage.getOffices();
    const localized = data.map(item => ({
      id: item.id,
      city: lang === "zh" ? item.cityZh : item.cityEn,
      country: lang === "zh" ? item.countryZh : item.countryEn,
      type: lang === "zh" ? item.typeZh : item.typeEn,
      address: lang === "zh" ? item.addressZh : item.addressEn,
      coordinates: item.coordinates ? JSON.parse(item.coordinates) : undefined
    }));
    res.json(localized);
  });

  app.get(api.content.team.path, async (req, res) => {
    const lang = (req.query.lang as string) || "en";
    const data = await storage.getTeamMembers();
    const localized = data.map(item => ({
      id: item.id,
      name: lang === "zh" ? item.nameZh : item.nameEn,
      role: lang === "zh" ? item.roleZh : item.roleEn,
      title: lang === "zh" ? item.titleZh : item.titleEn,
      bio: lang === "zh" ? item.bioZh : item.bioEn,
      imageUrl: item.imageUrl
    }));
    res.json(localized);
  });

  app.get(api.content.advantages.path, async (req, res) => {
    const lang = (req.query.lang as string) || "en";
    const data = await storage.getAdvantages();
    const localized = data.map(item => ({
      id: item.id,
      title: lang === "zh" ? item.titleZh : item.titleEn,
      description: lang === "zh" ? item.descriptionZh : item.descriptionEn,
      icon: item.icon
    }));
    res.json(localized);
  });

  return httpServer;
}
