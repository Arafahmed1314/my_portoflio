const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-w-3 aspect-h-4">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
            alt="Profile"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            I'm a passionate Frontend Developer with expertise in modern web
            technologies. I love creating elegant solutions to complex problems
            and am dedicated to writing clean, efficient code.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Next Js",
                "Tailwind CSS",
                "MongoDB",
                "C++",
                "Php",
                "MySQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
