import React from 'react';
import Meta from './Meta';

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <div className="bg-gray-900">
                { children }
            </div>
        </>
    )
}
