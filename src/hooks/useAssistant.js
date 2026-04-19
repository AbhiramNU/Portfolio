import { useState } from 'react';

export const useAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I am Abhiram's portfolio Copilot. You have 3 queries. Ask me about his tech stack or projects!", sender: "ai" }
  ]);
  const [queryCount, setQueryCount] = useState(0);

  const sendMessage = (text) => {
    if (queryCount >= 3) return;

    setMessages(prev => [...prev, { text, sender: "user" }]);
    const nextCount = queryCount + 1;
    setQueryCount(nextCount);

    setTimeout(() => {
      let reply = "I'm sorry, I don't quite understand. Try asking about Abhiram's 'skills', 'projects', or how to 'support' him.";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("support")) reply = "If you want to support Abhiram, feel free to check out his LinkedIn or GitHub in the contact.css tab, or reach out at abhiramnudupa@gmail.com! Every bit helps.";
      else if (lowerText.includes("stack") || lowerText.includes("skill")) reply = "Abhiram's tech stack is quite diverse. He's skilled in Python, FastAPI, and React for backend/frontend work. He also works with GenAI technologies like LangChain and RAG pipelines, plus tools like Docker and PostgreSQL. Check the skills.json tab!";
      else if (lowerText.includes("project")) reply = "He's built robust systems like VoltStrata Energy Intel, SentriCam Dashboard, and PaperSmith Templates! See projects.js for a deep dive.";
      else if (lowerText.includes("contact")) reply = "You can reach him directly at abhiramnudupa@gmail.com or via the secure form in contact.css.";
      else if (lowerText.includes("about") || lowerText.includes("who")) reply = "Abhiram is a software developer from NMAMIT focused on building genuinely intelligent and scalable AI & backend systems. Open about.html to learn more!";
      else if (lowerText.includes("edu") || lowerText.includes("college")) reply = "He studies Computer Science with a minor in AI/ML at NMAMIT (2021-2025).";

      if (nextCount >= 3) {
        reply += " (Query limit reached. Restart IDE to refresh limits.)";
      }

      setMessages(prev => [...prev, { text: reply, sender: "ai" }]);
    }, 600);
  };

  return { messages, sendMessage, queryCount, limitReached: queryCount >= 3 };
};
