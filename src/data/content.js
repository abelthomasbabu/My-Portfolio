// All copy for the site. Keep it in step with the resume.

export const profile = {
  name: "Abel Thomas Babu",
  role: "AI Engineer",
  tagline: "AI engineer working on LLMs and RAG, on a Python backend foundation.",
  context: "Software Engineer at Nezuna · MSc Advanced Computer Science (Distinction), Newcastle",
  email: "abelthomasbabu@gmail.com",
  location: "Newcastle upon Tyne, UK",
  links: [
    { label: "GitHub", href: "https://github.com/abelthomasbabu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abel-thomas-b-0270b5134/" },
    { label: "Email", href: "mailto:abelthomasbabu@gmail.com" },
    { label: "Resume", href: "/resume/Abel-Thomas-Babu-Resume.pdf" },
  ],
};

export const projects = [
  {
    title: "AI Papers RAG Assistant",
    icon: "rag",
    highlight: { value: "0.94", label: "RAGAS faithfulness" },
    summary:
      "Question answering over a custom document with hybrid dense + BM25 retrieval, enforced source citations and a Streamlit chat that shows the retrieved chunks.",
    metric: "0.94 faithfulness · 0.94 context recall (RAGAS)",
    stack: ["Python", "LangChain", "OpenAI API", "ChromaDB", "Docker", "Kubernetes"],
    links: [],
  },
  {
    title: "Vision-based RL agent for game automation",
    icon: "agent",
    highlight: { value: "9 ms", label: "inference, down from 64–67 ms" },
    summary:
      "YOLOv8s object detection feeding a Deep Q-Network in a custom Gymnasium environment, with no game-specific logic. MSc dissertation.",
    metric: "Inference 64–67 ms → 9–14.5 ms · 0.994 mAP@0.5 · 3 games, no retraining",
    stack: ["Python", "PyTorch", "YOLOv8", "Stable-Baselines3", "OpenCV"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/abelthomasbabu/Idle-Game-Automation-Using-Computer-Vision-and-AI",
      },
    ],
  },
  {
    title: "Hydra flood prediction system",
    icon: "hydra",
    highlight: { value: "IoT", label: "real-time flood alerts" },
    summary:
      "IoT early-warning system: water-level and temperature/humidity sensors streaming to Firebase, with a logistic regression model classifying flood risk. Four-person team project.",
    metric: "Real-time sensor data → flood / no-flood alerts",
    stack: ["Arduino", "ESP8266", "Firebase", "scikit-learn"],
    links: [],
  },
];

// Hero stats: each one is restated from the projects, education or experience below.
export const stats = [
  { counter: { from: 0, to: 0.94, decimals: 2 }, label: "RAG faithfulness" },
  { counter: { from: 67, to: 9, suffix: " ms" }, label: "RL inference, was 64–67 ms" },
  { value: "MSc", label: "Distinction, Newcastle" },
];

export const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export const experience = [
  {
    company: "Nezuna Technologies",
    role: "Software Engineer",
    period: "Aug 2026 – present",
    location: "Remote",
    stack: "C# / .NET 9 · PostgreSQL · React + TypeScript · Flutter",
    bullets: [
      "Built a drag-and-drop shift scheduler across month, week and day views, saving each batch of edits in one database transaction that rejects double-bookings.",
      "Built the client invoicing backend: bill rates with history, invoices from attendance records, gap-free numbering and PDF rendering, shipped to web and Flutter apps.",
    ],
  },
  {
    company: "Apps Team Technologies",
    role: "Software Developer Intern",
    period: "Dec 2022 – Feb 2023",
    location: "Kerala, India",
    stack: "Swift · UIKit",
    bullets: [
      "Built core screens and reusable components for a logistics iOS app, wired to REST APIs using asynchronous Swift.",
      "Fixed a list-rendering inefficiency, improving scrolling performance by about 35%.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C#", "Swift", "SQL"] },
  { group: "AI / ML", items: ["PyTorch", "OpenCV", "scikit-learn", "LangChain"] },
  { group: "Backend", items: ["FastAPI", "Flask", "Spring Boot", ".NET", "PostgreSQL", "REST APIs"] },
  { group: "Frontend / Mobile", items: ["React", "Tailwind CSS", "Flutter", "UIKit"] },
  { group: "Tools", items: ["Git", "GitHub Actions", "Docker", "Kubernetes"] },
];

export const education = [
  {
    school: "Newcastle University",
    degree: "MSc Advanced Computer Science, Distinction",
    period: "2023 – 2024",
    note: "Vice Chancellor's International Scholarship · NCL+ Award",
  },
  {
    school: "Saintgits College of Engineering",
    degree: "BTech Computer Science and Engineering, First Class",
    period: "2018 – 2022",
    note: "",
  },
];
