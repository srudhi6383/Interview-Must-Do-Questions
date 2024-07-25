import React, { useState } from 'react';
import useFetch from './useFetch'; 

const PaginatedList = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint
    const { data, loading, error } = useFetch(url);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Calculate the indices of the items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Pagination controls
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h1>Paginated List</h1>
            <ul>
                {currentItems.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <div>
                <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default PaginatedList;
