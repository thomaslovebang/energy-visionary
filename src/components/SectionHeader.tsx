import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, title, description, centered = false, light = false }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${centered ? "mx-auto text-center" : ""}`}
    >
      <span className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 block ${light ? "text-accent" : "text-accent"}`}>
        {label}
      </span>
      <h2 className={`text-3xl md:text-5xl font-serif font-semibold mb-6 leading-tight ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
