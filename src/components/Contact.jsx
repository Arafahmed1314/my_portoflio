import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: "https://github.com/Arafahmed1314",
      label: "GitHub",
    },
    { icon: <Linkedin size={24} />, url: "", label: "LinkedIn" },
    {
      icon: <Facebook size={24} />,
      url: "https://web.facebook.com/Araf1314",
      label: "Facebook",
    },
    {
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/araf_ahmed1314/",
      label: "Instagram",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // Construct the mailto URL
    const mailtoLink = `mailto:nayemhasan1314@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Links & Location */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-700 hover:text-indigo-600"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Location
            </h3>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
            <p className="text-gray-600 mt-2">nayemhasan1314@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
