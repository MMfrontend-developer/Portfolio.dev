"use client";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 italic">Get in touch.</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            Have a project in mind or just want to say hi? I&apos;m always open to new 
            opportunities and interesting conversations.
          </p>
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                  placeholder="Muhammad Muhyideen"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea 
                id="message" 
                rows={6}
                className="bg-muted border-none rounded-xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <Button size="lg" className="w-full md:w-auto px-12">
              Send Message
            </Button>
          </form>
          
          <div className="mt-24 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h4 className="font-bold mb-2">Email</h4>
              <div className="flex items-center gap-3 group">
                <a href="mailto:mmuhyideen1234@gmail.com" className="text-accent hover:underline">mmuhyideen1234@gmail.com</a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("mmuhyideen1234@gmail.com");
                    alert("Email copied to clipboard!");
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-muted rounded text-muted-foreground"
                  title="Copy to clipboard"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Social</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/muhammad-muhyideen-dev" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="https://github.com/MMfrontend-developer" className="hover:text-accent transition-colors">Github</a>
                <a href="https://x.com/muhyideen_dev" className="hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Location</h4>
              <p className="text-muted-foreground">Available worldwide (Remote)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
