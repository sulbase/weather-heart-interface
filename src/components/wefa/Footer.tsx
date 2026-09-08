import { Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Wefatherm GmbH · Specialist Water Supply Systems · Made in Germany
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
          <a href="#solutions" className="hover:text-primary">
            Solutions
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#downloads" className="hover:text-primary">
            Downloads
          </a>
          <a href="#about" className="hover:text-primary">
            About wefatherm
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" aria-label="LinkedIn" className="text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Instagram" className="text-primary">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
