import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/wefa/Header";
import { Footer } from "@/components/wefa/Footer";
import heroImg from "@/assets/hero-bathroom.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import downloadsImg from "@/assets/downloads.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wefatherm – Specialist Water Supply Systems in PP-R" },
      {
        name: "description",
        content:
          "Wefatherm supplies high-quality PP-R water supply systems for high-rise, public buildings, hotels and sports facilities worldwide. Made in Germany.",
      },
      { property: "og:title", content: "Wefatherm – Specialist Water Supply Systems" },
      {
        property: "og:description",
        content:
          "Safe and efficient water supply in buildings. Simple, Safe, Competent. – Made in Germany.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const segments = [
  { title: "Residential", img: residentialImg },
  { title: "Commercial", img: commercialImg },
  { title: "Hospitality", img: hospitalityImg },
  { title: "Healthcare", img: healthcareImg },
];

function PillLink({
  children,
  href,
  variant = "solid",
}: {
  children: string;
  href: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[0.95rem] font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary-dark"
      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[86vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Monochrome view of a modern bathroom with a freestanding bathtub and city skyline"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/10" />
        <div className="relative px-5 text-center">
          <p className="eyebrow mb-5 inline-block bg-primary px-3 py-1 text-primary-foreground">
            Specialist
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            <span className="bg-primary px-4 py-1 text-primary-foreground">
              Water Supply Systems
            </span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section id="solutions" className="bg-card py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Protecting the source</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Water is the source, not only of life but also of comfort. Creating a pipe system for
              supply is now more of an accomplishment than ever.
            </p>
            <p>
              Increasingly, water supply systems are called upon to go beyond basic supply to deal
              with drinking water, cooling and heating requiring special treatment.
            </p>
            <p className="font-semibold text-foreground">
              This is Specialist Water Supply. Together we can help you to ensure reliability.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PillLink href="#products">Solutions</PillLink>
            <PillLink href="#contact" variant="outline">
              Contact
            </PillLink>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl">Wefatherm</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Wefatherm is a leading international supplier of high-quality water supply systems
              made of PP-R with a clear strategic focus on high-rise buildings, public buildings,
              hotels and sports facilities worldwide.
            </p>
            <p>
              At Wefatherm highly-trained employees provide their knowledge and experience as
              reliable partners of architects, planners and trades in the plumbing business – to
              provide safe and efficient water supply in buildings.{" "}
              <span className="font-semibold text-foreground">
                Simple, Safe, Competent. – Made in Germany!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section id="projects" className="bg-card py-24">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <h2 className="text-center text-3xl font-semibold sm:text-5xl">Where it matters most</h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((s) => (
              <article key={s.title} className="group relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-[26rem] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <h3 className="absolute bottom-6 left-6 bg-primary px-3 py-1.5 text-lg font-semibold uppercase tracking-wide text-primary-foreground">
                  {s.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            <p>
              Today, your clients are more demanding and end-user expectations are higher, while
              legislative and environmental compliance place additional pressures on construction
              teams. Increasingly, water supply systems are called upon to go beyond basic supply to
              deal with drinking water, hot tap water and sanitary applications requiring special
              treatment.
            </p>
            <div className="mt-9 flex justify-center">
              <PillLink href="#projects">Projects</PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* Service and advice */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <h2 className="text-center text-3xl font-semibold sm:text-5xl">Service and Advice</h2>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-semibold">Contact us</h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Contact our sales and customer services team for more information about Wefatherm.
                </p>
                <div className="mt-6">
                  <PillLink href="#contact">Contact</PillLink>
                </div>
              </div>

              <div id="downloads" className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-semibold">Downloads</h3>
                <p className="mt-3 text-lg text-muted-foreground">
                  Download the latest brochures, manuals and other information on our download page.
                </p>
                <div className="mt-6">
                  <PillLink href="#downloads" variant="outline">
                    Downloads
                  </PillLink>
                </div>
              </div>
            </div>

            <img
              src={downloadsImg}
              alt="Wefatherm brochures and manuals"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
