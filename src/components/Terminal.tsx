import { IconLayoutDashboardFilled, IconCalendarDollar, IconUsers, IconMessage, IconTag, IconFileInvoice, 
    IconChartLine, IconAdjustmentsSpark, IconSettings, IconShieldLock, IconHelp,
    IconArrowBarToLeft, IconSearch, IconGift, IconBell, IconOctagonPlus, IconUserCircle, 
    IconCalendarEventFilled, IconFilter2, IconDownload, IconChevronCompactDown, IconEye, IconDatabaseDollar,
    IconInfoCircle, IconTrendingUp, IconTrendingDown, IconSquare, IconMenu2 } from '@tabler/icons-react';
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Terminal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const mobileHeights = ["1.5rem", "2.3rem", "4rem", "1.2rem", "2.6rem", "2.2rem", "3rem"];
  
  const desktopHeights = ["2rem", "3.25rem", "6.25rem", "1.75rem", "4rem", "3rem", "5rem"];
  
  const items = [
    { name: "Stripe", category: "Finance", percent: 40, amount: "$500.00" },
    { name: "Zapier", category: "CRM", percent: 80, amount: "$720.50" },
    { name: "Shopify", category: "Marketplace", percent: 20, amount: "$432.25" },
    { name: "Slack", category: "Communication", percent: 50, amount: "$622.75" },
  ];

  return (
    <>
      {/* Mobile Layout - Hidden on lg screens and above */}
      <div className="absolute block lg:hidden bg-gray-50 p-2 sm:p-4 rounded-2xl mt-50">
        <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Mobile Browser Header */}
          <div className="h-8 flex items-center gap-2 border-b border-slate-100 px-3">
            <div className="flex gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
            </div>
            <div className="bg-slate-100 rounded-xl flex-1 flex items-center text-xs h-6 px-2 gap-2 max-w-32">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="truncate">taskify.io</span>
            </div>
          </div>

          {/* Mobile App Header */}
          <div className="h-10 flex items-center justify-between px-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 hover:bg-gray-100 rounded-md"
              >
                <IconMenu2 size={16} stroke={2} />
              </button>
              <h1 className="font-semibold text-lg">Taskify</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <IconBell size={14} stroke={1.2}/>
                <IconOctagonPlus size={14} stroke={1.2}/>
              </div>
              <div className="flex items-center gap-1">
                <IconUserCircle size={16} stroke={1.4}/>
                <span className="text-xs font-medium">User</span>
              </div>
            </div>
          </div>

          <div className="flex flex-1 relative">
            {/* Mobile Collapsible Sidebar */}
            <div className={`absolute left-0 top-0 h-full w-48 bg-white border-r border-slate-200 z-10 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="p-3 space-y-4 text-xs">
                <div>
                  <h2 className="text-[0.5rem] text-gray-500 mb-2">GENERAL</h2>
                  <div className="space-y-1">
                    <div className="rounded-md p-1.5 bg-gray-100 flex items-center gap-2">
                      <IconLayoutDashboardFilled size={8} stroke={3}/>
                      <span>Dashboard</span>
                    </div>
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconCalendarDollar size={8} stroke={3}/>
                      <span>Payment</span>
                    </div>
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconUsers size={8} stroke={3}/>
                      <span>Customers</span>
                    </div>
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconMessage size={8} stroke={3}/>
                      <span>Message</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[0.5rem] text-gray-500 mb-2">TOOLS</h2>
                  <div className="space-y-1">
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconTag size={8} stroke={3}/>
                      <span>Product</span>
                    </div>
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconFileInvoice size={8} stroke={3}/>
                      <span>Invoice</span>
                    </div>
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconChartLine size={8} stroke={3}/>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[0.5rem] text-gray-500 mb-2">SUPPORT</h2>
                  <div className="space-y-1">
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconSettings size={8} stroke={3}/>
                      <span>Settings</span>
                    </div>
                    <div className="rounded-md p-1.5 flex items-center gap-2">
                      <IconHelp size={8} stroke={3}/>
                      <span>Help</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
              <div 
                className="absolute inset-0 bg-black bg-opacity-20 z-5"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* Mobile Main Content */}
            <div className="flex-1 bg-slate-50 p-2">
              {/* Mobile Dashboard Header */}
              <div className="flex flex-col gap-2 mb-3">
                <h1 className="font-medium text-sm">Dashboard</h1>
                <div className="flex gap-1 text-[0.6rem] overflow-x-auto">
                  <div className="p-1 px-2 flex items-center gap-1 rounded border border-slate-200 bg-white whitespace-nowrap">
                    <IconCalendarEventFilled size={10} stroke={1.5}/>
                    <span>Aug-Sep</span>
                  </div>
                  <div className="p-1 px-2 flex items-center gap-1 rounded border border-slate-200 bg-white whitespace-nowrap">
                    <span>Monthly</span>
                    <IconChevronCompactDown size={8} stroke={2}/>
                  </div>
                  <div className="p-1 px-2 flex items-center gap-1 rounded border border-slate-200 bg-white whitespace-nowrap">
                    <IconFilter2 size={8} stroke={1.5}/>
                    <span>Filter</span>
                  </div>
                </div>
              </div>

              {/* Mobile Stats Cards */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="text-[0.6rem] flex gap-1 items-center mb-1">
                    <IconEye size={10} stroke={2}/>
                    <span>Page View</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">
                      <CountUp end={12450} duration={2} separator="," enableScrollSpy />
                    </div>
                    <div className="text-[0.45rem] px-1 bg-green-200 text-green-600 rounded flex items-center gap-1 w-fit">
                      15.8%
                      <IconTrendingUp size={6} stroke={2}/>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="text-[0.6rem] flex gap-1 items-center mb-1">
                    <IconDatabaseDollar size={10} stroke={2}/>
                    <span>Revenue</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">
                      <CountUp end={363.95} duration={2} prefix="$" decimals={2} enableScrollSpy />
                    </div>
                    <div className="text-[0.45rem] px-1 bg-red-200 text-red-600 rounded flex items-center gap-1 w-fit">
                      34.0%
                      <IconTrendingDown size={6} stroke={2}/>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="text-[0.6rem] flex gap-1 items-center mb-1">
                    <IconEye size={10} stroke={2}/>
                    <span>Bounce</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-medium text-sm">
                      <CountUp end={86.5} duration={2} suffix="%" decimals={1} enableScrollSpy />
                    </div>
                    <div className="text-[0.45rem] px-1 bg-green-200 text-green-600 rounded flex items-center gap-1 w-fit">
                      24.2%
                      <IconTrendingUp size={6} stroke={2}/>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Bottom Section */}
              <div className="space-y-3">
                {/* Mobile Integration List */}
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-1 items-center">
                      <div className="bg-slate-100 rounded p-1">
                        <IconAdjustmentsSpark size={10} stroke={2}/>
                      </div>
                      <span className="font-medium text-xs">Integrations</span>
                    </div>
                    <span className="text-violet-600 text-[0.6rem]">see all</span>
                  </div>
                  
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.2,
                        },
                      },
                    }}
                    className="space-y-1">
                    {items.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 2 }}
                        className="flex items-center justify-between text-[0.55rem] border border-slate-200 rounded p-1.5 bg-slate-50">
                        <div className="flex items-center gap-1">
                          <IconSquare size={8} stroke={1.5} />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-1 w-10">
                            <div
                              className="h-1 bg-violet-400 rounded"
                              style={{ width: `${item.percent / 1}%` }}
                            ></div>
                            <span>{item.percent}%</span>
                          </div>
                          <span className="font-medium">{item.amount}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Mobile Subscriber Chart */}
                <div className="border border-slate-200 rounded-lg p-2 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-1 items-center">
                      <IconUsers size={10} stroke={2}/>
                      <span className="font-medium text-xs">Subscribers</span>
                    </div>
                    <div className="border border-slate-200 rounded text-[0.5rem] p-1 flex items-center gap-1">
                      <span>Weekly</span>
                      <IconChevronCompactDown size={8} stroke={1.5}/>
                    </div>
                  </div>
                  
                  <div className="font-medium text-sm mb-1">24,473</div>
                  <div className="flex gap-1 items-center mb-2">
                    <div className="text-[0.45rem] px-1 bg-green-200 text-green-600 rounded flex items-center gap-1">
                      15.8%
                      <IconTrendingUp size={6} stroke={2}/>
                    </div>
                    <span className="text-[0.55rem] text-gray-500">+ 749 increased</span>
                  </div>
                  
                  <div className="h-25 flex items-end gap-1 mb-1">
                    {mobileHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: h }}
                        transition={{ duration: 1.5, delay: i * 0.1 }} 
                        className={`flex-1 rounded ${
                          i === 2 ? "bg-violet-300" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex justify-between text-[0.5rem] text-gray-500">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-[0.5rem] text-center text-slate-500 py-2 border-t border-slate-100">
            © 2025 Taskify.io, Inc
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block absolute border-10 border-slate-200 shadow-2xl h-[510px] w-[900px] bg-white rounded-3xl flex-col mt-80 p-1 overflow-hidden">
        <div className="h-10 flex items-center gap-4 border-b-slate-100 shadow-xs">
          <div className="flex gap-1 items-start px-5">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
          </svg>
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
          </svg>
          <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
          <div className="bg-slate-100 rounded-2xl w-[200px] flex items-center text-xs h-[25px] ml-35 gap-8">
            <svg className="w-3 h-3 text-gray-800 dark:text-white ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="black" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
            <h1>taskify.io</h1>
          </div>
          <div className="flex ml-65 gap-2">  
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
            </svg>
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
            </svg>
          </div>
        </div>
        <div className="max-h-115 h-full rounded-2xl shadow-xl ">
          <div className="h-9 flex justify-center items-center rounded-md">
            <div className="max-w-44 w-full h-9 flex items-center border-1 border-slate-200 justify-between p-3">
              <h1 className="font-Hero font-medium text-xl">Taskify</h1>
              <div className='border-1 border-slate-100 shadow-xs p-1 rounded-md'><IconArrowBarToLeft size={15} stroke={2} /></div>
            </div>
            <div className="w-3/4 h-9 flex items-center border-1 border-slate-200 p-4 ">
              <div className='border-1 flex items-center gap-3 border-slate-200 shadow-xs max-w-60 w-full rounded-md p-[0.2rem]'>
                <IconSearch size={13} stroke={2} />
                <h1 className='text-xs'>Search</h1>
              </div>
            </div>
            <div className="w-2/5 h-9 flex justify-between items-center border-1 border-slate-200">
              <div className='p-1 gap-2 flex'>
                <IconGift size={17} stroke={1.2} className=''/>
                <IconBell size={17} stroke={1.2}/>
                <IconOctagonPlus size={17} stroke={1.2}/>
              </div>
              <div className='flex items-center gap-2 m-2'>
                <IconUserCircle size={18} stroke={1.4}/>
                <h1 className='text-xs font-medium'>User</h1>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl max-h-105 overflow-hidden">
            <div className="border-1 border-slate-200 h-full max-w-44 w-full grid grid-rows-3 rounded-b-2xl">
            <div className="border-b-1 border-slate-300">
              <h1 className="text-[0.6rem] text-gray-500 ml-2 pt-3 pb-0.5">GENERAL</h1>
              <div className="grid grid-rows-4 mx-2 text-xs font-medium ">
                <div className="rounded-md p-1 bg-gray-100 flex items-center gap-2">
                  <IconLayoutDashboardFilled size={10} stroke={3}/>
                  <h1>Dashboard</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconCalendarDollar size={10} stroke={3}/>
                  <h1>Payment</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconUsers size={10} stroke={3}/>
                  <h1>Customers</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconMessage size={10} stroke={3}/>
                  <h1>Message</h1>
                </div>
              </div>
            </div>
            <div className="border-b-1 border-slate-300">
              <h1 className="text-[0.6rem] text-gray-500 ml-2 pt-3 pb-0.5">TOOLS</h1>
              <div className="grid grid-rows-4 mx-2 text-xs font-medium">
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconTag size={10} stroke={3}/>
                  <h1>Product</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconFileInvoice size={10} stroke={3}/>
                  <h1>Invoice</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconChartLine size={10} stroke={3}/>
                  <h1>Analytics</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconAdjustmentsSpark size={10} stroke={3}/>
                  <h1>Automation</h1>
                </div>
              </div>
            </div>
            <div className="border-b-1 border-slate-300">
              <h1 className="text-[0.6rem] text-gray-500 ml-2 pt-3 pb-0.5">SUPPORT</h1>
              <div className="grid grid-rows-4 mx-2 text-xs font-medium">
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconSettings size={10} stroke={3}/>
                  <h1>Settings</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconShieldLock size={10} stroke={3}/>
                  <h1>Security</h1>
                </div>
                <div className="rounded-md p-1 flex items-center gap-2">
                  <IconHelp size={10} stroke={3}/>
                  <h1>Help</h1>
                </div>
              </div>
            </div>
            <div className='text-xs h-9 flex items-center justify-center text-slate-500 shadow-xs'>@ 2025 Taskify.io, Inc</div>
            </div>
            <div className="w-full bg-slate-50 p-2 rounded-2xl">
              <div className="max-h-11 h-full p-2 flex justify-between">
                <h1 className="font-medium text-md px-2">Dashboard</h1>
                <div className="flex gap-2 text-[0.72rem] justify-center items-center mx-4">
                  <div className="p-0.5 px-2 flex items-center gap-1 rounded-xs shadow-xs border-slate-200 border-1">
                    <IconCalendarEventFilled size={12} stroke={1.5}/>
                    <h1>Aug-18 to Sep-18</h1>
                  </div>
                  <div className="p-0.5 px-2 flex items-center gap-1 rounded-xs shadow-xs border-slate-200 border-1">
                    <h1>Monthly</h1>
                    <IconChevronCompactDown size={10} stroke={2}/>
                  </div>
                  <div className="p-0.5 px-2 flex items-center gap-1 rounded-xs shadow-xs border-slate-200 border-1">
                    <IconFilter2 size={10} stroke={1.5}/>
                    <h1>Filter</h1>
                  </div>
                  <div className="p-0.5 px-2 flex items-center gap-1 rounded-xs shadow-xs border-slate-200 border-1">
                    <IconDownload size={10} stroke={1.5}/>
                    <h1>Export</h1>
                  </div>
                </div>
              </div>
              <div className="m-2 grid grid-cols-3 grid-rows-4 max-h-85 h-full gap-3">
                <div className="border-2 border-slate-200 rounded-md shadow-xs">
                  <div className="m-3 gap-1 flex flex-col font-medium">
                    <div className="text-[0.7rem] flex gap-1 items-center">
                      <IconEye size={12} stroke={2}/>
                      <h1>Page View</h1>
                      <IconInfoCircle size={12} stroke={2} className='ml-25'/>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1>
                        <CountUp end={12450} duration={2} separator="," enableScrollSpy />
                      </h1>
                      <div className="text-[0.5rem] px-1 bg-green-200 text-green-500 rounded-xs flex items-center gap-1">15.8%
                        <IconTrendingUp size={8} stroke={2}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-slate-200 rounded-md shadow-xs">
                  <div className="m-3 gap-1 flex flex-col font-medium">
                    <div className="text-[0.7rem] flex gap-1 items-center">
                      <IconDatabaseDollar size={12} stroke={2}/>
                      <h1>Total Revenue</h1>
                      <IconInfoCircle size={12} stroke={2} className='ml-20'/>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1>
                        <CountUp end={363.95} duration={2} prefix="$" decimals={2} enableScrollSpy />
                      </h1>
                      <div className="text-[0.5rem] px-1 bg-red-200 text-red-500 rounded-xs flex items-center gap-1">34.0%
                        <IconTrendingDown size={8} stroke={2}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-slate-200 rounded-md shadow-xs">
                  <div className="m-3 gap-1 flex flex-col font-medium">
                    <div className="text-[0.7rem] flex gap-2 items-center">
                      <IconEye size={12} stroke={2}/>
                      <h1>Bounce Rate</h1>
                      <IconInfoCircle size={12} stroke={2} className='ml-20'/>
                    </div>
                    <div className="flex items-center gap-4">
                      <CountUp end={86.5} duration={2} suffix="%" decimals={1} enableScrollSpy />
                      <div className="text-[0.5rem] px-1 bg-green-200 text-green-500 rounded-xs flex items-center gap-1">24.2%
                        <IconTrendingUp size={8} stroke={2}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-3 col-span-3 grid grid-cols-5 grid-rows-1 gap-3">
                  <div className="col-span-3 border-2 border-slate-200 rounded-md shadow-xs">
                    <div className="h-full p-2 flex flex-col gap-2.5">
                      <div className="font-medium text-xs flex justify-between items-center">
                        <div className='flex gap-2 items-center'>
                        <div className='bg-slate-100 rounded-md p-1 shadow-xs'><IconAdjustmentsSpark size={12} stroke={2}/></div>
                        <h1>List of Integration</h1>
                        </div>
                        <h1 className="text-violet-600">see all</h1>
                      </div>
                      <div className="grid grid-cols-4 items-center text-[0.6rem] text-slate-600 border border-slate-200 rounded-md bg-slate-100 p-2">
                        <div className="flex items-center gap-2">
                          <IconSquare size={10} stroke={1.5} />
                          <span>APPLICATION</span>
                        </div>
                        <span>TYPE</span>
                        <span>RATE</span>
                        <span className='ml-8'>PROFIT</span>
                      </div>
                      <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={{
                          hidden: {},
                          show: {
                            transition: {
                              staggerChildren: 0.2, 
                            },
                          },
                        }}
                        className="space-y-2">
                        {items.map((item, i) => (
                          <motion.div
                            key={i}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              show: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 2 }}
                            className="grid grid-cols-4 items-center text-[0.6rem] text-slate-600 
                                      border border-slate-200 rounded-md bg-slate-100 p-2"
                          >
                          <div className="flex items-center gap-2">
                            <IconSquare size={10} stroke={1.5} />
                            <span>{item.name}</span>
                          </div>
                          <span>{item.category}</span>
                          <span className="flex items-center justify-between w-full">
                          <div
                            className="h-1 bg-violet-400 rounded-2xl"
                            style={{ width: `${item.percent / 2}%` }} 
                          ></div>
                          <span>{item.percent}%</span>
                        </span>

                          <span className='ml-8'>{item.amount}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    </div>
                  </div>
                  <div className="col-span-2 border-2 border-slate-200 rounded-md shadow-xs">
                    <div className='flex flex-col p-2 gap-1.5'>
                      <div className='flex gap-2 items-center'>
                        <IconUsers size={13} stroke={2}/>
                        <h1 className='font-medium text-xs'>Total Subscriber</h1>
                        <div className='border-1 flex shadow-xs border-slate-100 rounded-md text-[0.5rem] p-1 ml-18 items-center gap-1'>
                          <h1>Weekly</h1>
                          <IconChevronCompactDown size={10} stroke={1.5}/>
                        </div>
                      </div>
                      <div className='font-medium '>24,473</div>
                      <div className='flex gap-1'>
                        <div className="text-[0.5rem] px-1 bg-green-200 text-green-500 rounded-xs flex items-center gap-1">15.8%
                          <IconTrendingUp size={8} stroke={2}/>
                        </div>
                        <div className='text-[0.7rem] text-gray-500'>+ 749 increased</div>
                      </div>
                      <div className="h-32 flex items-end gap-2">
                        {desktopHeights.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: h }}
                            transition={{ duration: 2, }} 
                            className={`max-w-7 w-full rounded-md ${
                              i === 2 ? "bg-violet-300" : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <div className='flex gap-4.5 text-xs'>
                        <h1>Sun</h1>
                        <h1>Mon</h1>
                        <h1>Tue</h1>
                        <h1>Web</h1>
                        <h1>Thu</h1>
                        <h1>Fri</h1>
                        <h1>Sat</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}