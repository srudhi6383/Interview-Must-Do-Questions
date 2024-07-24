// InnerComponent.js
import React from 'react';
import InnerMostComponent from './InnerMostComponent';

const InnerComponent = () => {
    return (
        <div>
            <h3>Inner Component</h3>
            <InnerMostComponent />
        </div>
    );
};

export default InnerComponent;
