import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import moviedb from "/public/moviedb.webp";
import expensetracker from "/public/expense tracker.webp";
import quiz from "/public/quiz.webp";
import xstream from "/public/xtream.webp";
import recipe from "/public/recipe.webp";
import projectmanager from "/public/project manager.webp";
const projects = [
  {
    title: "MovieDb Web Application",
    description:
      "MovieDb is a full-stack web application built with Next.js and MongoDB, offering movie search, filtering, and detailed descriptions",
    image: moviedb,
    technologies: ["Next Js", "MongoDB", "RestApi", "Tailwind CSS"],
    githubUrl:
      "https://github.com/Arafahmed1314/Movie-Db-Website-Using-Next-JS",
    liveUrl: "https://movie-db-website-using-next-js-bwcs.vercel.app/",
  },
  {
    title: "Expense Tracker Application",
    description:
      "Expense Tracker is a React-based application styled with Tailwind CSS, designed for daily tracking expenses efficiently",
    image: expensetracker,
    technologies: ["TailwindCss", "React"],
    githubUrl:
      "https://github.com/Arafahmed1314/Expense-Tracker-with-React?tab=readme-ov-file",
    liveUrl: "https://expense-tacker-assignment.vercel.app/",
  },
  {
    title: "Advanced Quiz Application",
    description:
      "Advanced Quiz Application is a React-based quiz platform styled using Tailwind CSS.",
    image: quiz,
    technologies: ["React", "Firebase", "Tailwind CSS", "RestApi"],
    githubUrl: "https://github.com/Arafahmed1314/Advanced_Quiz_Application",
    liveUrl: "https://advanced-quiz-application.vercel.app/",
  },
  {
    title: "Xstream Web Application",
    description:
      "Xstream is a Next.js-powered video streaming platform styled with Tailwind CSS, offering a seamless viewing experience.",
    image: xstream,
    technologies: ["Tailwindcss", "NextJs", "RestApi"],
    githubUrl: "https://github.com/Arafahmed1314/Xstream-app-with-nextjs",
    liveUrl: "https://xstream-app-with-nextjs.vercel.app/bn",
  },
  {
    title: "Recipe Application",
    description:
      "Recipe Application is a Next.js-based platform for discovering recipes using API integration. ",
    image: recipe,
    technologies: ["Next Js", "Tailwind CSS", "API"],
    githubUrl:
      "https://github.com/Arafahmed1314/Recipe_Application-Using-Next-js",
    liveUrl: "https://recipe-application-using-next-js.vercel.app/",
  },
  {
    title: "Project Manager Application",
    description:
      "Project Manager is a React-based application styled with Tailwind CSS, designed for Track Project efficiently.",
    image: projectmanager,
    technologies: ["React", "Tailwind CSS"],
    githubUrl:
      "https://github.com/Arafahmed1314/Project-Manager-App?tab=readme-ov-file",
    liveUrl: "https://project-manager-assignment-3-n3v0xfgfj.vercel.app/",
  },
];

const ITEMS_PER_PAGE = 3;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Portfolio</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.githubUrl}
                  className="text-gray-600 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  className="text-gray-600 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex justify-center items-center space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-indigo-600 hover:bg-indigo-100"
          }`}
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-indigo-600 hover:bg-indigo-100"
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
