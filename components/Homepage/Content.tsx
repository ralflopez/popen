import React, { useEffect, useState } from 'react';
import ImageModal from './ImageModal';
import PreviewImage from './PreviewImage';

interface Props {
    data?: any
}

export default function Content({ data }: Props) {
    const [showModal, setShowModal] = useState(false);

    const showFullImage = (content: string) => {
        
    }
    
    return (
        <div className="p-3 text-white md:p-10">
            <h3 className="mb-5">Suggestion</h3>
            <ImageModal />
            <div className="flex flex-col flex-wrap items-center justify-center mb-8 lg:justify-start md:flex-row">
                {
                    data &&
                    data.photos.map(photo => (
                        <PreviewImage 
                            data={photo} 
                            key={photo.id}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row justify-center">
                <button className="px-5 py-2 m-2 transition duration-200 ease-out bg-gray-500 rounded-lg shadow-lg outline-none hover:bg-gray-700">Previous</button>
                <button className="px-5 py-2 m-2 transition duration-200 ease-out bg-red-500 rounded-lg shadow-lg outline-none hover:bg-red-700">Next</button>
            </div>
        </div>
    )
};