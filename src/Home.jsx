export default function Home() {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center md:px-20 py-16 md:justify-start md:py-64 ">
      <div dir="rtl" className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* اليمين */}
        <div className="md:text-right md:flex md:flex-col md:gap-6">
          <h1 className="text-[3.2em] leading-[1.1] md:text-7xl font-bold mb-4">
            أهلاً، أنا أحمد وحيد
          </h1>
          <p className="text-4xl font-bold text-center md:text-5xl md:text-right text-blue-500  mb-6">
            Front-End Developer
          </p>
          
        </div>

        {/* الشمال */}
        <div dir="rtl" className="text-left">
          <p className="text-lg text-right md:text-2xl text-white leading-relaxed">
            أنا مطور واجهات أمامية (Front-End) متخصص في React و TailwindCSS.  
            عندي خبرة في تصميم مواقع سريعة، متجاوبة، وسهلة الاستخدام.  
            بحب أركز على التفاصيل، وأخلي تجربة المستخدم ممتعة وسلسة.
          </p>
          
        </div>

        <div className="flex md:flex-row flex-col md:justify-start md:gap-36 justify-around mt-15 md:mt-60 w-full gap-3 ">
            <a
              href="#projects"
              className="px-6 py-3 w-full md:w-64 rounded-xl bg-blue-600 text-white md:text-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              شوف أعمالي
            </a>
            <a
              href="#contact"
              className="px-6 py-3 w-full md:w-64 rounded-xl bg-gray-100 text-gray-900 md:text-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              تواصل معايا
            </a>
          </div>
      </div>
    </section>
  );
}
