import { motion } from "framer-motion";

export default function About() {
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
            អំពីខ្ញុំ (About Me)
          </h1>
          <p className="text-lg text-gray-300 font-kantumruy mb-4">
            សួស្ដី! ខ្ញុំបាទឈ្មោះ រ៉េន ធារ៉ា។
            ខ្ញុំជានិស្សិតបច្ចេកវិទ្យាព័ត៌មានដែលមានចំណង់ចំណូលចិត្តក្នុងការអភិវឌ្ឍន៍កម្មវិធី
            និងការរចនាប្រព័ន្ធវេបសាយ។
          </p>
          <p className="text-base text-gray-400 mb-2">
            Hello! My name is Theara Ren. I am an IT student passionate about
            software development and web system design.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3 font-kantumruy">
            ប្រវត្តិរូបសង្ខេប (Summary)
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 font-kantumruy">
            <li>កំពុងសិក្សា៖ Bachelor of Information Technology</li>
            <li>ទីតាំង៖ Battambang, Cambodia</li>
            <li>ជំនាញ៖ PHP, React, TypeScript, Web Development</li>
            <li>សមាជិកសហគមន៍បច្ចេកវិទ្យា និងចូលរួមក្នុងគម្រោងបើកចំហ</li>
          </ul>
          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
            <li>Currently studying: Bachelor of Information Technology</li>
            <li>Location: Battambang, Cambodia</li>
            <li>Skills: PHP, React, TypeScript, Web Development</li>
            <li>Active in tech communities and open-source projects</li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-3 font-kantumruy">
            ព័ត៌មានបន្ថែម (Fun Facts)
          </h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 font-kantumruy">
            <li>ចូលចិត្តសរសេរកូដ និងស្វែងយល់បច្ចេកវិទ្យាថ្មីៗ</li>
            <li>ស្រលាញ់ការសហការជាក្រុម និងចូលរួមសកម្មភាពសង្គម</li>
          </ul>
          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
            <li>Loves coding and exploring new technologies</li>
            <li>Enjoys teamwork and participating in social activities</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
