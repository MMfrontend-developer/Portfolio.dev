import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About | Design Engineer",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 italic">About me.</h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a Design Engineer with over 2 years of experience in the digital space. 
                  My journey started in graphic design, but I quickly realized that the true 
                  power of design lies in how it behaves, not just how it looks.
                </p>
                <p>
                  Today, I spend my time at the intersection of design systems, frontend 
                  architecture, and user experience. I believe that a great product is one 
                  that feels seamless and intuitive, it's so intuitive and performant that the user 
                  forgets about the technology behind it.
                </p>
                <p>
                  When I'm not coding or pushing pixels, you can find me exploring local 
                  coffee shops, reading about cognitive psychology, or experimenting with 
                  generative art.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 p-8 rounded-3xl bg-muted/50 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-6 text-accent">Technical Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {[ "Figma", "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",].map(tech => (
                      <span key={tech} className="px-4 py-2 rounded-xl bg-background text-sm font-bold shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 rounded-3xl bg-accent text-white">
                   <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-4 opacity-80">Design</h3>
                   <p className="text-xl font-bold leading-tight">Figma, Adobe photoshop, Adobe Illustrator</p>
                </div>

                <div className="p-8 rounded-3xl bg-muted/50 border border-neutral-200 dark:border-neutral-800">
                   <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-4 text-muted-foreground">Location</h3>
                   <p className="text-xl font-bold">Remote / GMT+1</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-muted/50 border border-neutral-200 dark:border-neutral-800 overflow-hidden relative group">
                <h3 className="text-xs uppercase tracking-[0.2em] font-black mb-6 text-accent">My Philosophy</h3>
                <p className="text-2xl font-bold leading-tight">
                  Design is not how it looks, it's how it <span className="text-accent italic">works</span>.
                </p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
              </div>

              <div className="pt-8 flex justify-end">
                <Button asChild size="lg" className="rounded-full h-16 px-12">
                  <Link href="/contact">Let's Work Together</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 italic">Experience.</h2>
          <div className="space-y-12 max-w-4xl mx-auto md:mx-0">
            
            {/* Experience 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group">
              <div className="col-span-1 text-muted-foreground font-medium pt-1">
                Sept 2024 – July 2025
              </div>
              <div className="col-span-3 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">UI/UX & Frontend Developer</h3>
                  <p className="text-lg font-medium mb-1">Gigs-tech Solutions and Consults <span className="text-muted-foreground font-normal">• Remote</span></p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Spearheaded the translation of complex UI/UX designs into pixel-perfect, highly interactive interfaces using React, Next.js, and Tailwind CSS.</li>
                  <li>Championed user-centered design principles to deliver responsive, intuitive, and accessible digital experiences.</li>
                  <li>Optimized frontend performance and implemented fluid micro-interactions, significantly enhancing overall user engagement and usability.</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 border-t border-neutral-200 dark:border-neutral-800 pt-12 group">
              <div className="col-span-1 text-muted-foreground font-medium pt-1">
                March 2023 – June 2024
              </div>
              <div className="col-span-3 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">UI/UX Designer</h3>
                  <p className="text-lg font-medium mb-1">Salatoe LLC <span className="text-muted-foreground font-normal">• Remote</span></p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Led the end-to-end design process, from high-fidelity wireframing and prototyping in Figma to defining comprehensive visual identities.</li>
                  <li>Architected scalable design systems and style guides that ensured cross-platform consistency and reduced design-to-development friction.</li>
                  <li>Conducted user research and usability testing to iterate on complex workflows, resulting in intuitive and accessible digital interfaces.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
