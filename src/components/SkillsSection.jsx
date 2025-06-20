import { useState } from "react";
import { cn } from "@/lib/utils";

// Update skills later
const skills = [
  // Programming Languages
  { name: "Python", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Swift", category: "Programming" },
  { name: "C", category: "Programming" },
  { name: "C++", category: "Programming" },

  // AI/ML
  { name: "PyTorch", category: "AI/ML" },
  { name: "OpenCV", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "Keras", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "Gymnasium", category: "AI/ML" },
  { name: "Stable Baselines3", category: "AI/ML" },
  { name: "NumPy", category: "AI/ML" },
  { name: "Pandas", category: "AI/ML" },
  { name: "PySpark", category: "AI/ML" },

  // Web Development
  { name: "HTML5", category: "Web" },
  { name: "CSS3", category: "Web" },
  { name: "React", category: "Web" },
  { name: "Bootstrap", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "Flask", category: "Web" },
  { name: "FastAPI", category: "Web" },
  { name: "Spring Boot", category: "Web" },

  // Mobile Development
  { name: "UIKit (iOS)", category: "Mobile" },

  // Databases
  { name: "MySQL", category: "Databases" },
  { name: "Firebase", category: "Databases" },

  // Tools & Platforms
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  //{ name: "Kubernetes", category: "Tools" },
  { name: "Roboflow", category: "Tools" },
  { name: "Xcode", category: "Tools" },
  { name: "Eclipse", category: "Tools" },
  { name: "VsCode", category: "Tools" },
  { name: "Power BI", category: "Tools" },
];

// To categorise skills and filter them
const categories = [
  "All",
  "Programming",
  "AI/ML",
  "Web",
  "Mobile",
  "Databases",
  "Tools",
];

export const SkillsSection = () => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section id="skills" className="py-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Category Buttons */}
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-muted-foreground"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Cards */}
          {/* Filtered skills based on selected category. It works by checking the category of each skill against the selected category and the skills are mapped to display accordingly. */}
          {skills
            .filter((skill) =>
              selectedCategory === "All"
                ? true
                : skill.category === selectedCategory
            )
            .map((skill, key) => (
              <div
                key={skill.name}
                className="bg-card p-3 rounded-lg shadow-xs card-hover"
              >
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
