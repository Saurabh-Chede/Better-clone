"use client"
import React from "react"
import Link from "next/link"
import { ArrowRight, Phone, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import dropdownData from "@/data/dropdownData"
import { useState } from "react"
import { X } from "lucide-react"



function Navbar() {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    return (
        // <header className="bg-emerald-900 text-white px-[20px] py-[20px] sticky top-0 z-50">
        //     <div className="max-w-7xl mx-auto flex items-center justify-between">
        //         <div className="flex items-center space-x-8">
        //             <Link href="/" className="text-xl font-bold">
        //                 <img src="/images/download (21).svg" className="invert" width={60} height={60} alt="" />
        //             </Link>

        //             {/* All Nav Links with Dropdown */}
        //             <nav className="hidden md:flex space-x-6 items-center relative">
        //                 {Object.entries(dropdownData).map(([label, items]) => (
        //                     <div key={label} className="relative group ">

        //                         <span className="cursor-pointer py-[12px] px-[18px] rounded-4xl transition-colors group-hover:bg-white group-hover:text-green-900">
        //                             {label}
        //                         </span>


        //                         <div className="absolute top-full left-0 w-full h-3 pointer-events-none"></div>

        //                         {/* Dropdown Panel */}

        //                         <div className="absolute top-full left-0 mt-3 hidden group-hover:block bg-white text-black rounded-md shadow-lg p-4 w-[300px] z-10">
        //                             <ul className="space-y-2">
        //                                 {items.map((item) => (
        //                                     <li key={item.title}>
        //                                         <Link
        //                                             href={item.href}
        //                                             className="block px-2 py-3 rounded hover:bg-emerald-100 group/item"
        //                                         >
        //                                             <div className="flex justify-between items-center">
        //                                                 <span className="text-[16px] text-gray-950 font-semibold">{item.title}</span>
        //                                                 <span className="text-emerald-900 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
        //                                                     <ArrowRight width={24} height={24}></ArrowRight>
        //                                                 </span>
        //                                             </div>
        //                                         </Link>
        //                                     </li>
        //                                 ))}
        //                             </ul>
        //                         </div>

        //                     </div>
        //                 ))}
        //             </nav>
        //         </div>

        //         {/* Right Side Buttons (no dropdowns) */}
        //         <div className="flex items-center space-x-4">
        //             <div className="relative group">
        //                 {/* Phone Icon Button */}
        //                 <div className="p-[14px] rounded-full border hover:bg-white hover:text-black cursor-pointer">
        //                     <Phone className="w-4 h-4" />
        //                 </div>

        //                 {/* Dropdown on hover */}
        //                 <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white text-black rounded-md shadow-md px-8 py-8 text-sm z-50 whitespace-nowrap">
        //                     Call us anytime at 415-523-8837
        //                 </div>
        //             </div>

        //             <Link
        //                 href="#"
        //                 className="text-sm font-bold hover:text-black px-8 py-3.5 rounded-4xl hover:bg-white"
        //             >
        //                 Sign in
        //             </Link>
        //             <button className="bg-emerald-400 hover:bg-emerald-900 hover:text-white text-emerald-900 font-semibold px-8 py-3.5 rounded-4xl">
        //                 Continue
        //             </button>
        //         </div>
        //     </div>
        // </header>
        // <header className="bg-emerald-900 text-white px-[20px] py-[20px] sticky top-0 z-50">
        //     <div className="max-w-7xl mx-auto flex items-center justify-between">
        //         <div className="flex items-center space-x-8">
        //             <Link href="/" className="text-xl font-bold">
        //                 <img src="/images/download (21).svg" className="invert" width={60} height={60} alt="" />
        //             </Link>

        //             {/* Desktop Dropdown Navigation */}
        //             <nav className="hidden md:flex space-x-6 items-center relative">
        //                 {Object.entries(dropdownData).map(([label, items]) => (
        //                     <div key={label} className="relative group">
        //                         <span className="cursor-pointer py-[12px] px-[18px] rounded-4xl transition-colors group-hover:bg-white group-hover:text-green-900">
        //                             {label}
        //                         </span>
        //                         <div className="absolute top-full left-0 w-full h-3 pointer-events-none"></div>
        //                         <div className="absolute top-full left-0 mt-3 hidden group-hover:block bg-white text-black rounded-md shadow-lg p-4 w-[300px] z-10">
        //                             <ul className="space-y-2">
        //                                 {items.map((item) => (
        //                                     <li key={item.title}>
        //                                         <Link
        //                                             href={item.href}
        //                                             className="block px-2 py-3 rounded hover:bg-emerald-100 group/item"
        //                                         >
        //                                             <div className="flex justify-between items-center">
        //                                                 <span className="text-[16px] text-gray-950 font-semibold">{item.title}</span>
        //                                                 <span className="text-emerald-900 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
        //                                                     <ArrowRight width={20} height={20} />
        //                                                 </span>
        //                                             </div>
        //                                         </Link>
        //                                     </li>
        //                                 ))}
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </nav>
        //         </div>

        //         {/* Right Buttons */}
        //         <div className="flex items-center space-x-4">
        //             {/* Phone with hover dropdown */}
        //             <div className="relative group hidden md:block">
        //                 <div className="p-[14px] rounded-full border hover:bg-white hover:text-black cursor-pointer">
        //                     <Phone className="w-4 h-4" />
        //                 </div>
        //                 <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white text-black rounded-md shadow-md px-8 py-8 text-sm z-50 whitespace-nowrap">
        //                     Call us anytime at 415-523-8837
        //                 </div>
        //             </div>

        //             <Link
        //                 href="#"
        //                 className="text-sm font-bold hover:text-black px-8 py-3.5 rounded-4xl hover:bg-white"
        //             >
        //                 Sign in
        //             </Link>
        //             <button className="bg-emerald-400 hover:bg-emerald-900 hover:text-white text-emerald-900 font-semibold px-8 py-3.5 rounded-4xl">
        //                 Continue
        //             </button>

        //             {/* Mobile Sheet Menu */}
        //             <div className="md:hidden">
        //                 <Sheet className="bg-white">
        //                     <SheetTrigger asChild>
        //                         <button className="p-2 rounded-full border hover:bg-white hover:text-black">
        //                             <Menu className="w-5 h-5" />
        //                         </button>
        //                     </SheetTrigger>
        //                     <SheetContent side="left" className="w-[300px] p-5">
        //                         <div className="space-y-6">
        //                             {Object.entries(dropdownData).map(([label, items]) => (
        //                                 <div key={label}>
        //                                     <h4 className="font-semibold text-lg text-emerald-900 mb-2">{label}</h4>
        //                                     <ul className="space-y-1 pl-2">
        //                                         {items.map((item) => (
        //                                             <li key={item.title}>
        //                                                 <Link href={item.href} className="block py-2 text-sm text-gray-700 hover:text-emerald-800">
        //                                                     {item.title}
        //                                                 </Link>
        //                                             </li>
        //                                         ))}
        //                                     </ul>
        //                                 </div>
        //                             ))}

        //                             <hr />

        //                             <Link
        //                                 href="#"
        //                                 className="block w-full text-sm font-semibold text-center py-2 border rounded hover:bg-emerald-100"
        //                             >
        //                                 Sign In
        //                             </Link>
        //                             <button className="w-full bg-emerald-400 text-emerald-900 hover:bg-emerald-900 hover:text-white font-semibold py-2 rounded">
        //                                 Continue
        //                             </button>
        //                         </div>
        //                     </SheetContent>
        //                 </Sheet>
        //             </div>
        //         </div>
        //     </div>
        // </header>
        <>
            <header className="bg-emerald-900 text-white px-[20px] py-[20px] sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="text-xl font-bold">
                            <img src="/images/download (21).svg" className="invert" width={60} height={60} alt="logo" />
                        </Link>

                        {/* Desktop Dropdown */}
                        <nav className="hidden md:flex space-x-6 items-center relative">
                            {Object.entries(dropdownData).map(([label, items]) => (
                                <div key={label} className="relative group">
                                    <span className="cursor-pointer py-[12px] px-[18px] rounded-4xl transition-colors group-hover:bg-white group-hover:text-green-900">
                                        {label}
                                    </span>
                                    <div className="absolute top-full left-0 w-full h-3 pointer-events-none"></div>
                                    <div className="absolute top-full left-0 mt-3 hidden group-hover:block bg-white text-black rounded-md shadow-lg p-4 w-[300px] z-10">
                                        <ul className="space-y-2">
                                            {items.map((item) => (
                                                <li key={item.title}>
                                                    <Link
                                                        href={item.href}
                                                        className="block px-2 py-3 rounded hover:bg-emerald-100 group/item"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-[16px] text-gray-950 font-semibold">{item.title}</span>
                                                            <span className="text-emerald-900 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                                                <ArrowRight width={20} height={20} />
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Phone Dropdown */}
                        <div className="relative group hidden md:block">
                            <div className="p-[14px] rounded-full border hover:bg-white hover:text-black cursor-pointer">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white text-black rounded-md shadow-md px-8 py-8 text-sm z-50 whitespace-nowrap">
                                Call us anytime at 415-523-8837
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="text-sm font-bold hover:text-black px-8 py-3.5 rounded-4xl hover:bg-white"
                        >
                            Sign in
                        </Link>
                        <button className="bg-emerald-400 hover:bg-emerald-900 hover:text-white text-emerald-900 font-semibold px-8 py-3.5 rounded-4xl">
                            Continue
                        </button>

                        {/* Mobile Sidebar Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-2 rounded-full border hover:bg-white hover:text-black"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                {sidebarOpen && (
                    <div className="fixed top-0 left-0 h-full w-full bg-white text-black z-50 p-5 shadow-lg transition-transform">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-emerald-900">Menu</h2>
                            <button onClick={() => setSidebarOpen(false)}>
                                <X className="w-6 h-6 text-emerald-900" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {Object.entries(dropdownData).map(([label, items]) => (
                                <div key={label}>
                                    <button
                                        onClick={() =>
                                            setActiveDropdown(activeDropdown === label ? null : label)
                                        }
                                        className="w-full text-left text-lg font-semibold text-emerald-900 flex justify-between items-center"
                                    >
                                        {label}
                                        <ArrowRight
                                            className={`w-4 h-4 transform transition-transform ${activeDropdown === label ? "rotate-90" : ""
                                                }`}
                                        />
                                    </button>
                                    {activeDropdown === label && (
                                        <ul className="pl-4 mt-2 space-y-1">
                                            {items.map((item) => (
                                                <li key={item.title}>
                                                    <Link href={item.href} className="block py-2 text-sm text-gray-700 hover:text-emerald-800">
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <hr />

                            <Link
                                href="#"
                                className="block w-full text-sm font-semibold text-center py-2 border rounded hover:bg-emerald-100"
                            >
                                Sign In
                            </Link>
                            <button className="w-full bg-emerald-400 text-emerald-900 hover:bg-emerald-900 hover:text-white font-semibold py-2 rounded">
                                Continue
                            </button>
                        </div>
                    </div>
                )}
            </header>

        </>

    )
}

export default Navbar

