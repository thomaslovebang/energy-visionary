import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowRight, Globe, Battery, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070" 
            alt="New Energy and Investment" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Gridstone <span className="text-blue-500 font-light">Capital</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/business">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none px-8 py-6 text-lg rounded-none">
                  {t("nav.business")} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">
                {t("vision.label")}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                {t("vision.title")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-6 py-2">
                {t("vision.desc")}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Globe, label: "Global Reach" },
                { icon: Battery, label: "Energy Storage" },
                { icon: TrendingUp, label: "Strategic Value" },
                { icon: ShieldCheck, label: "Reliability" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <span className="font-bold text-slate-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}