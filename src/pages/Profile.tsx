import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 px-3 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl mx-auto space-y-10"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-kantumruy">
            ប្រវត្តិរូប (Profile)
          </h1>
          <p className="text-lg text-gray-300 font-kantumruy mb-4">
            សូមស្វាគមន៍មកកាន់ទំព័រប្រវត្តិរូបរបស់ខ្ញុំ។ នៅទីនេះ
            អ្នកអាចស្វែងយល់បន្ថែមអំពីជំនាញ បទពិសោធន៍ និងការសិក្សារបស់ខ្ញុំ។
          </p>
          <p className="text-base text-gray-400 mb-2">
            Welcome to my profile page. Here you can learn more about my skills,
            experience, and education.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3 font-kantumruy">
            ជំនាញ (Skills)
          </h2>
          <ul className="flex flex-wrap gap-3 text-blue-400 font-medium text-sm">
            <li className="bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              PHP
            </li>
            <li className="bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              React
            </li>
            <li className="bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              TypeScript
            </li>
            <li className="bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              Web Development
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3 font-kantumruy">
            បទពិសោធន៍ (Experience)
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 font-kantumruy">
            <li>សហការីអភិវឌ្ឍន៍កម្មវិធី (Intern Software Developer) - 2023</li>
            <li>ចូលរួមក្នុងគម្រោងបើកចំហ និងសហគមន៍បច្ចេកវិទ្យា</li>
          </ul>
          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
            <li>Intern Software Developer - 2023</li>
            <li>Contributor to open-source projects and tech communities</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3 font-kantumruy">
            ការសិក្សា (Education)
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 font-kantumruy">
            <li>
              Bachelor of Information Technology - University of Battambang
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3 font-kantumruy">
            ទំនាក់ទំនង (Contact)
          </h2>
          <ul className="text-gray-300 font-kantumruy space-y-2">
            <li>Email: theara.dev@gmail.com</li>
            <li>Location: Battambang, Cambodia</li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/iamraulgonzalez"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                iamraulgonzalez
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/theara-ren-59656a29a/"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                theara-ren-59656a29a
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                href="https://twitter.com/iamraulgonzalez"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @iamraulgonzalez
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
