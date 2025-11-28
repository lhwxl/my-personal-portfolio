import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Data Analytics Dashboard",
    description: "A web application for visualizing and analyzing complex datasets. Built with React, Recharts, and a custom Node.js backend.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3386db36-1733-4846-891d-3df80fce15e9/project-1-showcase-l23k3l2-1764182715228.webp",
    liveLink: "https://terralink-eta.vercel.app/",
    sourceLink: "https://github.com/BrianMwendwa180",
  },
  {
    title: "POS Mobile App",
    description: "A Point Of Sale platform for local tyre service companies in Kenya. Developed using React Native, Firebase, MERN Stack technology and integrated with M-Pesa for payments.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3386db36-1733-4846-891d-3df80fce15e9/project-2-showcase-6fgg4sa-1764182722548.webp",
    liveLink: "https://pos-app-navy.vercel.app/",
    sourceLink: "https://github.com/BrianMwendwa180",
  },
  {
    title: "Zuri Boutique E-commerce",
    description: "A stylish and modern online store for a fashion brand. Built with Next.js, Stripe for payments, and a headless CMS for product management.",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3386db36-1733-4846-891d-3df80fce15e9/project-3-showcase-emq08w7-1764182729676.webp",
    liveLink: "https://golden-klepon-e1fc32.netlify.app/",
    sourceLink: "https://github.com/BrianMwendwa180",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;