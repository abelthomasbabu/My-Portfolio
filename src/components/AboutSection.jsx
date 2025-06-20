import { cn } from "../lib/utils";
import { Code, Cpu, Database, Server } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-10 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 backdrop-blur-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer & Tech Enthusiast
            </h3>
            <p className="text-muted-foreground text-justify">
              As a recent M.Sc. Advanced Computer Science graduate, I am a
              passionate Software Engineer driven to build intelligent and
              impactful solutions. My journey in technology began at a young
              age, fueled by a deep curiosity for computing that evolved from
              tinkering with my first PC to building my own custom PC. During my
              undergraduate studies, I collaborated with a team to develop an
              impactful flood prediction system utilising machine learning and
              IoT. This period also saw me honing practical optimisation skills
              by successfully enhancing the thermal and power efficiency of
              laptops through thermal repaste, voltage and power tuning. This
              early passion for optimising hardware translated into my approach
              to software, fostering a dedication to performance and resource
              efficiency in all my development endeavors.
            </p>
            <p className="text-muted-foreground text-justify">
              Building on this foundation, my internships provided invaluable
              experience: I contributed to a full-stack e-commerce web
              application with Java and React at Kompetenzen Technologies, and
              gained my first exposure to native mobile development by building
              iOS app pages using Swift and UIKit at Apps Team Technologies. My
              postgraduate journey allowed me to dive deep in intensive projects
              like SafeConvoNet, a privacy-focused chat application where I
              researched security measures, and a vision-based AI agent that
              automated tasks through custom object detection and Deep
              Q-Networks, a project that involved extensive testing and
              optimisation. I am ready to embrace new challenges, continuously
              expand my knowledge and contribute my skills to new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-white cosmic-button",
                  "hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Get In Touch
              </a>
              <a
                href="/resume/Abel Thomas Babu.pdf"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-white cosmic-button",
                  "hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">AI and Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience in developing AI solutions, including a
                    Reinforcement Learning (DQN) agent that automates tasks
                    using custom-trained object detection models (OpenCV,
                    PyTorch). Applied machine learning to predict flood
                    patterns and built an IoT system using Arduino to enhance
                    real-time monitoring and response.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">
                    Full-Stack & Mobile Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications with
                    React/Javascript/Python, Java/Spring Boot, and intuitive iOS
                    mobile experiences with Swift/UIKit.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Scalable Data Solutions</h4>
                  <p className="text-muted-foreground">
                    Designing and optimising data pipelines using PySpark to
                    extract critical insights from large datasets and inform
                    strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Development</h4>
                  <p className="text-muted-foreground">
                    Practical experience in version control with Git,
                    containerisation with Docker, and familiar with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
