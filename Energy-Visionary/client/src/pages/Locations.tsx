import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useOffices } from "@/hooks/use-content";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function Locations() {
  const { language } = useI18n();
  const { data: offices } = useOffices();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <section className="pt-32 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          label={language === "en" ? "Global Reach" : "全球布局"}
          title={language === "en" ? "Strategic Presence" : "公司分布"}
          description={language === "en" ? "Operating across key time zones to ensure market coverage." : "在全球核心市场建立战略布局，确保全时段覆盖。"}
        />
      </section>

      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-xl bg-slate-900/50 border border-white/5 p-4 md:p-8 backdrop-blur-sm">
            <ComposableMap projectionConfig={{ scale: 200 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1e293b"
                      stroke="#334155"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#1e293b", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {offices?.map((office) => (
                <Marker key={office.id} coordinates={office.coordinates}>
                  <g>
                    <motion.circle
                      initial={{ r: 0, opacity: 0 }}
                      animate={{ r: [4, 8, 4], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      fill="#3b82f6"
                    />
                    <circle r={4} fill="#60a5fa" stroke="#fff" strokeWidth={1} />
                  </g>
                  <text
                    textAnchor="middle"
                    y={-15}
                    style={{ fontFamily: "DM Sans", fill: "#e2e8f0", fontSize: "10px", fontWeight: "bold" }}
                  >
                    {office.city}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {offices?.map((office, idx) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <h4 className="text-white font-bold text-lg">{office.city}</h4>
                <p className="text-blue-400 text-sm font-medium">{office.type}</p>
                <p className="text-slate-400 text-xs mt-1">{office.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}