import React, { useState , useEffect } from "react";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  
useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");
      const scrollY = window.scrollY;

      if (projectsSection && scrollY >= projectsSection.offsetTop - 100) {
        setActive("projects");
      } else if (homeSection && scrollY >= homeSection.offsetTop - 100) {
        setActive("home");
      } else if (contactSection && scrollY >= contactSection.offsetTop - 100) {
      setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-white/10 backdrop-blur-sm rounded-b-2xl border-b border-white/20 shadow-xl/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4">
            <div className="w-18 h-18 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold ">
              <img src="public/img/بروفايل.jpg"
              alt="My photo"
              className="h-18 w-18 rounded-full "
               />
            </div>
            <span className="font-bold text-blue-500 hover:text-white hover:tracking-wide transition-all text-2xl ">Ahmed Wheed</span>
            
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">


            <a href="#home" onClick={() => setActive("home")} className={`text-xl font-medium transition duration-200 ${
              active === "home"
                ? "text-white bg-white/5 backdrop-blur-xl border-b border-r border-white/40 px-3 py-1 hover:px-4 hover:py-2 transition-all rounded-full shadow-md scale-105"
                : "text-blue-500 hover:text-white "}`}>Home</a>



            <a href="#projects"
            
            onClick={() => setActive("projects")} className={`text-xl font-medium transition duration-200 ${
              active === "projects"
                ? "text-white bg-white/5 backdrop-blur-xl border-b border-r border-white/40 px-3 py-1 hover:px-4 hover:py-2 transition-all rounded-full shadow-md scale-105"
                : "text-blue-500 hover:text-white "}`}>Projects</a>



            <a href="#contact" onClick={() => setActive("contact")} className={`text-xl font-medium transition duration-200 ${
              active === "contact"
                ? "text-white bg-white/5 backdrop-blur-xl border-b border-r border-white/40 px-3 py-1 hover:px-4 hover:py-2 transition-all rounded-full shadow-md scale-105"
                : "text-blue-500 hover:text-white"}`}>Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md border text-white "
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className= "md:hidden bg-white/10 backdrop-blur-sm border-t border-gray-200 shadow-sm " >
          <div className="px-4 pt-4 pb-6 space-y-3 ">
            <a href="#home" onClick={() => setActive("home")} className={`block text-white transition font-medium ${
              active === "home"
                ? "text-white bg-white/5 backdrop-blur-xl border-b border-r border-white/40 px-3 py-1 hover:px-4 hover:py-2 transition-all rounded-full shadow-md scale-105"
                : "text-blue-500 hover:text-blue-500 hover:font-bold px-3 py-1 rounded-md"}`}>Home</a>


            <a href="#projects" onClick={() => setActive("projects")} className={`block text-white transition font-medium ${
              active === "projects"
                ? "text-white bg-white/5 backdrop-blur-xl border-b border-r border-white/40 px-3 py-1 hover:px-4 hover:py-2 transition-all rounded-full shadow-md scale-105"
                : "text-blue-500 hover:text-blue-500 hover:font-bold px-3 py-1 rounded-md"}`}>Projects</a>

                
            <a href="#contact" onClick={() => setActive("contact")} className={`block text-white transition font-medium ${
              active === "contact"
                ? "text-white bg-white/5 backdrop-blur-xl border-b border-r border-white/40 px-3 py-1 hover:px-4 hover:py-2 transition-all rounded-full shadow-md scale-105"
                : "text-blue-500 hover:text-blue-500 hover:font-bold px-3 py-1 rounded-md"}`}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
