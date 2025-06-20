import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hydra - Flood Prediction System",
    description:
      "Developed an inexpensive and easy-to-maintain smart IoT flood monitoring system that uses sensors and machine learning to provide real-time river-level monitoring, accurate flood prediction, and alerts to the public via a web browser.",
    image: "/projects/hydra.png",
    tags: ["ML", "Python", "Flask", "JavaScript", "IoT", "Arduino", "Firebase"],
    githubUrl: "#blank",
  },
  {
    id: 2,
    title: "Idle-Game Automation Using Computer Vision and AI",
    description:
      "Developed a vision-based AI agent to automate tasks in idle games using a custom object detector and Deep Q-Network (DQN) reinforcement learning model.",
    image:
      "projects/Yolov8ObjectDetection.png",
    tags: ["Python", "OpenCV", "PyTorch", "RL", "Computer Vision"],
    githubUrl:
      "https://github.com/abelthomasbabu/Idle-Game-Automation-Using-Computer-Vision-and-AI",
  },
  {
    id: 3,
    title: "Full-Stack Web Application with flask and React",
    description:
      "Developed a full-stack contact management application using a React frontend and a Flask backend, featuring a RESTful API with full CRUD functionality and a SQLite database managed via the SQLAlchemy ORM.",
    image:
      "/projects/flaskapp.png",
    tags: ["Full-Stack", "Flask", "React", "SQL"],
    githubUrl: "https://github.com/abelthomasbabu/contact-manager-app",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/abelthomasbabu/My-Portfolio",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center justify-center mx-auto"
            href="https://github.com/abelthomasbabu"
            target="_blank"
          >
            My Github
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
