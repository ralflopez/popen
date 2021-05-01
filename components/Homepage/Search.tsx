import React from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export default function Search() {
    return (
        <div className="z-20 flex items-center justify-center flex-grow text-center">
            <input 
                type="text"
                placeholder="Search"
                className="w-full h-16 max-w-lg px-5 py-3 mr-2 transition duration-200 ease-in-out bg-gray-200 shadow-lg outline-none rounded-2xl opacity-80 focus:bg-white focus:opacity-100"
            />
            <div className="relative flex items-center justify-center flex-shrink-0 transition duration-200 ease-out bg-red-500 rounded-full shadow-lg w-14 h-14 md:right-10 md:top-5 hover:bg-red-700">
                <SearchIcon color="white" />
            </div>
        </div>
    )
}
