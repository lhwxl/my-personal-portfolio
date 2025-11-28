import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import passport from "../assets/passport.jpeg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Avatar className="h-64 w-64">
            <AvatarImage src={passport} alt="Brian Mwendwa" />
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
            I am a recent Computer Science graduate from St Paul's University, passionate about leveraging technology to solve real-world problems. My journey into software development started with a curiosity for how things work, and it has since grown into a full-fledged passion for creating elegant, efficient, and user-friendly applications.
          </p>
          <p className="text-gray-300 mb-4">
            Throughout my studies, I have gained a solid foundation in computer science principles, including data structures, algorithms, and software design. I have hands-on experience with various programming languages and technologies, with a strong focus on web development using the MERN stack (MongoDB, Express.js, React, Node.js).
          </p>
          <p className="text-gray-300">
            I am a quick learner, a collaborative team player, and I am always eager to take on new challenges. I am currently seeking a full-time software engineering role where I can contribute my skills and continue to grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;