import React from 'react';

const DisplayContent = () => {
    const sections = [
        {
            title: "Introduction",
            content: `
        Translatify is a media player with live audio translation designed to break language barriers.
        Built with React Native, it allows users to play audio and video files while providing real-time audio translation into multiple languages.
        The system integrates Speech-to-Text (STT) and Text-to-Speech (TTS) APIs to convert, translate, and output audio seamlessly.
      `,
        },
        {
            title: "Objectives",
            content: `
        - Develop a cross-platform media player with real-time translation.
        - Implement live speech recognition to extract audio from media files.
        - Use AI-based translation APIs for multilingual support.
        - Provide an intuitive UI/UX with smooth playback controls.
        - Ensure low latency in audio translation for a seamless experience.
      `,
        },
        {
            title: "Problem Statement",
            content: `
        - Traditional media players only support subtitles, requiring pre-generated captions.
        - No real-time audio translation capabilities.
        - Users need to manually search for translations or rely on third-party apps.
        - Limited multilingual accessibility for audio/video content.
      `,
        },
        {
            title: "Proposed System",
            content: `
        - A React Native-based media player with integrated translation.
        - Uses Speech-to-Text (STT) and Text-to-Speech (TTS) APIs for live audio conversion.
        - Supports multiple languages for translation.
        - Provides low-latency playback to synchronize translated audio with video.
        - Offers a user-friendly interface with smooth media control.
      `,
        },
        {
            title: "Technologies Used",
            content: `
        - Programming Language: JavaScript, React Native
        - Frameworks/Libraries: Expo, React Native Video, Tailwind CSS
        - APIs: Google Speech-to-Text, Google Translate API, AWS Polly (TTS)
        - Database: Firebase/SQLite (if needed for user settings)
        - Development Tools: VS Code, Android Studio, Xcode
      `,
        },
        {
            title: "Software & Hardware Requirements",
            content: `
        - Processor: Minimum Intel i5 / AMD Ryzen 5
        - RAM: 8GB or Higher
        - Storage: 20GB Free Space for Development & Testing
        - Devices: Android/iOS Smartphone for Testing, PC/Laptop for Development
        - Audio Hardware: Microphone for Speech Recognition Testing
      `,
        },
        {
            title: "Conclusion",
            content: `
        Translatify aims to enhance media accessibility by integrating real-time translation into media playback.
        By leveraging AI-based STT and TTS APIs, it provides a seamless, multilingual experience for users worldwide.
      `,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-blue-600 text-center mb-12">
                Translatify: Project Overview
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-xl font-semibold text-blue-500 mb-4">
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
