import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Project Header */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4">
          <Link href="/projects" className="text-sm font-medium text-accent mb-8 inline-flex items-center gap-2 hover:underline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Projects
          </Link>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            {project.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Role</h4>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Services</h4>
              <p className="font-medium">{project.tags.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Tools</h4>
              <p className="font-medium">{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="aspect-[16/9] bg-neutral-200 dark:bg-neutral-800 rounded-3xl overflow-hidden relative group">
             <Image 
               src={project.image} 
               alt={project.title} 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-700" 
             />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 italic">The Challenge</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description} Each project presents its own set of hurdles. 
                For {project.title}, the primary goal was to create a seamless user experience 
                that felt both innovative and familiar, while maintaining high performance 
                standards across all devices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-neutral-200 dark:border-neutral-800">
               <div>
                  <h3 className="text-xl font-bold mb-4">The Process</h3>
                  <p className="text-muted-foreground">
                    Started with deep user research to understand pain points, followed by 
                    low-fidelity wireframing to map out the user flow.
                  </p>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-4">The Solution</h3>
                  <p className="text-muted-foreground">
                    A clean, component-based architecture built with Next.js, allowing for 
                    reusable UI patterns and rapid prototyping.
                  </p>
               </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 italic">Visual Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {project.highlights?.map((highlight, index) => (
                   <div key={index} className="aspect-video bg-muted rounded-2xl relative overflow-hidden">
                      <Image 
                        src={highlight} 
                        alt={`Visual Highlight ${index + 1}`} 
                        fill 
                        className="object-cover"
                      />
                   </div>
                 ))}
                 {!project.highlights && (
                   <div className="aspect-video bg-muted rounded-2xl relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt="Visual Highlight" 
                        fill 
                        className="object-cover"
                      />
                   </div>
                 )}
              </div>
            </div>

            <div className="bg-accent text-white p-12 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6 italic">Final Outcome</h2>
              <p className="text-xl mb-8 opacity-90">
                The project resulted in a significant increase in user engagement and 
                received positive feedback for its intuitive interface.
              </p>
              <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                  <Button variant="secondary" className="bg-white text-accent hover:bg-white/90" asChild>
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                       View Live Demo
                    </Link>
                  </Button>
                )}
                {project.figmaLink && (
                  <Button variant="secondary" className="bg-white text-accent hover:bg-white/90" asChild>
                    <Link href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                       View on Figma
                    </Link>
                  </Button>
                )}
                {project.githubLink && (
                  <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                       View Source on GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="py-12 border-t border-neutral-200 dark:border-neutral-800">
               <h2 className="text-3xl font-bold mb-8 italic">Developer Edge</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-xl font-bold mb-4">Technical Stack</h3>
                     <ul className="space-y-2 text-muted-foreground">
                        {project.tools.map((tool, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"/> {tool}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-4">Implementation Highlights</h3>
                     <p className="text-muted-foreground mb-4">
                        Leveraged the best tools for the job, ensuring {project.title} 
                        is optimized for performance and maintainability.
                     </p>
                     <p className="text-muted-foreground">
                        Ensured 100% lighthouse accessibility score by following ARIA best 
                        practices and semantic HTML structure.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
