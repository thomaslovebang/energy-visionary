import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Users, Globe, Target, Shield } from "lucide-react";

export default function Team() {
  const { language, t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="pt-32 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label={language === "en" ? "Our Strength" : "我们的实力"}
          title={language === "en" ? "Leadership & Team" : "公司团队介绍"}
          description={language === "en" ? "A global team with deep vertical expertise in energy and finance." : "具备全球视野与深度垂直行业经验的专业团队。"}
        />
      </section>

      <section className="pb-32 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-slate-50 border border-slate-200 p-8 md:p-16 shadow-sm relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 -mr-16 -mt-16 rounded-full opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 -ml-12 -mb-12 rounded-full opacity-30" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-blue-600">
                {t("team.intro")}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-slate-200">
                {[
                  { icon: Globe, label: language === "en" ? "Global Vision" : "全球视野" },
                  { icon: Target, label: language === "en" ? "Deep Vertical" : "深度垂直" },
                  { icon: Shield, label: language === "en" ? "Professionalism" : "职业化" },
                  { icon: Users, label: language === "en" ? "Expert Team" : "顶尖人才" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}