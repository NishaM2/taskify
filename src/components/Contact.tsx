import { IconMail} from '@tabler/icons-react';
import logo from "../../public/taskify.jpg"

export default function Contact() {
    return(    
        <div className="min-h-screen flex flex-col ">
            <div className="mt-40 flex flex-col gap-5 justify-center items-center text-white">
                <h1 className="text-2xl lg:text-5xl/15 font-bold font-Nav lg:w-1/2 w-2/3 text-center">
                    Join us! Be Part of the Smart Work Revolution
                </h1>
                <p className="font-Nav w-2/3 lg:w-1/3 text-center text-xs lg:text-sm">
                    Join Us and Be Part of the Change in Creating Smarter, Efficient and Productive Working Methods at Every Step!
                </p>
                <div className="bg-violet-400 rounded-md p-1 mt-5 px-6 cursor-pointer">
                    Book a Call
                </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between mt-30">
                <div className="flex flex-col lg:w-1/3 w-2/3 gap-2 p-5">
                    <div className='flex gap-1 items-center'>
                        <img src={logo} alt="logo" className="w-4 h-4 rounded-full object-cover"/>
                        <h1 className="font-semibold font-Nav">Taskify</h1>
                    </div>
                    <h1 className="text-slate-700 text-sm">Productivity platform Taskify is always innovating  by releasing new feature requests every week.</h1>
                    <div className='flex gap-1 items-center'>
                        <IconMail size={14} stroke={2} className='mt-5'/>
                        <h1 className="text-sm mt-4">connect@taskify.co.id</h1>
                    </div>
                    <div className="font-semibold text-sm mt-15">
                        2024, Taskify All Rights Reserved
                    </div>
                </div>
                <div className="flex flex-col gap-16 p-5">
                    <div className="relative h-30 w-70 bg-white border-1 border-gray-300 rounded-lg shadow-sm lg:ml-37">
                        <textarea placeholder="Send your message.." className="w-full h-full px-4 py-3 pr-20 pb-12 rounded-lg resize-none outline-none cursor-pointer"/>
                        <button className="absolute bg-violet-400 bottom-3 right-3 px-3 py-1 rounded text-white text-sm" >
                            Send
                        </button>
                    </div>
                    <div className="font-semibold text-[0.6rem] lg:text-sm flex justify-center items-center gap-5 cursor-pointer">
                        <h1>Privacy Policy</h1>
                        <h1>Terms of Use</h1>
                        <h1>Cancellation &  Refund</h1>
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
