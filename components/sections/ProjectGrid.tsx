"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col gap-6"
    >
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative shadow-sm border border-neutral-200 dark:border-neutral-800">
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full z-10"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
          />
          <div className="w-full h-full bg-accent/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 transition-opacity"
        >
          <span className="bg-white text-black px-8 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Explore Case Study
          </span>
        </motion.div>
      </Link>

      <div className="flex flex-col gap-3 px-2">
        <div className="flex items-center gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-black text-accent bg-accent/5 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-3xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProjectGrid() {
  return (
    <section id="work" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-xl leading-relaxed"
            >
              A deep dive into my design philosophy and engineering approach. 
              Focused on performance, accessibility, and delight.
            </motion.p>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
