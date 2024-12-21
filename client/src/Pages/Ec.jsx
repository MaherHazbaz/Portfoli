import React from 'react';

const DisplayContent = () => {
  const sections = [
    {
      title: "What is MERN Stack?",
      content: `
        - MongoDB: NoSQL database for scalable, high-performance data storage.
        - Express.js: Web framework for handling server-side operations.
        - React.js: Library for building dynamic, interactive user interfaces.
        - Node.js: Runtime environment for running server-side JavaScript.
      `,
    },
    {
      title: "Why MERN Stack?",
      content: `
        - Single Page Applications (SPAs): Seamless user experience.
        - Fast Development: Component-based architecture for rapid prototyping.
        - Scalable and Performant: Handles high traffic with ease.
        - Cost-Effective and Open Source: Ideal for startups and enterprises.
        - Real-Time Applications: Supports chat apps, collaboration tools, and dashboards.
        - eCommerce Platforms: Scalable, interactive online stores.
        - Social Media Apps: Powers apps with dynamic content and user interactions.
      `,
    },
    {
      title: "Key Features of the Project",
      content: `
        - **Homepage**: Displays featured products.
        - **Product Details Page**: Shows product specifications and prices.
        - **Cart Functionality**: Users can add or remove products.
        - **User Login/Signup**: Authentication system for user accounts.
        - **Checkout**: Simple and seamless order checkout process.
      `,
    },
    {
      title: "Technology Stack",
      content: `
        - **Frontend**: Fully responsive design using HTML, CSS, and JavaScript.
        - **Backend**: Node.js handles API requests and server-side logic.
        - **Database**: MongoDB stores user, product, and order data in collections.
      `,
    },
    {
      title: "Development Tools",
      content: `
        - **npm**: Package manager for dependencies.
        - **Postman**: API testing and endpoint interaction.
        - **MongoDB**: Flexible, JSON-like document storage.
      `,
    },
    {
      title: "Tasks Accomplished",
      content: `
        - Login Page: Authentication system with client-side validation.
        - Dashboard: Displays user data, navigation, and interactive components.
        - Fully functional eCommerce platform with CRUD operations for products, users, and cart.
      `,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-12">
        eCommerce Platform with MERN Stack
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
