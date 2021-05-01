import React from 'react';
import { getCurated } from '../../lib/pexels';

interface Props {
    data?: any
}

export default function Content({ data }: Props) {
    console.log(data);
    return (
        <div className="p-3 text-white md:p-10">
            <h3>Suggestion</h3>
        </div>
    )
};

export async function getServerSideProps() {
    try {
        const data = await getCurated();

        return {
            props: { data: 'success' }
        }
    } catch(err) {
        return {
            props: { data: err}
        }
    }
}