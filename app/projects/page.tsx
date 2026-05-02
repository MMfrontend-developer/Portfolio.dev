import { projects } from "@/lib/data";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export const metadata = {
  title: "Projects | Design Engineer",
  description: "A showcase of high-quality UI/UX design and frontend development projects.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">All Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Exploring the intersection of aesthetics and functionality. 
            Each project represents a unique challenge and a dedicated solution.
          </p>
        </div>
      </section>
      <ProjectGrid />
    </div>
  );
}
