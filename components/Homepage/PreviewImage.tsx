import React from 'react';
import Image from 'next/image';

interface Props {
    data: any,
    key: number | string
}

export default function PreviewImage({ data, key }: Props) {
    return (
        <div className="inline-block mb-5 mr-5 transition duration-200 ease-out cursor-pointer hover:opacity-80" key={key}>
            <Image 
                src={data.src.original}
                alt="preview"
                width={400}
                height={400}
                objectFit="cover"
            />
        </div>
    )
}
