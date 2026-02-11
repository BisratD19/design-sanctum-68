import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-wider mb-4">ATELIER</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Architecture & Interior Design Studio crafting refined spaces for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/40">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-primary-foreground/40">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>
                <a href="mailto:hello@atelier-studio.com" className="hover:text-primary-foreground transition-colors">
                  hello@atelier-studio.com
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>123 Design District, Los Angeles, CA</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/30 tracking-wider">
            © {new Date().getFullYear()} ATELIER Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
