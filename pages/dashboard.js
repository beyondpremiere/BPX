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
