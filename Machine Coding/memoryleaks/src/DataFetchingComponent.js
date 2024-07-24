import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Track if the component is mounted

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                if (isMounted) {
                    setData(result);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            }
        };

        fetchData();

        // Cleanup function to set isMounted to false
        return () => {
            isMounted = false;
        };
    }, []); // Empty dependency array means this effect runs only once on mount

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Title :{data.title}</h1>
            <p>Body :{data.body}</p>
        </div>
    );
};

export default DataFetchingComponent;
