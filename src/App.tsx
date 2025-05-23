import { Header } from "./components/Header";
import { Profilo } from "./components/Content";
import projectImage from "./assets/images/project.png";
import profileImage from "./assets/images/theara.jpg";
import projectImage2 from "./assets/images/darsboard3.jpg";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-1 flex justify-center px-2 sm:px-4 pt-16 sm:pt-20">
        <Profilo
          name="រ៉េន ធារ៉ា (Theara Ren)"
          projectName="Theara Ren"
          profileImageSrc={profileImage}
          projects={[
            {
              title:
                "ប្រព័ន្ធគ្រប់គ្រងវត្តមានគ្រូ នៅ សាខាសាកលវិទ្យាល័យបៀលប្រាយ ខេត្តបាត់ដំបង",
              description:
                "ប្រព័ន្ធគ្រប់គ្រងវត្តមានគ្រូ នៅ សាខាសាកលវិទ្យាល័យបៀលប្រាយ ខេត្តបាត់ដំបង គឺជាស្នាដៃបញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រនៅសាកលវិទ្យាល័យបៀលប្រាយ",
              technologies: ["Golang", "React", "TypeScript"],
              link: "https://project-url.com",
              image: projectImage,
            },
            {
              title: "ប្រព័ន្ធគ្រប់គ្រងសិស្ស នៅ សាលាបឋមសិក្សានរា",
              description:
                "ប្រព័ន្ធគ្រប់គ្រងសិស្ស នៅ សាលាបឋមសិក្សានរា គឺជាស្នាដៃបញ្ចប់ការសិក្សាថ្នាក់បរិញ្ញាបត្រនៅសាកលវិទ្យាល័យបៀលប្រាយ",
              technologies: ["PHP", "React", "JSX"],
              link: "https://project-url.com",
              image: projectImage2,
            },
          ]}
          experience={[
            {
              title: "Software Developer",
              company: "Company Name",
              period: "2020 - Present",
              description: "Job description",
            },
          ]}
          languages={[
            {
              name: "Khmer",
              level: "Native",
            },
            {
              name: "English",
              level: "Fluent",
            },
          ]}
          blogPosts={[
            {
              title: "Blog Post Title",
              excerpt: "Blog post excerpt...",
              date: "2024-03-20",
              link: "https://blog-post-url.com",
            },
          ]}
          testimonials={[
            {
              name: "ទ្រី ឈុនហ៊ាង",
              role: "គ្រូបង្រៀន",
              company: "សាកលវិទ្យាល័យបៀលប្រាយ",
              content:
                "ធារ៉ាគឺជានិស្សិតដែលមានសមត្ថភាពខ្ពស់ក្នុងការអភិវឌ្ឍន៍កម្មវិធី។ គាត់មានចំណេះដឹងយ៉ាងជ្រៅជ្រះអំពីបច្ចេកវិទ្យាទំនើប និងមានសមត្ថភាពដ៏ល្អក្នុងការដោះស្រាយបញ្ហា។",
              avatar:
                "https://ui-avatars.com/api/?name=ទ្រី+ឈុនហៀង&background=0D8ABC&color=fff",
            },
            {
              name: "មូន ទិត្យរស្មី",
              role: "អ្នកគ្រប់គ្រងគម្រោង",
              company: "ក្រុមហ៊ុន COSMOSDIGITAL",
              content:
                "ធារ៉ាបានបង្ហាញពីសមត្ថភាពដ៏ល្អក្នុងការអភិវឌ្ឍន៍ប្រព័ន្ធគ្រប់គ្រងវត្តមានគ្រូ។ ការងាររបស់គាត់មានគុណភាពខ្ពស់ និងបានបញ្ចប់ទាន់ពេលវេលា។",
              avatar:
                "https://ui-avatars.com/api/?name=មូន+ទិត្យរស្មី&background=0D8ABC&color=fff",
            },
            {
              name: "អ៊ុំ សុខវណ្ណា",
              role: "អ្នកអភិវឌ្ឍន៍កម្មវិធី",
              company: "ក្រុមហ៊ុន COSMOSDIGITAL",
              content:
                "ធារ៉ាមានចំណេះដឹងយ៉ាងជ្រៅជ្រះអំពី React និង TypeScript។ គាត់ជាអ្នកអភិវឌ្ឍន៍ដ៏មានសមត្ថភាព និងអាចធ្វើការជាមួយក្រុមបានយ៉ាងល្អ។",
              avatar:
                "https://ui-avatars.com/api/?name=អ៊ុំ+សុខវណ្ណា&background=0D8ABC&color=fff",
            },
          ]}
          resumeUrl="https://resume-url.com"
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
