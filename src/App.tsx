import Contact from "./components/Contact"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Terminal from "./components/Terminal"
import Testimonial from "./components/Testimonial"
import TrustedBy from "./components/TrustedBy"

export default function App () {
   const Array = ["","","","","","","","","","",""] 
   
    return ( 
     <div className="flex-col justify-center"> 
      <div id="home" className="h-[100vh] w-full flex justify-center p-5"> 
        <div className="h-[100vh] w-full flex justify-center rounded-2xl overflow-hidden">

          <div className="flex md:hidden">
            {Array.map((box, i) => (
              <div key={i} className="h-full w-[40px] flex shadow-2xl bg-gradient-to-b from-slate-200 via-violet-300 to-violet-600">
                {box}
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            {[...Array,...Array,...Array].map((box) => (  
              <div className="h-full w-[40px] flex shadow-2xl bg-gradient-to-b from-slate-200 via-violet-300 to-violet-600 "> 
                {box} 
              </div>
            ))}
          </div>

        </div>

        <div className="absolute ">
          <Navbar/>
        </div>

        <div className="absolute mt-40">
          <Hero/>
        </div>   
      </div>

      <div className="flex justify-center items-center">
        <Terminal/>
      </div>

      <div className="min-h-screen lg:h-screen flex items-end bg-white ">
        <TrustedBy/>
      </div>

      <div id="features" className="pt-20 min-h-screen lg:h-screen bg-slate-50">
        <Features/>
      </div>

      <div id="testimonials" className="pt-20 min-h-screen lg:h-screen bg-gradient-to-b from-slate-50 via-violet-200 to-slate-50">
          <Testimonial/>
      </div>

      <div id="pricing" className="pt-10 min-h-screen lg:h-screen bg-slate-50">
          <Pricing/>
      </div>

      <div id="contact" className="pt-20 min-h-screen lg:h-screen bg-gradient-to-b from-slate-50 via-violet-300 to-slate-50">
        <Contact/>
      </div>

    </div>
    ) 
  }

  