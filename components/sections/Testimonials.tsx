"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { name: "All Work", count: 20 },
    { name: "UI/UX Design", count: 10 },
    { name: "Digital Marketing", count: 5 },
    { name: "Branding", count: 5 },
  ];

  // Dynamically calculate slide positions on scroll interaction
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    // 340px (max-w-85) + 24px (gap-6) = 364px per card step
    const cardStep = 340 + 24;
    const newIndex = Math.round(scrollLeft / cardStep);

    setActiveIndex(Math.max(0, Math.min(4, newIndex)));
  };

  // Allow clicking on a liquid pagination dot to slide the carousel natively
  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardStep = 340 + 24;
    scrollRef.current.scrollTo({
      left: index * cardStep,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="bg-white text-brand-dark font-sans antialiased selection:bg-lime-200 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* PORTFOLIO CONTAINER (DARK CARD) */}
        <div className="bg-[#0A0B0D] rounded-4xl py-8 md:py-16 text-white overflow-hidden">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14 px-8 md:px-16">
            <h2 className="text-2xl md:text-[44px] font-medium tracking-tight leading-[1.2]">
              Real-world examples of how we have helped companies achieve their
              marketing objectives.
            </h2>
          </div>

          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-14 md:mb-20 px-8 md:px-16">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 ${
                    isSelected
                      ? "bg-[#9FF443] border-[#9FF443] text-[#010205]"
                      : "bg-transparent border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500"
                  }`}
                >
                  {tab.name}{" "}
                  <span className="opacity-60 ml-0.5">[{tab.count}]</span>
                </button>
              );
            })}
          </div>

          <div>
            {/* Injecting browser CSS utility wrapper to completely strip scrollbars layout tracks */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  .no-scrollbar::-webkit-scrollbar { display: none; }
                  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `,
              }}
            />

            {/* Case Studies Display Row (Scrollable X-Axis) */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto no-scrollbar gap-6 items-center snap-x snap-mandatory pb-4 pl-8 pr-8 md:pl-16 md:pr-16"
            >
              {/* Project 1: Big Circular Interactive Card - Backed with testy9 */}
              <div className="snap-center shrink-0 bg-neutral-800/40 border-8 border-neutral-600 aspect-square rounded-full flex items-center justify-center relative group overflow-hidden w-full max-w-85">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/testimonials/testy9.jpg"
                    alt="Featured details project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 340px"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                </div>
                <div className="bg-[#9FF443] text-[#010205] text-xs font-semibold w-24 h-24 rounded-full flex items-center justify-center text-center p-2 shadow-lg cursor-pointer transform transition-transform group-hover:scale-105 z-10 select-none">
                  See Details
                </div>
              </div>

              {/* Project 2: AI Wave Card */}
              <div className="snap-center shrink-0 bg-[#B5B8B6] border-8 border-neutral-600 rounded-4xl p-8 aspect-square flex flex-col justify-between text-white relative group overflow-hidden w-full max-w-85">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/testimonials/testy0.jpg"
                    alt="AI Wave project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
                </div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-medium opacity-80 tracking-wider">
                    AI Corporation. 2023
                  </span>
                </div>
                <div className="z-10">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight drop-shadow-sm">
                    AI Wave - AI Chatbot Mobile App
                  </h4>
                </div>
              </div>

              {/* Project 3: App Lancer Card */}
              <div className="snap-center shrink-0 bg-[#C2C5C3] border-8 border-neutral-600 rounded-4xl p-8 aspect-square flex flex-col justify-between text-white relative group overflow-hidden w-full max-w-85">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/testimonials/testy7.jpg"
                    alt="App Lancer project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
                </div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-medium opacity-80 tracking-wider">
                    LancerCorporation. 2023
                  </span>
                </div>
                <div className="z-10">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight drop-shadow-sm">
                    App Lancer - Freelance Marketplace
                  </h4>
                </div>
              </div>

              {/* Project 4: New Card 1 */}
              <div className="snap-center shrink-0 bg-[#A3A7A5] border-8 border-neutral-600 rounded-4xl p-8 aspect-square flex flex-col justify-between text-white relative group overflow-hidden w-full max-w-85">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/testimonials/testy3.jpg"
                    alt="PaySphere project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
                </div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-medium opacity-80 tracking-wider">
                    Fintech Global. 2024
                  </span>
                </div>
                <div className="z-10">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight drop-shadow-sm">
                    PaySphere - Digital Wallet Solution
                  </h4>
                </div>
              </div>

              {/* Project 5: New Card 2 */}
              <div className="snap-center shrink-0 bg-[#929694] border-8 border-neutral-600 rounded-4xl p-8 aspect-square flex flex-col justify-between text-white relative group overflow-hidden w-full max-w-85 mr-8 md:mr-0">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/testimonials/testy4.jpg"
                    alt="SaaSify project"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
                </div>
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-medium opacity-80 tracking-wider">
                    CloudTech. 2024
                  </span>
                </div>
                <div className="z-10">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight drop-shadow-sm">
                    SaaSify - Analytics Dashboard CRM
                  </h4>
                </div>
              </div>
            </div>

            {/* Liquid Style Pagination Tracker Row - Hides dynamically on desktop viewports via 'md:hidden' */}
            <div className="flex md:hidden justify-center items-center gap-2 mt-6 select-none">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  aria-label={`Show layout slide number ${index + 1}`}
                  className={`h-2 transition-all duration-300 ease-out rounded-full ${
                    activeIndex === index
                      ? "w-7 bg-[#9FF443]" // Stretched configuration
                      : "w-2 bg-neutral-700 hover:bg-neutral-500" // Resting bullet configuration
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SUITE */}
        <div className="mt-20 md:mt-28 max-w-4xl mx-auto">
          {/* Quote text */}
          <blockquote className="text-xl sm:text-2xl md:text-[32px] font-medium text-brand-dark leading-[1.4] tracking-tight text-left">
            “ They thoroughly analyze our industry and target audience, allowing
            them to develop customized campaigns that effectively reach and
            engage our customers. Their creative ideas and cutting-edge
            techniques have helped us stay ahead of the competition. ”
          </blockquote>

          {/* Reviewer Meta & Slider UI controls */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8">
            {/* Profile info block */}
            <div className="flex items-center gap-4">
              <div>
                <cite className="not-italic font-bold text-base text-brand-dark block">
                  Michael Kaizer
                </cite>
                <span className="text-xs font-medium text-neutral-400 mt-0.5 block">
                  CEO of Basiccamp Corp
                </span>
              </div>
            </div>

            {/* Slider Action Anchors */}
            <div className="flex items-center gap-4 self-end sm:self-auto">
              <button className="w-12 h-12 rounded-full border border-neutral-200 hover:border-neutral-400 flex items-center justify-center text-brand-dark transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-semibold tracking-widest text-neutral-400 select-none">
                01<span className="text-neutral-200 mx-1">/</span>05
              </span>

              <button className="w-12 h-12 rounded-full bg-[#010205] hover:bg-gray-800 flex items-center justify-center text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}