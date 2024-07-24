import React from 'react';

const Step1 = ({ formData, dispatch }) => {
    const handleChange = (e) => {
        dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value });
    };

    return (
        <div>
            <h2>Step 1</h2>
            <label>First Name:</label>
            <input type="text" value={formData.firstName} onChange={handleChange} required />
        </div>
    );
};

export default Step1;