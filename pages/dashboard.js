import { useState } from 'react';
import TitleGenerator from '../components/TitleGenerator';
import '../styles/dashboard.css'; // Import the CSS file with the correct relative path

// Separate the template components into their own functional components
const Template1 = () => (
  <div className="roundedRectangle">
    <TitleGenerator />
  </div>
);
const Template2 = () => <div>Content for Template 2</div>;
const Template3 = () => <div>Content for Template 3</div>;

export default function Dashboard() {
  // Define available templates
  const templates = [
    { name: 'Template 1', component: Template1 },
    { name: 'Template 2', component: Template2 },
    { name: 'Template 3', component: Template3 },
  ];

  // State to keep track of the selected template
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

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
        <selectedTemplate.component />
      </main>
    </>
  );
}
