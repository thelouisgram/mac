import { ArrowRight } from "lucide-react";

const Blog = () => {
  const blogs = [
    {
      dotColor: "bg-blue-500",
      readTime: "5 min read",
      title: "How a Digital Marketing Agency Can Boost Your Business",
      desc: "We are the top digital marketing agency for branding corp. We offer a full range of engine...",
      darkButton: true,
    },
    {
      dotColor: "bg-orange-500",
      readTime: "5 min read",
      title: "The Latest Trends and Strategies with a Digital Marketing Agency",
      desc: "Working with this digital marketing agency has been a true partnership. They have talk...",
      darkButton: false,
    },
    {
      dotColor: "bg-purple-500",
      readTime: "5 min read",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      desc: "What sets this digital marketing agency apart is their commitment to transparency a...",
      darkButton: false,
    },
  ];
  return (
    <section className="bg-[#F6F6F6] text-brand-dark font-sans antialiased selection:bg-lime-200 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* BLOG SECTION CONTAINER */}
        <div className="mb-20">
          {/* Top Row Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-12">
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight text-brand-dark leading-[1.15] max-w-xl">
                Digital Marketing & SEO Services That Grow Traffic & Increase
                Revenue
              </h2>
            </div>
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <p className="text-[#878C91] text-xs md:text-sm leading-relaxed font-medium lg:text-left">
                We are the top digital marketing agency for branding corp. We
                offer a full range of services to help clients improve their
                search engine rankings and drive more traffic to their websites.
              </p>
              <button className="px-5 py-2.5 rounded-full border border-[#010205] text-xs font-semibold hover:bg-[#010205] hover:text-white transition-all duration-200">
                See more
              </button>
            </div>
          </div>

          {/* Cards Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] pt-6 pb-4 px-6 md:px-6 md:pt-8 md:pb-6 flex flex-col justify-between min-h-75 shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${blog.dotColor}`}
                    />
                    <span className="text-[11px] font-semibold text-neutral-400 tracking-wider">
                      {blog.readTime}
                    </span>
                  </div>
                  {/* Title & Body description */}
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-brand-dark leading-snug">
                    {blog.title}
                  </h3>
                </div>
                <div className="flex w-full items-center gap-6">
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 font-medium">
                    {blog.desc}
                  </p>
                  {/* Micro Inline Dynamic Action Circle */}
                  <div className=" flex">
                    <button
                      className={`w-19 h-14 rounded-full flex items-center justify-center border transition-all duration-200 ${
                        blog.darkButton
                          ? "bg-[#010205] text-white border-[#010205] hover:bg-gray-800"
                          : "bg-white text-brand-dark border-neutral-200 hover:border-neutral-400"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* HIGH CONTRAST CTA BANNER (Ready to work with us?) */}
        <div className="bg-[#020609] rounded-[30px] p-8 md:p-12 min-h-40 md:h-58.75 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
          {/* Internal Soft Backlight Glow */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent pointer-events-none filter blur-xl" />
          
          <h2 className="text-3xl md:text-[48px] font-semibold text-white tracking-tight z-10 text-center sm:text-left leading-none">
            Ready to work with us ?
          </h2>

          <button className="bg-white text-black text-xs font-bold px-6 py-3.5 rounded-full flex items-center gap-4 hover:bg-neutral-100 transition-all shadow-md shrink-0 z-10 group">
            Get Started
            <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
