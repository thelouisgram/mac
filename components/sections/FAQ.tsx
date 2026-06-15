"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  // State tracking for the open accordion item (defaults to the first item open as shown in image_f2b1df.jpg)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Through strategic SEO (Search Engine Optimization), content marketing, and targeted advertising, digital marketing positions your brand where your customers are searching, structurally lifting your organic search footprints.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "While paid campaigns can generate immediate traffic, organic strategies like SEO and content brand authority typically yield compound, sustainable returns over a window of 3 to 6 months.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success is quantified utilizing core key performance indicators (KPIs) including conversion rates, cost-per-acquisition (CPA), qualified return on ad spend (ROAS), and structured growth in organic traffic metrics.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F6F6F6] text-brand-dark font-sans antialiased selection:bg-lime-200 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* INNER WHITE WRAPPER CARD */}
        <div className="bg-white rounded-4xl p-8 md:p-16 shadow-[0_4px_30px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading and Action Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full top-8">
            <div>
              <h2 className="text-4xl md:text-[42px] font-bold tracking-tight text-brand-dark leading-tight">
                Digital Marketing FAQs
              </h2>
              <p className="mt-4 text-neutral-400 text-sm md:text-base leading-relaxed max-w-md font-medium">
                As a leading digital marketing agency, we are dedicated to
                providing comprehensive educational resources and answering
                frequently asked questions to help our clients.
              </p>
              {/* CTA Interaction Row */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 rounded-full border border-[#010205] text-[#010205] text-xs font-semibold hover:bg-[#010205] hover:text-white transition-all duration-200 hover:cursor">
                  More Questions
                </button>
                <button className="px-6 py-3 text-[#010205] text-xs font-bold hover:text-neutral-600 transition-colors underline hover:cursor">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Hierarchy */}
          <div className="lg:col-span-6 w-full flex flex-col border-b border-t pt-6">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b py-6 first:pt-0 last:border-b-0"
                >
                  {/* Accordion Trigger Header Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left gap-4 group"
                  >
                    <span className="text-base md:text-lg font-bold text-brand-dark tracking-tight transition-colors group-hover:text-neutral-700">
                      {item.question}
                    </span>
                    <span className="shrink-0 text-brand-dark transition-transform duration-200">
                      {isOpen ? (
                        <Minus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Body Content Wrapper */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-neutral-500 text-xs md:text-sm leading-relaxed max-w-2xl font-medium">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
