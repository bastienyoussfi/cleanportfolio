import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const [lastHovered, setLastHovered] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const navItems = ['Home', 'Projects', 'About', 'Blog'];
    return (
        <nav className='mt-12'>
            <ul className="flex flex-col font-bold font gap-3 text-xs max-w-10">
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
                    {item}
                </NavLink>
                {selectedItem === item && (
                    <span className="absolute -left-6 text-2xl top-1/2 transform -translate-y-[65%]">
                    →
                    </span>
                )}
                </li>
            ))}
            </ul>
        </nav>
    )
}