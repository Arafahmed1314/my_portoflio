import { Github, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Hi, I'm </span>
          <span className="block text-indigo-600">Naimul Islam</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Frontend Developer passionate about creating beautiful and functional
          web applications
        </p>
        <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4">
          <a
            href="https://github.com/Arafahmed1314"
            className="text-gray-600 hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:nayemhasan1314@gmail.com"
            className="text-gray-600 hover:text-indigo-600"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
