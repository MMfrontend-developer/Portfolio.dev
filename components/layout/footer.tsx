import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Portfolio<span className="text-accent">.</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Building digital experiences with purpose and passion.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <div className="flex items-center gap-6">
            <a href="https://wa.me/2347083528377" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent transition-colors">WhatsApp</a>
            <a href="https://github.com/MMfrontend-developer/Muhyideen_Muhammad" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/muhammad-muhyideen-dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://behance.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-accent transition-colors">Behance</a>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Design Engineer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
