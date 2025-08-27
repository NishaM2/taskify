import "../index.css"

export default function Hero () {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-2 lg:gap-3 mt-15 lg:mt-0">
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-7xl font-Hero ">Smart Tools for Smarter <br/> Project Workflows</h1>
            <p className="text-[0.7rem] sm:text-[0.7rem] md:text-sm lg:text-md ">Streamline tasks, boost collaboration,with your AI-driven<br/> project management assistant.</p>
            <div className="rounded-4xl bg-black flex justify-center items-center gap-2 mt-4 p-1 md:p-2 lg:p-2.5 cursor-pointer">
                <h1 className="text-white text-sm sm:text-sm md:text-md lg:text-lg">Get Started</h1>
                <div className="bg-white rounded-4xl flex justify-center items-center px-1">
                    <svg className="w-4 h-4 sm:w-4 sm:h-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}