import { db } from "./db";
import {
  businesses, offices, teamMembers, advantages,
  type Business, type Office, type TeamMember, type Advantage
} from "@shared/schema";
import { sql } from "drizzle-orm";

export interface IStorage {
  getBusinesses(): Promise<Business[]>;
  getOffices(): Promise<Office[]>;
  getTeamMembers(): Promise<TeamMember[]>;
  getAdvantages(): Promise<Advantage[]>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getBusinesses(): Promise<Business[]> {
    return await db.select().from(businesses);
  }

  async getOffices(): Promise<Office[]> {
    return await db.select().from(offices);
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async getAdvantages(): Promise<Advantage[]> {
    return await db.select().from(advantages);
  }

  async seedData(): Promise<void> {
    // Clear existing to re-seed with i18n
    await db.execute(sql`TRUNCATE TABLE businesses, offices, team_members, advantages RESTART IDENTITY`);

    await db.insert(businesses).values([
      {
        titleEn: "Energy Storage Investment",
        titleZh: "储能项目投资",
        descriptionEn: "Focusing on high-quality energy storage assets globally with precise capital allocation.",
        descriptionZh: "专注于全球范围内的优质储能资产投资，通过精准的资本配置推动绿色能源基础设施建设。",
        category: "Investment",
        icon: "BatteryCharging"
      },
      {
        titleEn: "Energy Storage Operation",
        titleZh: "储能项目运营",
        descriptionEn: "Full lifecycle operation management using advanced technology to ensure safety and stability.",
        descriptionZh: "提供全生命周期的储能电站运营管理服务，利用先进技术优化资产效率，确保安全稳定运行。",
        category: "Operation",
        icon: "Settings"
      },
      {
        titleEn: "Power Trading",
        titleZh: "电力交易",
        descriptionEn: "Intelligent trading strategies to optimize asset returns and connect supply with demand.",
        descriptionZh: "利用智能化交易策略参与电力市场，优化能源资产收益，连接发电与用电需求。",
        category: "Trading",
        icon: "Zap"
      },
      {
        titleEn: "Fund Management",
        titleZh: "基金管理",
        descriptionEn: "Professional management of energy industry funds providing steady returns for investors.",
        descriptionZh: "专业的能源产业基金管理，为投资者提供稳健的回报，同时支持清洁能源技术的发展。",
        category: "Fund",
        icon: "PieChart"
      }
    ]);

    await db.insert(offices).values([
      { 
        cityEn: "California", cityZh: "加州", 
        countryEn: "USA", countryZh: "美国", 
        typeEn: "Regional Office", typeZh: "区域办公室",
        coordinates: "[-119.4179, 36.7783]"
      },
      { 
        cityEn: "Hong Kong", cityZh: "香港", 
        countryEn: "China", countryZh: "中国", 
        typeEn: "Regional Office", typeZh: "区域办公室",
        coordinates: "[114.1694, 22.3193]"
      },
      { 
        cityEn: "Shanghai", cityZh: "上海", 
        countryEn: "China", countryZh: "中国", 
        typeEn: "Headquarters", typeZh: "总部",
        coordinates: "[121.4737, 31.2304]"
      },
      { 
        cityEn: "Beijing", cityZh: "北京", 
        countryEn: "China", countryZh: "中国", 
        typeEn: "Regional Office", typeZh: "区域办公室",
        coordinates: "[116.4074, 39.9042]"
      }
    ]);

    await db.insert(teamMembers).values([
      {
        nameEn: "Zhang", nameZh: "张总",
        roleEn: "Managing Partner", roleZh: "管理合伙人",
        titleEn: "Co-Founder", titleZh: "联合创始人",
        bioEn: "20 years of experience in energy investment and asset management.",
        bioZh: "拥有20年能源投资与资产管理经验，曾任职于国际知名投行。",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
      },
      {
        nameEn: "Li", nameZh: "李总",
        roleEn: "Managing Partner", roleZh: "管理合伙人",
        titleEn: "Co-Founder", titleZh: "联合创始人",
        bioEn: "Expert in energy storage technology and power market trading.",
        bioZh: "深耕储能技术与电力市场交易，主导过多个大型储能项目的开发与落地。",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
      },
      {
        nameEn: "Wang", nameZh: "王顾问",
        roleEn: "Senior Advisor", roleZh: "资深顾问",
        titleEn: "Chief Strategic Advisor", titleZh: "首席战略顾问",
        bioEn: "Expert in energy policy and macroeconomics.",
        bioZh: "能源政策与宏观经济专家，为公司战略布局提供前瞻性指导。",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
      },
      {
        nameEn: "Zhao", nameZh: "赵顾问",
        roleEn: "Technical Advisor", roleZh: "技术顾问",
        titleEn: "Chief Technical Advisor", titleZh: "首席技术顾问",
        bioEn: "Authority in energy storage systems engineering.",
        bioZh: "储能系统工程领域的权威专家，拥有多项核心技术专利。",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
      }
    ]);

    await db.insert(advantages).values([
      {
        titleEn: "Global Vision", titleZh: "全球视野",
        descriptionEn: "Layout in key markets capturing energy transition opportunities.",
        descriptionZh: "布局中美核心市场，把握全球能源转型机遇。",
        icon: "Globe"
      },
      {
        titleEn: "Full Value Chain", titleZh: "全产业链能力",
        descriptionEn: "Investment, construction, operation, and trading integration.",
        descriptionZh: "打通投资、建设、运营、交易全环节，实现资产价值最大化。",
        icon: "Layers"
      },
      {
        titleEn: "Expert Team", titleZh: "专业团队",
        descriptionEn: "Top talents in finance, power, and technology.",
        descriptionZh: "汇聚金融、电力、技术领域的顶尖人才，拥有丰富的实战经验。",
        icon: "Users"
      },
      {
        titleEn: "Tech Driven", titleZh: "技术驱动",
        descriptionEn: "Optimizing operations with Big Data and AI.",
        descriptionZh: "运用大数据与AI技术优化电力交易与资产运维。",
        icon: "Cpu"
      }
    ]);
  }
}

export const storage = new DatabaseStorage();
