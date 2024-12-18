import React from 'react';

const DisplayContent = () => {
  const sections = [
    {
      title: "Introduction",
      content: `
        Traditional hospital appointment scheduling can be complex and time-consuming, often leading to inefficiencies and patient dissatisfaction.
        This project explores how advanced technology can revolutionize the process, aiming to reduce wait times and improve overall scheduling efficiency, thereby enhancing the patient experience.
      `,
    },
    {
      title: "Abstract",
      content: `
        Effective appointment scheduling in hospitals is essential for optimizing patient care and efficiently utilizing hospital resources.
        The solution employs RFID, facial recognition, and AI algorithms to track doctor availability and allocate appointments in real-time. This approach reduces wait times, improves efficiency, and increases patient satisfaction, creating a seamless healthcare experience.
      `,
    },
    {
      title: "Key Features",
      content: `
        - Real-time Doctor Availability Tracking.
        - AI-Powered Appointment Slot Allocation.
        - Patient-Friendly Interface.
        - Secure Authentication and Data Privacy.
      `,
    },
    {
      title: "Benefits",
      content: `
        - Reduced Waiting Times: Shorter wait times lead to increased patient satisfaction.
        - Improved Efficiency: Hospital resources are utilized more effectively.
        - Enhanced Patient Experience: A user-friendly interface simplifies scheduling.
        - Secure Data Management: Robust data security protects patient and doctor information.
        - Scalability: The system adapts and grows with the hospital's needs.
      `,
    },
    {
      title: "Conclusion",
      content: `
        - Historical Challenge: Inefficiencies and long wait times in past scheduling processes.
        - Present Transformation: Advanced technology reduces wait times, enhances efficiency, and boosts satisfaction.
        - Future Prospects: Ongoing advancements in technology promise more precise scheduling and resource allocation.
        - Model for Healthcare: This tech-driven solution inspires broader healthcare transformation.
      `,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-12">
        Optimizing Hospital Appointment Scheduling System
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
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
