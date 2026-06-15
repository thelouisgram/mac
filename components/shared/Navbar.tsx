import { Bell, ChevronDown, MenuIcon } from 'lucide-react'
import Logo from '../ui/Logo'

const Navbar = () => {
  return (
      <header className="mx-auto max-w-7xl px-6 py-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold">
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Service <ChevronDown className='size-5'/></button>
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Agency <ChevronDown className='size-5'/></button>
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Case study <ChevronDown className='size-5'/></button>
          <button className="hover:cursor flex items-center gap-1 text-[#020407]">Resources <ChevronDown className='size-5'/></button>
          <a href="#" className="hover:text-[#020407]">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="items-center gap-4 hidden xl:flex">
          <button className="border border-[#010205] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#010205] hover:text-white transition-all">
            Get started
          </button>
          <button className="p-2.5 bg-[#010205] rounded-full transition-colors" aria-label="Notifications">
            <Bell className='text-white'/>
          </button>
        </div>
        <MenuIcon className='flex xl:hidden text-brand-dark'/>
      </header>
  )
}

export default Navbar
