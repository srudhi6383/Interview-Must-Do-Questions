// InnerMostComponent.js
import React, { useContext } from 'react';
import MyContext from './mycontext';

const InnerMostComponent = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <h4>Inner Most Component</h4>
            <p>{context.data}</p>
        </div>
    );
};

export default InnerMostComponent;
