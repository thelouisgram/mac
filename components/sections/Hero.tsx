import Image from "next/image";
import Navbar from "../shared/Navbar";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-auto bg-white text-brand-dark font-sans antialiased selection:bg-lime-200">
      <Navbar />

      {/* HERO CONTENT */}
      <main className="mx-auto max-w-7xl px-6 pt-12 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:12 lg:gap-20 items-center">
        {/* Left Column (Copy & CTA) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-[68px] font-semibold tracking-tight leading-[1.1] text-brand-dark">
            Stay ahead of the <br className="hidden md:inline" />
            curve with our <br />
            forward-thinking
          </h1>

          <p className="mt-6 md:mt-8 text-gray-500 max-w-lg text-sm md:text-base leading-relaxed">
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development, focused on understanding you.
          </p>

          {/* CTAs */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button className="bg-[#010205] text-white px-6 py-3 md:px-7 md:py-4 rounded-full font-medium flex items-center gap-6 md:gap-10.25 group hover:bg-gray-800 transition-all text-sm md:text-base">
              Schedule Call
              <ArrowRight className="text-white group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5" />
            </button>
            <Link
              href="#"
              className="font-semibold text-sm underline underline-offset-4 hover:text-gray-600"
            >
              View Case Study
            </Link>
          </div>

          {/* Social Proof / Clients */}
          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-3 md:gap-10">
            <p className="text-xs font-semibold tracking-wider text-[#010205] leading-normal">
              Trusted by the world's <br className="hidden md:inline" /> biggest
              brands
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-60">
              <Image
                src="/assets/vector.svg"
                alt="brand logo"
                width={100}
                height={30}
                className="h-auto w-auto max-w-20 md:max-w-25"
              />
              <Image
                src="/assets/vector (1).svg"
                alt="brand logo"
                width={100}
                height={30}
                className="h-auto w-auto max-w-20 md:max-w-25"
              />
              <Image
                src="/assets/vector (2).svg"
                alt="brand logo"
                width={100}
                height={30}
                className="h-auto w-auto max-w-20 md:max-w-25"
              />
            </div>
          </div>
        </div>

        {/* Right Column (Visual Grid Cards Container) */}
        <div className="lg:col-span-6 w-full max-w-147 flex flex-col gap-4 md:gap-6 font-sans select-none justify-self-center lg:justify-self-end mt-10 lg:mt-0">
          {/* TOP ROW: Cut Circle & Metrics Cards */}
          <div className="w-full flex gap-4 md:gap-6.5">
            {/* Card 1: Cut Circle Shape & Floating Badge */}
            <div className="relative flex-1 min-w-30 h-50 sm:h-60 md:h-70.25 bg-[#FAFADA] rounded-3xl md:rounded-4xl overflow-visible">
              {/* Main Semi-circle Graphic */}
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-start bg-white overflow-hidden rounded-xl">
                <div className="absolute bottom-0 left-0 w-full h-full bg-[#D4D4D4] rounded-tl-full" />
              </div>

              {/* Floating Dark Green Arrow Badge with Shadow */}
              <div className="absolute -top-2 right-4 sm:right-8 md:right-14 bg-[#121212] w-12 h-12 md:w-16 md:h-16 rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.25)] flex items-center justify-center z-10">
                <TrendingUp className="text-[#A8D67B]" />
              </div>
            </div>

            {/* Card 2: 230+ Metrics Card */}
            <div className="w-40 sm:w-50 md:w-64.75 h-50 sm:h-60 md:h-70.25 bg-[#F0F0F0] rounded-3xl md:rounded-4xl p-5 md:p-8 flex flex-col justify-between tracking-tight shrink-0">
              <div className="flex flex-col">
                <h3 className="text-3xl sm:text-4xl md:text-[84px] font-bold leading-none text-brand-dark">
                  230+
                </h3>
                <p className="text-[11px] md:text-[16px] font-medium text-neutral-500 mt-3 md:mt-5 leading-[1.4] max-w-47.5">
                  some big companies that we work with, and trust us very much
                </p>
              </div>

              {/* Progress / Indicator Bar */}
              <div className="w-full h-1 bg-neutral-300 overflow-hidden">
                <div className="w-[70%] h-full bg-brand-dark" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Traffic & Product Sales Card */}
          <div className="w-full h-full md:h-54 bg-[#0A0B0D] rounded-[18px] md:rounded-4xl pt-6 pl-4 pr-4 md:pt-9 md:pl-10 md:pr-0 flex justify-between items-start relative overflow-hidden">
            {/* Left Column: Tagline & Heading */}
            <div className="">
              {/* Tagline header */}
              <div className="flex items-center gap-1.5 md:gap-3 mb-4 md:mb-8">
                <div className="h-px w-6 md:w-9 bg-white rounded-full" />
                <span className="text-[10px] md:text-[14px] font-semibold text-white tracking-wider whitespace-nowrap">
                  Drive More Traffic and Sales
                </span>
              </div>

              {/* Main heading */}
              <h4 className="text-white text-[18px] md:text-[32px] font-semibold leading-[1.2] max-w-45 sm:max-w-none">
                Drive more traffic <br /> and product sales
              </h4>
            </div>

            {/* Right Column: Dynamic Green Bars */}
            <div className="flex h-32 sm:h-48 md:h-full items-end gap-1 sm:gap-2 pr-2 sm:pr-3 md:pr-4 shrink-0 z-10">
              <div className="w-11 sm:w-15.25 bg-[#BAE289] h-[60%]" />
              <div className="w-11 sm:w-15.25 bg-[#99CF63] h-[80%]" />
              <div className="w-11 sm:w-15.25 bg-[#77B248] h-full" />
            </div>

            {/* Glossy Ambient Backlight Fluid Glow */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brand-green/10 rounded-full filter blur-16" />
          </div>
        </div>
      </main>
    </div>
  );
}
