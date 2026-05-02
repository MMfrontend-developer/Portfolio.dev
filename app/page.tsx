import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      
      {/* Mini About CTA */}
      <section className="py-32 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Let&apos;s build something exceptional.</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects and full-time opportunities 
            as a Design Engineer or Senior Frontend Developer.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:mmuhyideen1234@gmail.com" className="bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Send an Email
            </a>
            <a href="https://wa.me/2347083528377" target="_blank" rel="noopener noreferrer" className="border border-foreground px-8 py-4 rounded-full font-bold hover:bg-foreground hover:text-background transition-all">
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
