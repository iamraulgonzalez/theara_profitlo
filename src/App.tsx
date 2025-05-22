import { Header } from "./components/Header";
import { Profilo } from "./components/Content";

import profileImage from "./assets/images/theara.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-1 flex justify-center px-2 sm:px-4 pt-16 sm:pt-20">
        <Profilo
          name="រ៉េន ធារ៉ា"
          projectName="Theara Ren"
          profileImageSrc={profileImage}
        />
      </main>
      <footer className="text-center text-gray-500 py-3 sm:py-4 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto">
          &copy; {new Date().getFullYear()} Theara Ren. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
