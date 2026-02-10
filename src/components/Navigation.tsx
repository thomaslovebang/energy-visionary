import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const links = [
    { href: "/", label: t("nav.vision") },
    { href: "/business", label: t("nav.business") },
    { href: "/locations", label: t("nav.locations") },
    { href: "/team", label: t("nav.team") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border/50 py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="z-50">
            <span className={cn(
              "font-serif text-2xl font-bold tracking-tighter cursor-pointer transition-colors flex items-center gap-2",
              isScrolled || isMobileOpen ? "text-slate-900" : "text-white"
            )}>
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-sm">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2.5 h-2.5 bg-white/40"></div>
                  <div className="w-2.5 h-2.5 bg-white"></div>
                  <div className="w-2.5 h-2.5 bg-white"></div>
                  <div className="w-2.5 h-2.5 bg-white/40"></div>
                </div>
              </div>
              GRIDstone<span className="text-blue-500 font-light">Capital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={cn(
                  "text-sm font-medium uppercase tracking-widest cursor-pointer transition-colors hover:text-accent",
                  location === link.href ? "text-accent" : (isScrolled ? "text-foreground" : "text-slate-200")
                )}>
                  {link.label}
                </span>
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "zh" : "en")}
              className={cn(
                "ml-4 flex items-center gap-2 font-medium transition-colors hover-elevate",
                isScrolled ? "text-foreground" : "text-white hover:text-white"
              )}
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "中文" : "EN"}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col items-center space-y-6"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={cn(
                    "text-2xl font-serif font-medium cursor-pointer",
                    location === link.href ? "text-accent" : "text-foreground"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button
              variant="outline"
              onClick={() => {
                setLanguage(language === "en" ? "zh" : "en");
                setIsMobileOpen(false);
              }}
              className="mt-4 flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "切换至中文" : "Switch to English"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
