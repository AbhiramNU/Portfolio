export const initialFiles = [
  {
    name: 'home.tsx',
    type: 'tsx',
    content: `import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1>Welcome to My Portfolio</h1>
      <p>Building high-performance applications.</p>
    </div>
  );
};

export default Home;`
  },
  {
    name: 'about.html',
    type: 'html',
    content: `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <main class="about-section">
    <h1>About Abhiram</h1>
    <p>Junior Software Developer from India.</p>
  </main>
</body>
</html>`
  },
  {
    name: 'projects.js',
    type: 'javascript',
    content: `const projects = [
  {
    name: "AI Code Assistant",
    tech: ["React", "Node.js", "GPT-4"],
    status: "Live"
  },
  {
    name: "Enterprise Dashboard",
    tech: ["Next.js", "GraphQL"],
    status: "In Progress"
  }
];`
  },
  {
    name: 'skills.json',
    type: 'json',
    content: `{
  "languages": ["Python", "TypeScript"],
  "frameworks": ["FastAPI", "React", "Next.js"],
  "ai_ml": ["LangChain", "PyTorch"]
}`
  },
  {
    name: 'experience.ts',
    type: 'typescript',
    content: `export const experiences = [
  {
    role: "Junior Software Developer",
    company: "EduVanceAI",
    location: "India IN"
  }
];`
  },
  {
    name: 'contact.css',
    type: 'css',
    content: `.contact-card {
  display: flex;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
}
.btn-primary {
  color: #007acc;
}`
  },
  {
    name: 'README.md',
    type: 'markdown',
    content: `# Abhiram's Portfolio

Welcome to my interactive developer portfolio.`
  },
  {
    name: 'Abhiram_N_Udupa_Resume.pdf',
    type: 'pdf',
    content: `// Placeholder for PDF`
  }
];
