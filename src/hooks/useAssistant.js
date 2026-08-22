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
Here is the authoritative data about him:
- Name: Abhiram N Udupa
- Role: Full-Stack & AI/ML Software Developer
- Internships & Experience: Software Development Intern @ Sahasranshu Technologies (Jun 2026 - Present), Full Stack Developer @ Akash Shipping Agency (Jan 2026 - Mar 2026).
- Education: Computer Science with minor in AI/ML at NMAM Institute of Technology (NMAMIT).
- Primary Projects:
  1. Sahasranshu Technologies Corporate Website: React 18, TypeScript, Vite, Tailwind CSS, TanStack Router, Vercel. Corporate site for defence intelligence & geospatial analytics platform (Founder: Siddarth Pai M).
  2. Parixa - AI-Powered Secure Assessment Platform: Node.js, Express, MongoDB, React, Vercel. AI-proctored online exam platform with automated question shuffling & mandatory fullscreen rules (Collaborators: Adarsh Bhat, Amar S Acharya).
  3. VoltStrata: AI-Driven Smart Grid Energy Intelligence Platform: Python, FastAPI, Scikit-Learn, Random Forest, React, Astro, Render, Vercel. Forecasts household power consumption & classifies peak demand levels on 2M+ UCI points (Collaborator: Akash).
  4. SentriCam: AI-Powered Real-Time Biometric Surveillance System: Python, TensorFlow, OpenCV 4.x, DeepFace (FaceNet), Flask, SQLite, MJPEG. 100% on-device 30fps facial recognition (Collaborators: Sumukh Bhat, Akash C).
  5. ConvoLens: AI-Powered WhatsApp Chat Analyzer: React 18, TypeScript, Vite, Supabase Edge Functions, Google Gemini 1.5 Flash. Converts WhatsApp .txt exports into JSON summaries of tasks, deadlines, decisions, & owners.
  6. ColorCraft: Efficient Image Colorization Web App: React, Spring Boot, Python (Flask), OpenCV DNN, MySQL. Transforms B&W photos into colorized images.
  7. GitAIR 🎸: Vision-Based Guitar Chord Recognition: Python, OpenCV, MediaPipe, scikit-learn (KNN), pygame. Real-time air guitar chord recognition overlaid on video feed (Collaborator: Anujith S Nayak).
- Contact: abhiram.udupa@gmail.com, GitHub: AbhiramNU, LinkedIn: abhiramnu.
If asked something outside this scope, politely state that you only answer questions regarding Abhiram's software engineering portfolio and projects.`;

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
