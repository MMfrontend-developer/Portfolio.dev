export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  role: string;
  tools: string[];
  liveLink?: string;
  figmaLink?: string;
  githubLink?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce & Gym UI/UX",
    description: "A comprehensive UI/UX design project for e-commerce shopping and a gym platform, focusing on user-centered experiences and modern aesthetics.",
    tags: ["UX/UI Design", "Web Design", "Figma"],
    image: "/uiux-design-1.png",
    slug: "ecommerce-gym-design",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Prototyping", "Wireframing"],
    figmaLink: "https://www.figma.com/design/PTnp3YOA2UPcghWvnJhmO1/Muhyideen?node-id=28-1559&t=MgQsX8uciBw79kNb-1",
    highlights: ["/uiux-design-2.png"],
  },
  {
    id: "2",
    title: "Shapora Store",
    description: "A high-performance frontend for an e-commerce store with smooth animations, dynamic routing, and responsive layout.",
    tags: ["Frontend Dev", "E-commerce", "Performance"],
    image: "/shapora.png",
    slug: "shapora-store",
    role: "Frontend Developer",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://shapora-store.vercel.app/",
    highlights: ["/shapora-1.png", "/shapora-2.png", "/shapora-3.png", "/shapora-4.png"],
  },
  {
    id: "3",
    title: "BBR Agency",
    description: "A sleek and professional frontend development for a digital agency, focusing on brand identity and smooth user interactions.",
    tags: ["Frontend Dev", "Agency", "Animations"],
    image: "/bbr-agency.png",
    slug: "bbr-agency",
    role: "Frontend Developer",
    tools: ["React", "CSS 3", "Framer Motion"],
    liveLink: "https://bbr-agency.vercel.app/",
    highlights: ["/bbr-highlight-1.png", "/bbr-highlight-2.png"],
  },
];
