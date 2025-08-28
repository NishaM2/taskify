import { IconHandFingerRight } from "@tabler/icons-react"
import CountUp from "react-countup"

export default function Pricing () {
    return (
        <div className="flex flex-col justify-center items-center pt-8 gap-9">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="font-bold lg:font-semibold text-2xl lg:text-[2.5rem] text-center font-Nav">Straightforward Pricing <br/>Custom Integrations</h1>
                <h1 className="text-xs lg:text-[0.9rem] text-gray-700 text-center font-Nav">Consistent Pricing and Value Each Month, with <br/>the flexibility to Cancel Anytime</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-10 font-Nav xl:gap-10">
                <div className="flex flex-col px-8 py-4 rounded-3xl gap-4 shadow-xl border border-gray-200 bg-gradient-to-br from-slate-50 via-violet-100 to-violet-300 mx-10 lg:mx-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold lg:font-semibold text-xl">Starter Plan</h1>
                        <h1 className="text-[0.9rem]">Perfect for individuals or small teams <br/> getting started</h1>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <h1 className="font-bold lg:font-semibold text-2xl font-Nav">
                            <CountUp end={1499} duration={2} separator="," prefix="$" enableScrollSpy />
                        </h1>
                        <p>/Per month</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm lg:text-base">
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Task creation & management</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>1 project workspace</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Basic reminders</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>File uploads (up to 50MB)</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Community support</h1>
                        </div>
                    </div>
                    <div className="bg-white text-black flex justify-center items-center rounded-3xl p-2 mt-2 shadow-md">
                        <h1>Get Started</h1>
                    </div>
                </div>

                <div className="flex flex-col px-8 py-4 rounded-3xl gap-4 shadow-xl border-1  bg-gradient-to-br from-slate-50 via-violet-100 to-violet-300 mx-10 lg:mx-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold lg:font-semibold text-xl">Enterprise Plan</h1>
                        <h1 className="text-[0.9rem]">Designed for businesses managing large<br/> teams & workflows.</h1>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <h1 className="font-bold lg:font-semibold text-2xl font-Nav">
                            <CountUp end={4999} duration={2} separator="," prefix="$" enableScrollSpy />
                        </h1>
                        <p>/Per month</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm lg:text-base">
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Everything in Pro</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Unlimited team members</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Advanced Analysis</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Access control</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>24/7 premium support</h1>
                        </div>
                    </div>
                    <div className="bg-black text-white flex justify-center items-center rounded-3xl p-2 mt-2 shadow-md">
                        <h1>Choose Enterprise Plan</h1>
                    </div>
                </div>

                <div className="flex flex-col px-8 py-4 rounded-3xl gap-4 border border-gray-200 shadow-xl bg-gradient-to-br from-slate-50 via-violet-100 to-violet-300 mx-10 lg:mx-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold lg:font-semibold text-xl">Pro Plan</h1>
                        <h1 className="text-[0.9rem]">Great for growing teams who need <br/> collaboration tools.</h1>
                    </div>
                    <div className="flex gap-1.5 items-center">
                        <h1 className="font-bold lg:font-semibold text-xl font-Nav">
                            <CountUp end={3699} duration={2} separator="," prefix="$" enableScrollSpy />
                        </h1>
                        <p>/Per month</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm lg:text-base">
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Unlimited tasks & projects</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Team collaboration</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Recurring tasks & reminders</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>File uploads (up to 5GB)</h1>
                        </div>
                        <div className="flex gap-2 items-center"> 
                            <IconHandFingerRight className="h-4 w-4 text-gray-600"/>
                            <h1>Priority email support</h1>
                        </div>
                    </div>
                    <div className="bg-white text-black flex justify-center items-center rounded-3xl p-2 mt-2 shadow-md">
                        <h1>Choose Pro</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}