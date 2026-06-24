import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03060f] border-t border-[#1e2d47]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <span className="font-semibold text-white text-lg">
                Quarks<span className="text-blue-500">Code</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Custom software solutions for businesses and government agencies.
              We automate processes and build platforms that create measurable value.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={13} className="text-blue-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <a href="tel:+996770000833" className="block text-slate-400 hover:text-blue-400 transition-colors">
                    +996 770 000 833
                  </a>
                  <a href="tel:+996559033375" className="block text-slate-400 hover:text-blue-400 transition-colors">
                    +996 559 033 375
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-blue-500 shrink-0" />
                <a
                  href="mailto:info@quarks.com"
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  info@quarks.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Асанбай 40, Bishkek</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2d47] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Quarks Code. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Enterprise software · Government systems · Process automation
          </p>
        </div>
      </div>
    </footer>
  );
}
