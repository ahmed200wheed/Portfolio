import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center py-32 md:py-40"

    >
      {/* خلفية زجاجية خفيفة */}

      <div className="relative z-10 w-full max-w-2xl text-white text-center">
        <h2 className="text-4xl font-bold mb-10">تواصل معايا</h2>

        <div className="flex flex-col gap-6">
          {[
            {
              icon: <FacebookOutlinedIcon fontSize="large" />,
              color: "hover:text-blue-400",
              text: "My Facebook",
              link: "https://www.facebook.com/ahmed.wheed.426925",
            },
            {
              icon: <InstagramIcon fontSize="large" />,
              color: "hover:text-pink-400",
              text: "My Instagram",
              link: "https://www.instagram.com/abo__wheed/",
            },
            {
              icon: <GitHubIcon fontSize="large" />,
              color: "hover:text-gray-300",
              text: "My Github",
              link: "https://github.com/ahmed200wheed",
            },
            {
              icon: <EmailIcon fontSize="large" />,
              color: "hover:text-red-400",
              text: "ahmedwheed200@gmail.com",
            },
            {
              icon: <WhatsAppIcon fontSize="large" />,
              color: "hover:text-green-400",
              text: "01553218014",
              link: "https://wa.me/+201553218014",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between sm:justify-start gap-4 bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 rounded-2xl px-6 py-4 shadow-md backdrop-blur-sm ${item.color}`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg break-all">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
