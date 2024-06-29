import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const navItems = ['Home', 'Projects', 'Contact', 'Blog'];
    const [lastHovered, setLastHovered] = useState(null);
    const [selectedItem, setSelectedItem] = useState(navItems[0]);
    return (
        <nav className='mt-12 select-none'>
            <ul className="flex flex-col font-bold font gap-3 text-[12px] xl:text-xs max-w-10">
            {navItems.map((item) => (
                <li
                key={item}
                className="relative"
                onMouseEnter={() => setLastHovered(item)}
                onMouseLeave={() => setLastHovered(null)}
                onClick={() => setSelectedItem(item)}
                >
                <NavLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={(lastHovered === item ? 'text-gray-400 animate-pulse transition-all duration-300' : 'text-white transition-all duration-300')
                    }
                >
                    {selectedItem === item ? <div className=''>•</div> : <div>{item}</div>}
                    
                </NavLink>
                </li>
            ))}
            </ul>
        </nav>
    )
}