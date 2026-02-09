import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.vision": "Vision",
    "nav.business": "Business",
    "nav.locations": "Global Presence",
    "nav.team": "Team",
    "nav.advantages": "Advantages",
    "hero.title": "Powering the Future of Energy",
    "hero.subtitle": "Global Strategic Investment and Operations in Energy Storage and Power Markets.",
    "vision.label": "Company Vision",
    "vision.title": "Sustainable Energy Leadership",
    "vision.desc": "Building a resilient and clean energy infrastructure through global strategic asset management.",
    "team.intro": "Our core team brings together executive-level experience from global leading renewable energy enterprises, financing and structured financial product design expertise from top-tier international investment banks, and investment track records from world-class asset management institutions. We possess first-line industrial project operation capabilities and extensive team management experience. With globalized perspectives, backgrounds, and multinational professional history, our members leverage a premium worldwide resource network for efficient high-quality project acquisition. Defined by professionalism, internationalization, and deep vertical expertise, we are dedicated to the global new energy industrial track. Standing at the forefront of asset management and financial product design, we achieve the professional integration and deep empowerment of industry, technology, and capital.",
    "footer.rights": "All Rights Reserved."
  },
  zh: {
    "nav.vision": "公司愿景",
    "nav.business": "主要业务",
    "nav.locations": "公司分布",
    "nav.team": "团队介绍",
    "nav.advantages": "我们的优势",
    "hero.title": "助力能源未来",
    "hero.subtitle": "全球储能与电力市场的战略投资与运营专家。",
    "vision.label": "公司愿景",
    "vision.title": "可持续能源领导者",
    "vision.desc": "通过全球战略性资产管理，构建稳健且清洁的能源基础设施。",
    "team.intro": "我们的核心团队拥有全球头部新能源企业高管从业经历，国际顶级投资银行的融资与金融结构化产品设计经验，国际一线资产管理机构的投资经验，一线产业项目运营能力，以及多年的团队管理经验。团队成员具备全球化的视野、背景与跨国工作履历，依托遍布全球的优质资源网络高效获取优质项目，始终以职业化、国际化、深度垂直为核心特质，深耕全球新能源产业赛道，立足资产管理与金融产品设计前沿，实现产业、科技与资本的专业融合、深度赋能。",
    "footer.rights": "版权所有。",
    "brand.name": "Gridstone Capital"
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
