import React from 'react';

const Step3 = ({ formData, dispatch }) => {
    const handleChange = (e) => {
        dispatch({ type: 'SET_EMAIL', payload: e.target.value });
    };

    return (
        <div>
            <h2>Step 3</h2>
            <label>Email:</label>
            <input type="email" value={formData.email} onChange={handleChange} required />
        </div>
    );
};

export default Step3;