import { Bell, ChevronDown } from 'lucide-react'
import Logo from '../ui/Logo'

const Navbar = () => {
  return (
      <header className="mx-auto max-w-7xl px-6 py-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Service <ChevronDown className='size-5'/></button>
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Agency <ChevronDown className='size-5'/></button>
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Case study <ChevronDown className='size-5'/></button>
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Resources <ChevronDown className='size-5'/></button>
          <a href="#" className="hover:text-[#020407]">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="border border-black text-sm font-medium px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all">
            Get started
          </button>
          <button className="p-2.5 bg-black rounded-full transition-colors" aria-label="Notifications">
            <Bell className='text-white'/>
          </button>
        </div>
      </header>
  )
}

export default Navbar
