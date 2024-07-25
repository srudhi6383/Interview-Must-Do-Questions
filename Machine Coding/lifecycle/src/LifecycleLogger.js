import React, { useState, useEffect } from 'react';

const LifecycleLogger = () => {
    const [count, setCount] = useState(0);

    // Log a message when the component mounts
    useEffect(() => {
        console.log('Component mounted');
        return () => {
            // Log a message when the component unmounts
            console.log('Component unmounted');
        };
    }, []);

    // Log a message when the component updates
    useEffect(() => {
        if (count !== 0) { // Avoid logging on initial mount
            console.log('Component updated');
        }
    }, [count]);

    return (
        <div>
            <h1>Component Lifecycle Logger</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default LifecycleLogger;
