import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed px-10 top-0 left-0 w-full z-10 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/10 shadow-lg ' 
        : 'py-10'
    }`}>
      <nav className="flex justify-between items-center md:gap-10 lg:gap-50">
        
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-Hero font-semibold">Taskify</h1>
        </div>
        
        <div className={`hidden md:flex rounded-4xl h-[50px] justify-center items-center gap-3 transition-all duration-300 ${
          isScrolled 
            ? ' backdrop-blur-sm  w-[470px]' 
            : 'bg-white w-[470px]'
        }`}>

          <a href="#home" className="rounded-4xl  hover:bg-slate-200/50 px-2 py-1.5 font-semibold cursor-pointer transition-colors">
            Home
          </a>
          <a href="#features" className="rounded-4xl  hover:bg-slate-200/50 px-2 py-1.5 font-semibold cursor-pointer transition-colors">
            Features
          </a>
          <a href="#testimonials" className="rounded-4xl  hover:bg-slate-200/50 px-2 py-1.5 font-semibold cursor-pointer transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="rounded-4xl  hover:bg-slate-200/50 px-2 py-1.5 font-semibold cursor-pointer transition-colors">
            Pricing
          </a>
          <a href="#contact" className="rounded-4xl  hover:bg-slate-200/50 px-2 py-1.5 font-semibold cursor-pointer transition-colors">
            Contact Us
          </a>
        </div>
        
        <div className={`hidden md:flex rounded-4xl h-[40px] w-[120px] justify-center items-center cursor-pointer transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-sm hover:bg-black/90' 
            : 'bg-black hover:bg-gray-800'
        }`}>
          <h1 className="text-white">Get Started</h1>
        </div>
        
    {/* mobile */}
        <button onClick={() => setIsOpen(true)} className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100/50 transition-colors">
          <Menu size={25} />
        </button>
        
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <div className={`absolute top-0 right-0 w-full rounded-2xl shadow-lg flex flex-col p-4 gap-2 z-50 transition-all duration-300 ${
              isScrolled 
                ? 'backdrop-blur-xl bg-violet-100/100' 
                : 'backdrop-blur-xl bg-violet-100/100'
            }`}>
              
              <button onClick={() => setIsOpen(false)} className="self-end p-1 rounded-lg hover:bg-gray-200/50 transition-colors">
                <X size={20} />
              </button>
              
              <a href="#home" className="font-semibold hover:text-gray-600 cursor-pointer transition-colors">
                Home
              </a>
              <a href="#features" className="font-semibold hover:text-gray-600 cursor-pointer transition-colors">
                Features
              </a>
              <a href="#testimonials" className="font-semibold hover:text-gray-600 cursor-pointer transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="font-semibold hover:text-gray-600 cursor-pointer transition-colors">
                Pricing
              </a>
              <a href="#contact" className="font-semibold hover:text-gray-600 cursor-pointer transition-colors">
                Contact Us
              </a>
            </div>
          </>
        )}
      </nav>
    </div>
  )
}