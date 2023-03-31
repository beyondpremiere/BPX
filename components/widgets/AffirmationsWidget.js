// AffirmationsWidget.js
import { useState, useEffect } from 'react';

export default function AffirmationsWidget() {
  // State to store the generated affirmation
  const [affirmation, setAffirmation] = useState('');

  // Fetch an affirmation from ChatGPT 3.5 Turbo
  const fetchAffirmation = async () => {
    try {
      // Define the message input for ChatGPT 3.5 Turbo
      const message = {
        role: 'system',
        content: 'You are an AI that provides positive affirmations.'
      };

      // Call the chat_gpt_3_5_turbo function to interact with the model
      const response = await chat_gpt_3_5_turbo(message);

      // Extract the affirmation from the response
      const generatedAffirmation = response.messages[1].content;

      // Set the affirmation in the state
      setAffirmation(generatedAffirmation);
    } catch (error) {
      console.error('Failed to fetch affirmation:', error);
    }
  };

  // Fetch an affirmation when the component mounts
  useEffect(() => {
    fetchAffirmation();
  }, []);

  return (
    <div>
      <h3>Daily Affirmation</h3>
      <p>{affirmation || 'Loading...'}</p>
    </div>
  );
}
