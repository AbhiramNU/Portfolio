import { useState } from 'react';

export const useAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I am Abhiram's portfolio Copilot. You have 3 queries. Ask me about his tech stack or projects!", sender: "ai" }
  ]);
  const [queryCount, setQueryCount] = useState(0);

  const sendMessage = async (text) => {
    if (queryCount >= 3) return;

    // Immediately push user message
    setMessages(prev => [...prev, { text, sender: "user" }]);
    const nextCount = queryCount + 1;
    setQueryCount(nextCount);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey || apiKey === "your_gemini_api_key_here") {
         setMessages(prev => [...prev, { text: "Error: VITE_GEMINI_API_KEY is missing. Please add it to your .env.local file to enable AI responses!", sender: "ai" }]);
         return;
      }

      const systemPrompt = `You are "Abhiram's Copilot", an AI assistant embedded in Abhiram N Udupa's developer portfolio. 
Your goal is to answer questions about Abhiram professionally, concisely, and with a friendly tone. Keep responses under 3 sentences.
Here is the data you know about him:
- Name: Abhiram N Udupa
- Role: Junior Software Developer
- Education: Computer Science with a minor in AI/ML at NMAMIT (2021-2025).
- Tech Stack: Python, TypeScript, SQL, JavaScript, Java, PyTorch, LangChain, HuggingFace, FastAPI, Flask, Docker, AWS, Linux, Git.
- Projects:
  1. VoltStrata Energy Intel: Deployed a robust machine learning platform for energy intelligence. Automated binary classification parameters and integrated absolute path resolution for reliable cloud deployment logic using Python and Scikit-Learn.
  2. SentriCam Dashboard: Headless FastAPI backend streaming live video to a Next.js frontend dashboard. Features browser-based face enrollment and real-time event logging via Prisma SQLite.
  3. Parixa Platform: End-to-end full stack architecture deployed using Vercel serverless functions. Optimized for ultra-low latency and scalable database operations using React and Node.js.
  4. PaperSmith Templates: An in-place template editor feature allowing the robust generation of dynamic structures, empowered by Generative AI and Python.
- Contact: abhiramnudupa@gmail.com, GitHub: abhiramnudupa, LinkedIn: abhiram-n-udupa.
- Interests: AI integrations, NLP, LLMs, RAG pipelines, painting, photography, music.
If asked something outside this scope, politely say you only have access to Abhiram's professional portfolio data.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [{ parts: [{ text }] }]
        })
      });

      const data = await response.json();
      let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I encountered an error processing that request.";

      if (nextCount >= 3) {
        reply += "\n\n*(Query limit reached. Restart IDE to refresh limits.)*";
      }

      setMessages(prev => [...prev, { text: reply, sender: "ai" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Failed to connect to the Gemini API. Please check your network or API key.", sender: "ai" }]);
    }
  };

  return { messages, sendMessage, queryCount, limitReached: queryCount >= 3 };
};
