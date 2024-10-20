import { useEffect, useState } from 'react';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = import.meta.env.VITE_API_KEY;

export function useFetch(endpoint, deps = []) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/${endpoint}&apiKey=${API_KEY}`);
                const data = await res.json();

                if (data.status !== "ok") {
                    throw new Error("Failed to fetch articles!");
                }
                setData(data);
            } catch (error) {
                setError(error.message);
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [endpoint, ...deps]);

    return { data, isLoading, error };
}
