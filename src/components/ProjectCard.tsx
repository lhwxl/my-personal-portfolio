import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  sourceLink: string;
}

const ProjectCard = ({ title, description, imageUrl, liveLink, sourceLink }: ProjectCardProps) => {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
      <CardHeader className="p-0">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline" asChild>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button variant="secondary" asChild>
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Source
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;