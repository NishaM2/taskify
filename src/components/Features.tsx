import { IconSquare, IconFilter2, IconInfoCircle, IconUsers, IconChecklist, IconFlag, IconFlagFilled, IconBrandZoom, IconClockFilled } from "@tabler/icons-react"
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-4 sm:px-6 lg:px-12 py-8">

      <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-Nav font-bold lg:font-semibold">
          Optimize Time and <br /> Complete More Tasks
        </h1>
        <h1 className="text-slate-700 text-sm sm:text-base px-5">
          Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 px-10">

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-xl shadow-xl flex flex-col">
            <div className="rounded-xl m-3 bg-gradient-to-t from-violet-200 to-slate-50 text-slate-700">
                <div className="flex flex-col p-2 gap-2">
                  <h1 className="font-medium text-black text-sm sm:text-base">Daily Back-End Task</h1>
                  <div className="flex flex-wrap justify-between w-full text-xs gap-2">
                    <div className="flex gap-1 items-center">
                      <IconUsers className="w-4 h-4" stroke={2} />
                      <h1>Developer </h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconInfoCircle className="w-4 h-4" stroke={2} />
                      <h1>Important</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconChecklist className="w-4 h-4" stroke={2} />
                      <h1>11 Task</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconFilter2 className="w-4 h-4" stroke={2} />
                      <h1>Filter</h1>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[3fr_2fr_1fr] gap-y-2 text-[0.6rem] sm:text-sm p-3">
                  <div className="font-semibold flex items-center gap-1">
                    <IconChecklist className="w-4 h-4" />
                    <h1>Task Name</h1>
                  </div>
                  <div className="font-semibold flex items-center gap-1">
                    <IconUsers className="w-4 h-4" />
                    <h1>People</h1>
                  </div>
                  <div className="font-semibold">Type</div>

                  <div className="flex items-center gap-1">
                    <IconSquare className="w-4 h-4" />
                    <h1>Implement</h1>
                  </div>
                  <div>People</div>
                  <div>Feature</div>

                  <div className="flex items-center gap-1">
                    <IconSquare className="w-4 h-4" />
                    <h1>Fix Bug</h1>
                  </div>
                  <div>People</div>
                  <div>Bug</div>

                  <div className="flex items-center gap-1">
                    <IconSquare className="w-4 h-4" />
                    <h1>Review Design</h1>
                  </div>
                  <div>People</div>
                  <div>Review</div>

                  <div className="flex items-center gap-1">
                    <IconSquare className="w-4 h-4" />
                    <h1>New Version</h1>
                  </div>
                  <div>People</div>
                  <div>Testing</div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 mb-2">
              <h1 className="lg:font-medium font-bold text-lg sm:text-xl">Improve collaboration</h1>
              <h1 className="text-xs sm:text-sm text-center px-10 text-slate-600 font-Nav">
                Get your teams working together, even if they're far apart
              </h1>
            </div>
          </motion.div>



          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="bg-white rounded-xl shadow-xl flex flex-col">
            <div className="rounded-xl m-3 bg-gradient-to-t from-violet-200 to-slate-50 flex justify-center items-center">
              <div className="bg-white rounded-xl flex flex-col gap-2 border-slate-300 px-3 py-2 w-full max-w-sm  m-3 xl:m-4">
                <div className="flex flex-col p-1 gap-1 text-xs border-b border-gray-300">
                  <h1 className="font-medium">Daily Standup - Development</h1>
                  <h1>11.30 a.m - 13.30 p.m</h1>
                </div>
                <div className="text-slate-700 lg:text-sm text-[0.8rem]">
                  <h1>
                    We'll start by briefly discussing what we achieved and encountered yesterday. This will help us identify areas where we need to work on
                  </h1>
                </div>
                <div className="flex justify-center mt-1 rounded-md bg-violet-300 py-1 items-center gap-2 cursor-pointer hover:bg-violet-400">
                  <IconBrandZoom className="w-5 h-5 text-white fill-white" />
                  <h1 className="font-medium text-white">Join Meeting</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 mb-2 ">
              <h1 className="lg:font-medium text-lg sm:text-xl font-bold">Automate work</h1>
              <h1 className="text-xs sm:text-sm text-center px-8 text-slate-600 font-Nav">
                Streamline business processes without breaking a sweat
              </h1>
            </div>
          </motion.div>




          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="bg-white rounded-xl shadow-xl flex flex-col">
            <div className="rounded-xl m-3 bg-gradient-to-t from-violet-200 to-slate-50 text-slate-700">
                <div className="flex flex-col p-2 gap-2">
                  <h1 className="font-medium text-black text-sm sm:text-base">
                    Daily Back-End Task
                  </h1>
                  <div className="flex flex-wrap justify-between text-xs  gap-2">
                    <div className="flex gap-1 items-center">
                      <IconUsers className="w-4 h-4" />
                      <h1>Developer </h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconInfoCircle className="w-4 h-4" />
                      <h1>Important</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconChecklist className="w-4 h-4" />
                      <h1>11 Task</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                      <IconFilter2 className="w-4 h-4" />
                      <h1>Filter</h1>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_2fr_1fr] gap-y-2 text-[0.7rem] sm:text-sm p-3">
                  <div className="font-semibold flex items-center gap-1">
                    <IconFilter2 className="w-3 h-4" />
                    <h1>Type</h1>
                  </div>
                  <div className="font-semibold flex items-center gap-1">
                    <IconClockFilled className="w-3 h-4" />
                    <h1>Timeline Date</h1>
                  </div>
                  <div className="font-semibold flex gap-1 items-center justify-center">
                    <IconFlagFilled className="w-4 h-4" />
                    <h1>Priority</h1>
                  </div>

                  <div>Feature</div>
                  <div>17 April - 15 May</div>
                  <div className="flex gap-1 items-center rounded-md justify-center">
                    <IconFlag className="w-4 h-4" />
                    Normal
                  </div>

                  <div>Bug</div>
                  <div>12 May - 8 June</div>
                  <div className="flex gap-1 items-center rounded-md justify-center">
                    <IconFlag className="w-4 h-4" />
                    Urgent
                  </div>

                  <div>Review</div>
                  <div>22 June - 30 July</div>
                  <div className="flex gap-1 items-center rounded-md justify-center">
                    <IconFlag className="w-4 h-4" />
                    Normal
                  </div>

                  <div>Testing</div>
                  <div>1 July - 13 August</div>
                  <div className="flex gap-1 items-center  rounded-md justify-center">
                    <IconFlag className="w-4 h-4" />
                    Lowest
                  </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 mb-2">
              <h1 className="lg:font-medium text-xl sm:text-xl font-bold">Enhance Visibility</h1>
              <h1 className="text-xs sm:text-sm text-center px-10 text-slate-600 font-Nav">
                Ditch the needless meeting and repetitive updates. With a single source
              </h1>
            </div>
          </motion.div>
      </div>

    </div>
  )
}
