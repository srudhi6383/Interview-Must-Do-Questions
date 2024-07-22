import React from 'react';
import FactorialCalculator from './FactorialCalculator';

const App = () => {
    return (
        <div>
            <h1>Memoization with useMemo and useCallback</h1>
            <FactorialCalculator />
        </div>
    );
};

export default App;
