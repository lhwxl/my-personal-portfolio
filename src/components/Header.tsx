import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
	  <img src="/icon.jpg" alt="Logo" className="mr-2" />
      <Link to="/" className="flex items-center justify-center">
        <span className="text-xl font-bold">悠铭兽语-Yomi Paws</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/projects">
          Projects
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/contact">
          Contact
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/BrianMwendwa180" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/mwendwa-munini-5632592a1/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://x.com/BrianMw83108050?t=eZrCTQdSpSf_cyU148lsfA&s=09" target="_blank" rel="noopener noreferrer"><Twitter className="h-4 w-4" /></a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
