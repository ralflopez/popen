import axios, { AxiosResponse } from 'axios';

export async function getCurated() {
    try {
        const API_KEY = process.env.PEXELS_API_KEY;
        const res: AxiosResponse = await axios.get('https://api.pexels.com/v1/curated?per_page=5', {
            headers: {
                Authorization: API_KEY
            }
        });

        return res;
    } catch(err) {
        return err;
    }
}