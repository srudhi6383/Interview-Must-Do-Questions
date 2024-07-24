// OuterComponent.js
import React from 'react';
import InnerComponent from './InnerComponent';

const OuterComponent = () => {
    return (
        <div>
            <h2>Outer Component</h2>
            <InnerComponent />
        </div>
    );
};

export default OuterComponent;
