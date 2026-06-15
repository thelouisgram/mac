"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("UI/UX Design");

  const tabs = [
    { name: "All Work", count: 20 },
    { name: "UI/UX Design", count: 10 },
    { name: "Digital Marketing", count: 5 },
    { name: "Branding", count: 5 },
  ];

  return (
    <section className="bg-white text-brand-dark font-sans antialiased selection:bg-lime-200 py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* PORTFOLIO CONTAINER (DARK CARD) */}
        <div className="bg-[#0A0B0D] rounded-4xl p-8 md:p-16 text-white overflow-hidden">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-[44px] font-medium tracking-tight leading-[1.2]">
              Real-world examples of how we have helped companies achieve their
              marketing objectives.
            </h2>
          </div>

          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-14 md:mb-20">
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

          {/* Case Studies Display Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Project 1: Big Circular Interactive Card */}
            <div className="bg-neutral-800/40 border border-neutral-800 aspect-square rounded-full flex items-center justify-center relative group overflow-hidden max-w-85 mx-auto w-full">
              <div className="bg-[#9FF443] text-[#010205] text-xs font-semibold w-24 h-24 rounded-full flex items-center justify-center text-center p-2 shadow-lg cursor-pointer transform transition-transform group-hover:scale-105">
                See Details
              </div>
            </div>

            {/* Project 2: AI Wave Card */}
            <div className="bg-[#B5B8B6] rounded-4xl p-8 aspect-square flex flex-col justify-between text-neutral-900 relative group overflow-hidden max-w-85 mx-auto w-full">
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium opacity-60 tracking-wider">
                  AI Corporation. 2023
                </span>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                  AI Wave - AI Chatbot Mobile App
                </h4>
              </div>
            </div>

            {/* Project 3: App Lancer Card */}
            <div className="bg-[#C2C5C3] rounded-4xl p-8 aspect-square flex flex-col justify-between text-neutral-900 relative group overflow-hidden max-w-85 mx-auto w-full">
              <div className="flex justify-between items-start">
                <span className="text-xs font-medium opacity-60 tracking-wider">
                  LancerCorporation. 2023
                </span>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                  App Lancer - Freelance Marketplace
                </h4>
              </div>
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
