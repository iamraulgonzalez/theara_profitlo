import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProfiloProps {
  name: string;
  projectName: string;
  profileImageSrc: string;
  role?: string;
  skills?: string[];
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  email?: string;
  location?: string;
  education?: string;
}

export const Profilo: React.FC<ProfiloProps> = ({
  name,
  projectName,
  profileImageSrc,
  role = "Software Developer",
  skills = ["PHP", "React", "TypeScript", "Web Development"],
  socialLinks = {
    github: "https://github.com/iamraulgonzalez",
    linkedin: "https://www.linkedin.com/in/theara-ren-59656a29a/",
    twitter: "https://twitter.com/iamraulgonzalez",
  },
  email = "theara.dev@gmail.com",
  location = "Battambang, Cambodia",
  education = "Bachelor of Information Technology",
}) => {
  // Fallback for image error
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 px-3 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center justify-between">
          {/* Content Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-5 order-2 md:order-1"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Header Section */}
              <div className="border-b border-white/10 pb-4 sm:pb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 font-kantumruy tracking-tight">
                  {name}
                </h1>
                <p className="text-lg sm:text-xl text-blue-400 mb-3 sm:mb-4 font-kantumruy">
                  {role}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                  {location && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {location}
                    </div>
                  )}
                  {email && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {email}
                    </div>
                  )}
                  {education && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                      {education}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8 text-gray-300">
                {/* About Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-kantumruy flex items-center gap-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    អំពីខ្ញុំ (About Me)
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed font-kantumruy">
                    សួស្ដី! ខ្ញុំបាទឈ្មោះ{" "}
                    <span className="text-blue-400 font-semibold">{name}</span>។
                    ខ្ញុំជានិស្សិតបច្ចេកវិទ្យាព័ត៌មានដែលមានចំណង់ចំណូលចិត្តយ៉ាងខ្លាំងក្នុងការអភិវឌ្ឍន៍កម្មវិធី
                    និងការរចនាប្រព័ន្ធវេបសាយប្រកបដោយប្រសិទ្ធភាព។
                  </p>
                </div>

                {/* Project Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-kantumruy flex items-center gap-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    គម្រោង (Project)
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed font-kantumruy">
                    គម្រោង{" "}
                    <span className="text-blue-400 font-semibold">
                      {projectName}
                    </span>
                    ត្រូវបានបង្កើតឡើងដើម្បីជួយឱ្យអ្នកយល់ដឹងពីខ្លួនឯងកាន់តែប្រសើរ
                    តាមរយៈការតាមដានទម្លាប់ និងវិភាគទិន្នន័យប្រចាំថ្ងៃ។
                    វាជួយឱ្យអ្នកស្វែងយល់ពីអ្វីដែលសំខាន់សម្រាប់ខ្លួនឯង
                    និងអភិវឌ្ឍខ្លួនឯងឲ្យកាន់តែប្រសើរ។
                  </p>
                </div>

                {/* Skills Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-kantumruy flex items-center gap-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    ជំនាញ (Skills)
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors font-medium flex items-center gap-1.5 sm:gap-2"
                      >
                        {skill === "PHP" && (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-9h3v9zm6 0h-3v-9h3v9z"
                              fill="#777BB4"
                            />
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-9h3v9zm6 0h-3v-9h3v9z"
                              fill="#777BB4"
                            />
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-9h3v9zm6 0h-3v-9h3v9z"
                              fill="#777BB4"
                            />
                          </svg>
                        )}
                        {skill === "React" && (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                              fill="#61DAFB"
                            />
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                              fill="#61DAFB"
                            />
                          </svg>
                        )}
                        {skill === "TypeScript" && (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-9h3v9zm6 0h-3v-9h3v9z"
                              fill="#3178C6"
                            />
                            <path
                              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-9h3v9zm6 0h-3v-9h3v9z"
                              fill="#3178C6"
                            />
                          </svg>
                        )}
                        {skill === "Web Development" && (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-kantumruy flex items-center gap-2">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    ទំនាក់ទំនង (Contact)
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {socialLinks.github && (
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-xs sm:text-sm"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors text-xs sm:text-sm"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {socialLinks.twitter && (
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors text-xs sm:text-sm"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.46 5.92c-.8.36-1.67.6-2.58.71a4.48 4.48 0 001.97-2.48 8.94 8.94 0 01-2.83 1.08 4.48 4.48 0 00-7.63 4.08A12.72 12.72 0 013 4.89a4.48 4.48 0 001.39 5.98c-.7-.02-1.36-.21-1.94-.53v.05a4.48 4.48 0 003.6 4.4c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 004.18 3.11A9 9 0 012 19.54a12.72 12.72 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58A9.22 9.22 0 0024 4.59a8.93 8.93 0 01-2.54.7z" />
                        </svg>
                        Twitter
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-gray-400 italic font-kantumruy">
                  ខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការចំណាយពេលទស្សនាគេហទំព័រនេះ។
                  ខ្ញុំសង្ឃឹមយ៉ាងមុតមាំថាគម្រោងនេះនឹងផ្ដល់អត្ថប្រយោជន៍
                  និងឆ្លើយតបទៅនឹងតម្រូវការរបស់លោកអ្នកបានយ៉ាងពេញលេញ។
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image Section - Right Side */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-7 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative">
              {/* Animated Gradient Ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full blur-xl animate-spin-slow bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"></div>

              {/* Main Image Container with Drop Shadow */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-white/10 shadow-xl">
                <div className="relative aspect-square w-48 sm:w-64 md:w-72 lg:w-80 overflow-hidden rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 rounded-full"></div>
                  {!imgError ? (
                    <img
                      src={profileImageSrc}
                      alt={`${name}'s profile picture`}
                      aria-label={`${name}'s profile picture`}
                      className="w-full h-full object-contain transform hover:scale-105 transition duration-700"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center text-5xl font-bold text-blue-400 bg-gray-800 rounded-full select-none">
                      {initials}
                    </span>
                  )}
                </div>

                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/20"></div>
                <div className="absolute inset-2 rounded-full border border-purple-400/20"></div>
              </div>

              {/* Quick Info Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {location}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
