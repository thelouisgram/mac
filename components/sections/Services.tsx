import { Plus, Play } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white text-brand-dark font-sans antialiased selection:bg-lime-200 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-start mb-16 md:mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tight leading-[1.1] text-brand-dark max-w-xl">
              Provide the best service with out of the box ideas
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xl">
              we are a passionate team of digital marketing enthusiasts
              dedicated to helping businesses succeed in the digital world. With
              years of experience and a deep understanding of the ever-evolving
              online landscape, we stay at the forefront of industry trends and
              technologies.
            </p>
          </div>
        </div>

        {/* FEATURED CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-6">
          {/* Left Card: 920+ Projects */}
          <div className="lg:col-span-5 bg-[#0A0B0D] rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-85 md:h-100 relative overflow-hidden tracking-tight">
            <div>
              <h3 className="text-5xl md:text-[84px] font-bold text-white flex items-center gap-1 leading-none">
                920 <span className="text-[#99CF63] font-bold">+</span>
              </h3>
              <p className="text-[#878C91] text-[16px] md:text-[19px] font-medium mt-4">
                Project finish with superbly
              </p>
            </div>

            {/* Avatar Stack Row - Fixed Alignment & Structure */}
            <div className="flex items-center gap-3 z-10 mt-6">
              {/* Negative space creates the classic overlapping stack effect */}
              <div className="flex -space-x-4 overflow-hidden">
                <div className="w-15 h-15 md:w-17.5 md:h-17.5 rounded-full ring-4 ring-[#0A0B0D] bg-neutral-600 relative z-40" />
                <div className="w-15 h-15 md:w-17.5 md:h-17.5 rounded-full ring-4 ring-[#0A0B0D] bg-neutral-500 relative z-30" />
                <div className="w-15 h-15 md:w-17.5 md:h-17.5 rounded-full ring-4 ring-[#0A0B0D] bg-neutral-400 relative z-20" />
                <div className="w-15 h-15 md:w-17.5 md:h-17.5 rounded-full ring-4 ring-[#0A0B0D] bg-neutral-300 relative z-10" />
              </div>

              {/* Perfectly centered or baseline aligned plus indicator */}
              <span className="text-4xl md:text-5xl font-bold text-white self-center -mt-1">
                +
              </span>
            </div>

            {/* Decorative Dark Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-neutral-800/20 rounded-full filter blur-3xl pointer-events-none" />
          </div>

          {/* Right Card: How We Work Video/Interactive Container */}
          <div className="lg:col-span-8 bg-[#C2C6C3] rounded-4xl p-8 md:p-12 flex items-center justify-center min-h-85 md:h-100 relative group border border-neutral-300">
            {/* Subtle Texture/Gradient Background Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#010205]/10 via-transparent to-transparent opacity-40 mix-blend-multiply" />

            {/* Center Heading */}
            <h3 className="text-white text-3xl sm:text-4xl md:text-[48px] font-semibold tracking-[0.15em] text-center z-10 uppercase select-none drop-shadow-sm">
              How We Work
            </h3>

            {/* Absolute Positioned Large Green Play Button Badge */}
            <div
              className="absolute -bottom-1 -right-1 md:-bottom-1 md:-right-3 bg-[#9FF443] hover:bg-[#8ee034] transition-all duration-300 w-18 h-18 md:w-24 md:h-24 rounded-full 
            flex items-center justify-center z-20 cursor-pointer border-6 border-white"
            >
              <Play className="w-6 h-6 md:w-8 md:h-8 text-[#010205] fill-[#010205] ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
