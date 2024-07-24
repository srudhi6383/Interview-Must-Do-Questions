import React from 'react';

const Step2 = ({ formData, dispatch }) => {
    const handleChange = (e) => {
        dispatch({ type: 'SET_LAST_NAME', payload: e.target.value });
    };

    return (
        <div>
            <h2>Step 2</h2>
            <label>Last Name:</label>
            <input type="text" value={formData.lastName} onChange={handleChange} required />
        </div>
    );
};

export default Step2;