import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Logo from "../ui/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F6] text-brand-dark font-sans antialiased selection:bg-lime-200 pt-6 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* CORE UTILITY SITE FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pt-4 items-start">
          
          {/* Left Column: Brand Logo, Description, and Social Links */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo />
            
            <p className="text-[#9B9B9C] text-xs leading-relaxed max-w-sm font-medium">
              We offers Link comprehensive suite of digital marketing services that cover all aspects 
              of our online presence. From SEO and social media marketing to content creation and 
              PPC advertising, they have the expertise and resources to handle our diverse 
              marketing needs.
            </p>

            {/* Social Media Links (Visible in image_f1b713.jpg under description) */}
            <div className="flex items-center gap-4 text-[#192031] mt-2">
              <Link href="#" className="hover:text-black transition-colors bg-white rounded-full p-3">
                <FaFacebookF className="w-3.5 h-3.5" />
              </Link>
              <Link href="#" className="hover:text-black transition-colors bg-white rounded-full p-3">
                <FaTwitter className="w-3.5 h-3.5" />
              </Link>
              <Link href="#" className="hover:text-black transition-colors bg-white rounded-full p-3">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </Link>
              <Link href="#" className="hover:text-black transition-colors bg-white rounded-full p-3">
                <FaInstagram className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Columns: Links & Contact Info */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 md:pl-12">
            
            {/* Column 1: Navigation */}
            <div>
              <h4 className="text-[11px] font-bold text-[#192031] uppercase tracking-widest mb-10">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3 text-xs font-semibold text-[#9B9B9C]">
                <li><Link href="#" className="hover:text-black transition-colors">Service</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Agency</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Case Study</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Resource</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2: Licence */}
            <div>
              <h4 className="text-[11px] font-bold text-[#192031] uppercase tracking-widest mb-10">
                Licence
              </h4>
              <ul className="flex flex-col gap-3 text-xs font-semibold text-[#9B9B9C]">
                <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Copyright</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Email Address</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-[11px] font-bold text-[#192031] uppercase tracking-widest mb-10">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 text-xs font-semibold text-[#9B9B9C] tracking-tight">
                <li className="flex items-center gap-2">
                  <span>(480) 555-0120</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="truncate">Hey@boosters.com</span>
                </li>
                <li className="leading-normal text-[#9B9B9C] font-medium pt-1">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}