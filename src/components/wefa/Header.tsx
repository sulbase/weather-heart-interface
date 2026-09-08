import { useState } from "react";
import { ChevronDown, Search, Menu, X, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products", caret: true },
  { label: "Projects", href: "#projects" },
  { label: "Downloads", href: "#downloads" },
  { label: "About wefatherm", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 lg:px-10">
        <a href="#top" aria-label="wefatherm home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1 text-[0.95rem] text-foreground transition-colors hover:text-primary"
            >
              {item.label}
              {item.caret && <ChevronDown className="h-4 w-4 text-primary" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 xl:flex">
            <a href="#top" className="text-sm text-muted-foreground hover:text-primary">
              EN
            </a>
            <a href="#top" className="text-sm text-muted-foreground hover:text-primary">
              中文
            </a>

            <a href="#contact" aria-label="LinkedIn" className="text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" aria-label="Instagram" className="text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-primary px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Search <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="text-primary lg:hidden"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-5 rounded-md bg-background p-5 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
