import React from 'react';
import Image from 'next/image';
import Title from './Title';
import Search from './Search';

export default function Header() {
    return (
        <div 
            className="relative flex flex-col h-screen p-3 bg-red-500 md:items-center max-h-96 md:flex-row"
        >
            <Image
                src="https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <Title />
            <Search />
        </div>
    )
}
