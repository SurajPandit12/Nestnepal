"use client";

import { useState } from "react";

function Faq() {
  const [open, setOpen] = useState(null);
  
  const faqItems = [
    {
      question: "What does Nest Nepal offer as a free website migration service?",
      answer: "Web hosting is a service that allows you to store your website's files on the internet, making it accessible to users online.",
    },
    {
      question: "How do I request a free website migration with Nest Nepal?",
      answer: "Shared hosting is ideal for small to medium-sized websites with moderate traffic. It’s affordable and easy to manage.",
    },
    {
      question: "Are there any hidden fees associated with the free website migration?",
      answer: "Most popular CMS like WordPress, Joomla, and Drupal are compatible with Nest Nepal web hosting.",
    },
    {
      question: "Will my website data be safe during the migration process?",
      answer: "Choose shared resources for smaller sites. Opt for dedicated resources for higher performance needs and larger websites.",
    },
    {
      question: "What happens after migration when some issues are faced?",
      answer: "cPanel Hosting offers a user-friendly interface for managing your website, with features like email, databases, and file management.",
    },

  ];

  return (
    <div className=" container mt-8 ">
      <div className="text-center font-montserrat text-[46.52px] font-bold mb-5">
        <h1>Web Hosting FAQ</h1>
      </div>
      <div className="container w-2/3  font-dmsans text-[22px]">
        {faqItems.map((item, index) => (
          <div key={index} className=" border-b border-gray-300 py-4">
            <div
              onClick={() => setOpen(open === index ? null : index)}
              className="cursor-pointer flex justify-between  items-center"
            >
              <span className="max-w-[590px] font-dmsans">{item.question}</span>
              <img
                className={`transform transition-transform duration-300 h-6 w-6 ${
                  open === index ? "rotate-180" : "rotate-0"
                }`}
                src="arrows.png"
                alt="Toggle Arrow"
              />
            </div>
            {open === index && (
              <div className=" mt-2 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
