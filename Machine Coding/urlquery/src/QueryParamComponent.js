import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QueryParamComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get('param') || ''; // Read query parameter 'param'

    // Handle input change and update URL query parameter
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchParams({ param: newValue });
    };

    return (
        <div>
            <h1>Query Parameter Example</h1>
            <p>Current query parameter: <strong>{queryParam}</strong></p>
            <input
                type="text"
                value={queryParam}
                onChange={handleInputChange}
                placeholder="Update query parameter"
            />
        </div>
    );
};

export default QueryParamComponent;
