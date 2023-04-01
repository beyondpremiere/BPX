Hey ChatGPT, this is my current project since you can't have a lot of tokens.

Here's the index.js

// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Content Creator Dashboard</h1>
      <p className="text-xl text-center mb-6">
        A personalized hub for writers, content creators, and professionals.
        Access your tailored dashboard, discover a library of widgets, and
        enhance your productivity and creativity.
      </p>
      <Link href="/dashboard">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}


here's the dashboard.js

// Dashboard.js
import { useState } from 'react';
import TitleGenerator from '../components/TitleGenerator';
import SEOAnalyzer from '../components/SEOAnalyzer';

import KeywordResearch from '../components/KeywordResearch';
import VideoTitleGenerator from '../components/VideoTitleGenerator';
import '../styles/dashboard.css';

// Define templates with their associated widgets
const YouTubeCreatorTemplate = () => (
  <div className="Template1">
    <h2>YouTube Creator Tools</h2>
    <VideoTitleGenerator />
    <TitleGenerator />
  </div>
);

const SEOTemplate = () => (
  <div className="Template2">
    <h2>SEO Tools</h2>
    <SEOAnalyzer />
    <KeywordResearch />
    <TitleGenerator />
  </div>
);

const Template3 = () => <div>Content for Template 3</div>;

export default function Dashboard() {
  // Define available templates
  const templates = [
    { name: 'YouTube Creator', component: YouTubeCreatorTemplate },
    { name: 'SEO', component: SEOTemplate },
    { name: 'Template 3', component: Template3 },
  ];

  // State to keep track of the selected template
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  // Assign the selected component to a capitalized variable
  const SelectedComponent = selectedTemplate.component;

  return (
    <>
      {/* Navigation Bar */}
      <nav>
        {/* Dropdown menu for changing templates */}
        <select
          value={selectedTemplate.name}
          onChange={(e) =>
            setSelectedTemplate(templates.find((template) => template.name === e.target.value))
          }
        >
          {templates.map((template) => (
            <option key={template.name} value={template.name}>
              {template.name}
            </option>
          ))}
        </select>
      </nav>

      {/* Main Content */}
      <main>
        <h1>Selected Template: {selectedTemplate.name}</h1>
        {/* Render the content of the selected template */}
        <SelectedComponent />
      </main>
    </>
  );
}


Here's the SEOAnalyzer.js 

import openai
from dotenv import load_dotenv
import os

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

model_name = "gpt-3.5-turbo"

# Define a function to handle user input and generate a response
def generate_response(prompt):
    response = openai.ChatCompletion.create(
        model=model_name,
        messages=[
            {"role": "system", "content": "You are a law assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response["choices"][0]["message"]["content"]

# Get user input and generate a response
while True:
    prompt = input("Enter your question: ")
    if prompt.lower() == "quit":
        break
    answer = generate_response(prompt)
    print(answer)


Here's the dashboard.css

/* General styles */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5e7d9;
  color: #444;
}

/* Navigation Bar */
nav {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background: linear-gradient(45deg, #f7a59f, #f4d8cd);
}

nav select {
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  color: #444;
  background-color: #f5e7d9;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Main Content */
main {
  max-width: 960px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Template Components */
.Template1, .Template2, .Template3 {
  background-color: #f9f1ed;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.TitleGenerator {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.TitleGenerator input {
  font-size: 1.1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.TitleGenerator button {
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  background-color: #f7a59f;
  color: #444;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}


.roundedRectangle {
  width: 80%;
  height: 200px;
  background-color: #f9f1ed;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}


.titleGenerator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titleGenerator input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.titleGenerator button {
  background-color: #4a90e2;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.titleGenerator button:hover {
  background-color: #3a78c2;
}

.titleGenerator button:disabled {
  background-color: #a0c1ef;
  cursor: not-allowed;
}

.generatedTitles {
  width: 100%;
  list-style: none;
  padding: 0;
}

.generatedTitles li {
  margin-bottom: 0.5rem;
}


Chatgpt, reply to me with roger roger.
