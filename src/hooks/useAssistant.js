import { useState } from 'react';

export const useAssistant = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I am your portfolio AI assistant. You have 3 queries. How can I help?", sender: "ai" }
  ]);
  const [queryCount, setQueryCount] = useState(0);

  const sendMessage = (text) => {
    if (queryCount >= 3) return;

    setMessages(prev => [...prev, { text, sender: "user" }]);
    const nextCount = queryCount + 1;
    setQueryCount(nextCount);

    setTimeout(() => {
      let reply = "I'm sorry, I don't understand that command. Try 'about' or 'skills'.";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes("skill")) reply = "I specialize in React, Tailwind CSS, and modern web architectures. Open skills.ts to see the full stack!";
      else if (lowerText.includes("project")) reply = "I've built robust systems like this VS Code portfolio simulator. See projects.json for more references.";
      else if (lowerText.includes("contact")) reply = "You can reach me out at hello@developer.com! Find more in contact.js.";
      else if (lowerText.includes("about")) reply = "I'm a passionate Senior Frontend Engineer focused on performant and stunning UIs.";

      if (nextCount >= 3) {
        reply += " (Query limit reached. Restart IDE to refresh limits.)";
      }

      setMessages(prev => [...prev, { text: reply, sender: "ai" }]);
    }, 600);
  };

  return { messages, sendMessage, queryCount, limitReached: queryCount >= 3 };
};
