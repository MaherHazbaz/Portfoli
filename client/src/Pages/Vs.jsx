import React from 'react';

const DisplayContent = () => {
  const sections = [
    {
      title: "Introduction",
      content: `
        Problem: Visually impaired individuals face challenges in navigating and accessing information.
        Objective: Develop an Android app to enhance accessibility and independence using real-time object detection and voice feedback.
      `,
    },
    {
      title: "Technologies Used",
      content: `
        - Optical Character Recognition (OCR): Captures and reads text from images.
        - Text-to-Speech (TTS): Converts text data into spoken words.
        - MobileNet-SSD: Lightweight model for efficient, real-time object detection on mobile devices.
        - Google Assistant API: Enables voice commands and natural language processing.
        - TensorFlow: Supports machine learning functionalities for object detection.
      `,
    },
    {
      title: "System Features",
      content: `
        - OCR Module: Reads and speaks text from images.
        - Object Detection Module: Recognizes objects and describes them audibly.
        - Time and Date Module: Provides real-time updates.
        - Battery Module: Monitors and announces battery status.
        - Navigation: Swipe gestures to access features easily.
      `,
    },
    {
      title: "System Architecture",
      content: `
        - User Input: Voice commands and swipe gestures.
        - Voice Assistant: Processes commands and provides spoken feedback.
        - Blind Guide System: Integrates modules for tasks, enhancing navigation and awareness.
      `,
    },
    {
      title: "Advantages of the Proposed System",
      content: `
        - Accessibility: Provides audio feedback for easier interaction.
        - Independence: Enables users to perform tasks without visual cues.
        - Adaptability: Designed for diverse needs and daily navigation.
      `,
    },
    {
      title: "Conclusion",
      content: `
        Summary: VisionMate provides visually impaired users with tools for navigation, object detection, and daily tasks.
        Impact: Voice-guided interface makes smartphone technology accessible and independent.
      `,
    },
    {
      title: "Future Enhancements",
      content: `
        - Language Support: Add multiple languages.
        - Wearable Integration: Compatibility with smart glasses or sensors.
        - Offline Mode: Enable core features without internet.
        - Smart Home Connectivity: Integrate with IoT devices for voice-controlled environments.
      `,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-12">
        VisionMate: Project Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-red-500 mb-4">
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
