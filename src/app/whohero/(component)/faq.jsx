"use client";

import { useState } from "react";

function Faq() {
  const [open, setOpen] = useState(null);
  
  const faqItems = [
    {
      question: "What is a whois domain lookup?",
      answer: "Web hosting is a service that allows you to store your website's files on the internet, making it accessible to users online.",
    },
    {
      question: "What does the Whois Domain Database Contain?",
      answer: "Shared hosting is ideal for small to medium-sized websites with moderate traffic. It’s affordable and easy to manage.",
    },
    {
      question: "What is a Whois IP Lookup?",
      answer: "Most popular CMS like WordPress, Joomla, and Drupal are compatible with Nest Nepal web hosting.",
    },
    {
      question: "How do I conduct a Whois search?",
      answer: "Choose shared resources for smaller sites. Opt for dedicated resources for higher performance needs and larger websites.",
    },
    {
      question: "How do I Keep my Whois information updated?",
      answer: "cPanel Hosting offers a user-friendly interface for managing your website, with features like email, databases, and file management.",
    },
    {
      question: "What steps can I take to ensure my domain privacy is protected?",
      answer: "Yes, you can migrate your existing website to Nest Nepal’s shared hosting with minimal downtime.",
    },
    {
      question: "Why are some entries hidden in My Whois Domain Lookup?",
      answer: "Yes, you can upgrade your hosting plan as your website grows to accommodate more resources.",
    },
    {
      question: "How do I find available domains through the Whois database?",
      answer: "You can activate your domain and SSL from the control panel provided with your shared hosting plan.",
    },
  
  ];

  return (
    <div className=" container mt-8 ">
      <div className="text-center font-montserrat text-[46.52px] font-bold mb-5">
        <h1>WHOIs related FAQ:</h1>
      </div>
      <div className="container md:w-2/3  font-dmsans text-[22px]">
        {faqItems.map((item, index) => (
          <div key={index} className=" border-t ml-3 border-gray-300 py-4">
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
