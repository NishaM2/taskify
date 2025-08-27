import { IconQuoteFilled, IconStar } from "@tabler/icons-react";
import { motion } from "framer-motion"

export default function Testimonial() {
  return (
    <div className="relative flex flex-col items-center w-full gap-20 px-4">

        <div className="max-w-[800px] w-full flex flex-col items-center mt-10 gap-5 text-center">
            <h1 className="border rounded-xl px-3 py-1 text-xs">Testimonials</h1>
            <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl font-Nav">
                Our Trusted Clients
            </h1>
            <h1 className="text-slate-800 text-sm sm:text-base">
                Our mission is to drive progress and enhance the life of the customers by delivering <br className="hidden sm:block" /> superior products and services that exceed expectations.
            </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full max-w-[1200px] font-Nav mb-15 ">
        
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col bg-white rounded-xl shadow-xl p-4 justify-center gap-4 mx-10 lg:mx-0">
                <div className="flex justify-between items-center">
                    <IconQuoteFilled size={30} stroke={2} className="rotate-180 text-gray-400" />
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <IconStar key={i} size={17} stroke={1.5} className="text-amber-300" />
                        ))}
                    </div>
                </div>
                <p className="text-xs sm:text-sm lg:text-[0.9rem] text-slate-700">
                    This platform has completely changed how our team collaborates on projects. Task tracking and standups are smoother than ever.
                </p>
                <div className="flex gap-2 items-center">
                    <img src="https://i.pravatar.cc/40?img=5" alt="Olivia" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"/>
                    <div>
                        <h1 className="font-semibold text-sm sm:text-base">Olivia</h1>
                        <h1 className="text-xs sm:text-sm text-slate-600">Product Manager</h1>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col bg-white rounded-xl shadow-xl p-4 justify-center gap-4 mx-10 lg:mx-0">
                <div className="flex justify-between items-center">
                    <IconQuoteFilled size={30} stroke={2} className="rotate-180 text-gray-400" />
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <IconStar key={i} size={17} stroke={1.5} className="text-amber-300" />
                        ))}
                    </div>
                </div>
                <p className="text-xs sm:text-sm lg:text-[0.9rem] text-slate-700">
                    We used to struggle with miscommunication, but now everything - tasks, deadlines, and updates is in one place. Super easy to use.
                </p>
                <div className="flex gap-2 items-center">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aarav S" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"/>
                    <div>
                        <h1 className="font-semibold text-sm sm:text-base">Aarav S</h1>
                        <h1 className="text-xs sm:text-sm text-slate-600">Software Engineer</h1>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col bg-white rounded-xl shadow-xl p-4 justify-center gap-4 mx-10 lg:mx-0">
                <div className="flex justify-between items-center">
                    <IconQuoteFilled size={30} stroke={2} className="rotate-180 text-gray-400" />
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <IconStar key={i} size={17} stroke={1.5} className="text-amber-300" />
                        ))}
                    </div>
                </div>
                <p className="text-xs sm:text-sm lg:text-[0.9rem] text-slate-700">
                    The clean design and simple workflow make it perfect for both developers and non-tech teammates. Love the productivity boost.
                </p>
                <div className="flex gap-2 items-center">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luna" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"/>
                    <div>
                        <h1 className="font-semibold text-sm sm:text-base">Luna</h1>
                        <h1 className="text-xs sm:text-sm text-slate-600">Product Designer</h1>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
