"use client";

import { useState } from "react";

function Faq() {
  const [open, setOpen] = useState(null);
  
  const faqItems = [
    {
      question: "What is web hosting and how does it work?",
      answer: "Web hosting is a service that allows you to store your website's files on the internet, making it accessible to users online.",
    },
    {
      question: "Is shared hosting the right type of web hosting for my site?",
      answer: "Shared hosting is ideal for small to medium-sized websites with moderate traffic. It’s affordable and easy to manage.",
    },
    {
      question: "What content management systems are compatible with Nest Nepal web hosting?",
      answer: "Most popular CMS like WordPress, Joomla, and Drupal are compatible with Nest Nepal web hosting.",
    },
    {
      question: "When do you choose shared or dedicated vCPU and RAM resources?",
      answer: "Choose shared resources for smaller sites. Opt for dedicated resources for higher performance needs and larger websites.",
    },
    {
      question: "What is cPanel Hosting and what are its benefits?",
      answer: "cPanel Hosting offers a user-friendly interface for managing your website, with features like email, databases, and file management.",
    },
    {
      question: "Can I migrate my existing website to Nest Nepal’s shared web hosting?",
      answer: "Yes, you can migrate your existing website to Nest Nepal’s shared hosting with minimal downtime.",
    },
    {
      question: "Can I change my web hosting plan if my website grows, and I need more space?",
      answer: "Yes, you can upgrade your hosting plan as your website grows to accommodate more resources.",
    },
    {
      question: "How do I get the domain and SSL that’s included with my shared hosting plan?",
      answer: "You can activate your domain and SSL from the control panel provided with your shared hosting plan.",
    },
    {
      question: "What is AutoSSL and how does it work?",
      answer: "AutoSSL automatically installs and renews SSL certificates for your domains, ensuring secure connections.",
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
