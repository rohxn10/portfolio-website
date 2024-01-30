import React from "react";

function MenuOverlay({links}) {
  return (
    <ul className=" flex flex-col py-4 items-center">
        {links.map((link,index) => 
            <li key={index} className="text-xl text-[#bdb9b9] hover:text-red-500">
                <a href={link.path}>{link.title}</a>
            </li>
        )}
    </ul>
  )
}

export default MenuOverlay;