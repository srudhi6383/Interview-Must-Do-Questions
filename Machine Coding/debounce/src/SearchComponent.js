import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery) {
            setLoading(true);
            fetch(`https://api.example.com/search?query=${debouncedQuery}`)
                .then((response) => response.json())
                .then((data) => {
                    setLoading(false);
                    setResults(data.results);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err);
                });
        } else {
            setResults([]);
        }
    }, [debouncedQuery]);

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;