// TitleGenerator.js

import { useState } from 'react';
import chatGPT3_5Turbo from '../pages/chatGPT3_5Turbo';
import '../styles/titleGenerator.css'; // Import the CSS file

const TitleGenerator = () => {
  const [topic, setTopic] = useState('');
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateTitles = async () => {
    setIsLoading(true);
    try {
      // Define the conversation with the assistant
      const messages = [
        { role: "system", content: "You are an assistant that suggests video titles." },
        { role: "user", content: `Generate video titles for the topic "${topic}"` }
      ];

      // Use the chatGPT3_5Turbo function to get title suggestions
      const assistantReply = await chatGPT3_5Turbo(messages);

      // Split the assistant's reply into an array of titles
      const generatedTitles = assistantReply.split('\n').filter(title => title.trim() !== '');

      setTitles(generatedTitles);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2>Title Generator</h2>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
      />
      <button onClick={generateTitles} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Titles'}
      </button>
      <div>
        <h3>Generated Titles:</h3>
        <ul>
          {titles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TitleGenerator;
