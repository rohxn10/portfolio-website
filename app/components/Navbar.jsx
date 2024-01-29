"use client";
import React, {useState} from "react";  
import Link from "next/link";
import NavLink from "./NavLink";
import {Bars3Icon , XmarkIcon} from "@heroicons/react/24/solid";

const navLinks=[
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Resume",
        path: "/resume"
    }
]

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
        <nav className="fixed top-0 left-0 right-0 bg-[#212121] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1 mt-3 ">
                <Link href="/" className="text-2xl md:text-4xl text-white font-bold">LOGO</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen?( <button onClick={()=>setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"><Bars3Icon className="h-5 w-5"/></button>) :( <button onClick={()=>setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-red-500"><XmarkIcon className="h-5 w-5"/></button>)
                    }
                    {/* {console.log(navbarOpen)} */}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-5 md:p-0 md:flex-row justify-between md:space-x-8 mt-0">
                        {navLinks.map((link,index) => 
                            <li key={index}>
                                <NavLink title={link.title} href={link.path}/> 
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}