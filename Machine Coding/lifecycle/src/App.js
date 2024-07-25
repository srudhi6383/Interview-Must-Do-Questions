import React, { useState } from 'react';
import LifecycleLogger from './LifecycleLogger';

const App = () => {
    const [showComponent, setShowComponent] = useState(true);

    return (
        <div>
            <h1>My App</h1>
            <button onClick={() => setShowComponent(!showComponent)}>
                {showComponent ? 'Hide' : 'Show'} Component
            </button>
            {showComponent && <LifecycleLogger />}
        </div>
    );
};

export default App;
