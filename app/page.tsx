import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import HeroSection from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Blog from '@/components/sections/Blog'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  )
}

export default page
