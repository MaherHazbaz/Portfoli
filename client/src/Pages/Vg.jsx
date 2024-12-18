import React from "react";

const DisplayContent = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "Discover the essence of traditional medicine and natural remedies with our Virtual Herbal Garden. Dive into a 3D interactive experience showcasing medicinal plants from AYUSH systems—Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy.",
    },
    {
      title: "Features",
      content: `
        - Interactive 3D Exploration: Navigate through a virtual space to explore detailed 3D models of medicinal plants.
        - Comprehensive Details: Learn about each plant’s medicinal uses, benefits, and cultural significance.
        - Dynamic Learning: Engage with a modern platform combining technology and traditional knowledge.
      `,
    },
    {
      title: "Tech Stack",
      content: `
        - Frontend: React.js, Three.js, React Three Fiber, Tailwind CSS, Framer Motion
        - Backend: Node.js, Express.js, MongoDB/PostgreSQL
        - 3D Design: GLTF models created using Blender
      `,
    },
    {
      title: "Why Choose This Platform?",
      content: `
        - Educational Value: Learn about natural remedies and traditional medicine in an engaging format.
        - Health and Wellness: Empower yourself with knowledge about herbal-based wellness practices.
        - Environmental Impact: Advocate for sustainability and conservation of medicinal plants.
      `,
    },
    {
      title: "Target Audience",
      content: `
        - Students & Educators: Enhance learning in natural sciences, botany, and AYUSH systems.
        - Health Enthusiasts: Gain insights into herbal self-care and alternative medicine.
        - Medical Practitioners: Utilize as a reference and educational tool.
        - Tourism & Culture Enthusiasts: Appreciate the heritage of AYUSH systems.
      `,
    },
    {
      title: "Impact",
      content: `
        - Health Benefits: Promotes awareness of herbal wellness practices.
        - Cultural Preservation: Encourages appreciation for traditional medicinal knowledge.
        - Environmental Awareness: Advocates for conservation of endangered medicinal plants.
        - Interactive Learning: Combines education with immersive digital experiences.
      `,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-12">
        Virtual Herbal Garden: Project Overview
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-green-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayContent;
