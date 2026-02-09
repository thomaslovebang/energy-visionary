import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useBusinesses } from "@/hooks/use-content";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Battery, Zap, Briefcase, LineChart, Loader2 } from "lucide-react";

export default function Business() {
  const { language } = useI18n();
  const { data: businesses, isLoading } = useBusinesses();

  const iconMap: Record<string, any> = {
    BatteryCharging: Battery,
    Settings: Zap,
    Zap: LineChart,
    PieChart: Briefcase
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <section className="pt-32 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label={language === "en" ? "Our Expertise" : "我们的专业领域"}
          title={language === "en" ? "Business Sectors" : "主要业务"}
          description={language === "en" ? "Comprehensive energy solutions from investment to intelligent trading." : "从投资到智能交易的全方位能源解决方案。"}
        />
      </section>

      <section className="pb-24 container mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {businesses?.map((biz, idx) => {
              const Icon = iconMap[biz.icon] || Battery;
              return (
                <motion.div
                  key={biz.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white p-10 border border-slate-200 hover:border-blue-500 transition-all duration-500"
                >
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-3">{biz.category}</span>
                      <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{biz.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{biz.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}