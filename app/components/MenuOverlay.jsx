import { defaults } from "autoprefixer";
import React from "react";

function MenuOverlay({links}) {
  return (
    <ul className=" flex flex-col py-4 items-center">
        {links.map((link,index) => 
            <li key={index} className="text-2xl font-bold text-white hover:text-red-500">
                <a href={link.path}>{link.title}</a>
            </li>
        )}
    </ul>
  )
}

export default MenuOverlay;