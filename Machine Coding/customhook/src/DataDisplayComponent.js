import React from 'react';
import useFetch from './useFetch'; 

const DataDisplayComponent = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint
    const { data, loading, error } = useFetch(url);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataDisplayComponent;
