// components/MotivationalQuoteGenerator.js
import { useState } from 'react';
import chatGPT3_5Turbo from './chatGPT3_5Turbo'; // Import the chatGPT3_5Turbo function

export default function MotivationalQuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    // Define the system and user messages for ChatGPT 3.5 Turbo
    const messages = [
      { role: 'system', content: 'You are a motivational assistant that generates inspiring quotes.' },
      { role: 'user', content: 'Generate an inspiring quote for me.' }
    ];

    // Call ChatGPT 3.5 Turbo to generate the motivational quote
    const generatedQuote = await chatGPT3_5Turbo(messages);
    setQuote(generatedQuote);
    setLoading(false);
  };

  return (
    <div>
      <h2>Motivational Quote Generator</h2>
      <button onClick={handleClick}>Generate Quote</button>

      {loading && <p>Loading...</p>}

      {quote && (
        <div>
          <h3>Quote:</h3>
          <p>{quote}</p>
        </div>
      )}
    </div>
  );
}
