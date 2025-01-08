"use client"

import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is web hosting and how does it work?", 
      answer: "Web hosting is a service that allows individuals and businesses to make their websites accessible on the internet. At Nest Nepal, as a leading web hosting provider in Nepal, we specialize in providing reliable and secure web hosting solutions tailored to meet the unique needs of our customers. Our services include cloud hosting in Nepal, ensuring high performance and scalability, allowing businesses to seamlessly handle increased web traffic. With our expertise and commitment to delivering top-notch hosting services, we empower businesses in Nepal to establish a strong online presence and reach their target audience effectively. However, here at Nest Nepal, business owners are provided with more than just web hosting services! For example, we employ our own in-house technicians to make sure your websites are up and running 24/7. We also help website owners who are in need of troubleshooting their websites if any problem arises. We are a professional web hosting service provider ensuring that you have a hassle-free experience, so that you can efficiently focus your time and effort on your business and we take care of your website." },
    { question: "What types of web hosting are available at Nest Nepal?",
       answer: "At Nest Nepal, There are different types of web hosting services available, including shared web hosting, Virtual Private Server Hosting aka, VPS Hosting, dedicated hosting, cloud web hosting, Ecommerce Hosting, Managed WordPress Hosting, & Reseller Hosting. Each type of hosting are different in terms of resources assigned, specialty, control, configuration & scalability." },
    { question: "What is VPS Hosting?",
       answer: "VPS Hosting is the type of web hosting which combines the power of Shared Hosting & Dedicated Hosting. It is even called as Virtual Private Server Hosting & It offers greater control, scalability, and performance compared to shared hosting. Users have root access and can install custom software and configure server settings." },
    { question: "What is a dedicated hosting?",
       answer: "Dedicated hosting provides an entire physical server or a bare metal dedicated to a single user or organization. It offers maximum control, customization, and performance over the server. Dedicated hosting is ideal for large websites with high traffic volumes and resource-intensive applications." },
    { question: "What is Cloud Hosting?", 
      answer: "At Nest Nepal, as a trusted web hosting provider in Nepal, we offer cutting-edge cloud hosting solutions designed to elevate your online presence. Our cloud hosting services in Nepal provide the flexibility, scalability, and reliability needed to meet the demands of your growing business. With our state-of-the-art cloud infrastructure and advanced technologies, we ensure optimal performance, enhanced security, and seamless scalability for your website. Experience the power of cloud hosting in Nepal with Nest Nepal and enjoy the benefits of high-speed connectivity, data redundancy, and 24/7 support to fuel your digital success." },
    { question: "What factors should I consider when choosing a web hosting provider?", 
      answer: "When selecting a web hosting provider, Nest Nepal recommends considering the following factors: Reliability and Uptime: Look for a provider that offers a high uptime guarantee, ensuring that your website remains accessible to visitors consistently." },
    { question: "Can I change my web hosting plan if my website grows, and I need more space?", 
      answer: "What is uptime?" },
    { question: "How do I get the domain and SSL that’s included with my shared hosting plan?",
       answer: "Uptime refers to the percentage of time that our web hosting services at Nest Nepal remain operational and accessible to our valued clients. We prioritize uptime reliability, ensuring that your website stays online and available to visitors as much as possible. By guaranteeing a high uptime percentage, we strive to minimize any potential disruptions or downtime that could impact your online presence and business operations. At Nest Nepal, we understand the importance of a reliable hosting service, and our commitment to delivering exceptional uptime ensures that your website can thrive and serve your audience effectively." },
    { question: "What is the Least Expensive type of web hosting?", 
      answer: "If you need a cheap web hosting plan to get started with your online endeavor, then you may want to consider a shared hosting plan. Plans that have contracts for more than a year are usually cheaper on a monthly basis. If you are in need of a quick start in the hosting industry then you should purchase a cheap shared web hosting plan that allows monthly or yearly payments. Using shared hosting has its advantages and disadvantages, however, it is always the most affordable solution, regardless of the situation." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto my-8 p-4">
        <h1 className="text-2xl font-bold mb-6">Web Hosting FAQ:</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>    
    </div>
   
  );
}
