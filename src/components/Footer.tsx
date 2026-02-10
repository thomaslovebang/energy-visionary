import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 flex items-center justify-center rounded-sm">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white/40"></div>
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <div className="w-1.5 h-1.5 bg-white/40"></div>
                  </div>
                </div>
                GRIDstone<span className="text-blue-500 font-light">Capital</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Global vision. Local expertise.<br />
              Building the future of energy and finance.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif font-medium mb-4 text-blue-400">{t("nav.business")}</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/business" className="hover:text-white transition-colors">Energy Storage</Link></li>
                <li><Link href="/business" className="hover:text-white transition-colors">Power Trading</Link></li>
                <li><Link href="/business" className="hover:text-white transition-colors">Fund Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-medium mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/team" className="hover:text-white transition-colors">{t("nav.team")}</Link></li>
                <li><Link href="/locations" className="hover:text-white transition-colors">{t("nav.locations")}</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">{t("nav.vision")}</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-serif font-medium mb-4 text-blue-400">Contact</h4>
            <address className="text-sm text-slate-400 not-italic space-y-2">
              <p>Global Strategic Energy Hub</p>
              <p>info@capital.com</p>
            </address>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Capital Holdings. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}