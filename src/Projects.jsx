import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Projects() {
  const projects = [
    {
      id: uuidv4(),
      title: "To-Do-List",
      description: "موقع عملي يحتوي علي قائمة مهام",
      image: "public/img/to do list imege.png",
      demo: "https://ahmed200wheed.github.io/To-Do-List/",
      
    },
    {
      id: uuidv4(),
      title: "Form",
      description: "فورم بسيط يحتوي علي الاسم والعمر ورقم الهاتف وبعض الحقول الاخري مع رسالة تاكيد بعد ارسال البيانات (البيانات لن تذهب لاي مكان هي فقط للتدريب ولن اطلع عليها)",
      image: "public/img/form.png",
      demo: "https://ahmed200wheed.github.io/Form/",
    },
    {
      id: uuidv4(),
      title: "CRUDS",
      description: "(CRUDS) نظام ادارة منتجات ",
      image: "public/img/CRUD Imeg.png",
      demo: " https://ahmed200wheed.github.io/CRUDS/",
    },
  ];

  return (
    <section
      className="w-full h-screen flex flex-col justify-start py-30 md:justify-center "
      id="projects"
    >
      <div className="container m-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          مشاريعي
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
