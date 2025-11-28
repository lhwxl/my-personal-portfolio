import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div 
      className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/3386db36-1733-4846-891d-3df80fce15e9/hero-background-aiqc9iu-1764182700938.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Brian Mwendwa</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Computer Science Graduate from St Paul's University with a passion for building beautiful and functional web applications using the MERN stack and other programming languages.
        </p>
        <Button asChild size="lg">
          <Link to="/projects">
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
