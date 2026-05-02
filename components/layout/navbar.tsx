"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Work", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when pathname changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Portfolio<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    pathname === item.href ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="md:hidden p-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-background overflow-hidden"
          >
            <ul className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-2xl font-bold transition-colors",
                      pathname === item.href ? "text-accent" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
