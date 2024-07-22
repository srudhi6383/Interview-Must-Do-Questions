import React, { useState, useMemo, useCallback } from 'react';

const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};

const ChildComponent = React.memo(({ calculate }) => {
    console.log('ChildComponent rendered');
    return (
        <div>
            <button onClick={calculate}>Recalculate Factorial</button>
        </div>
    );
});

const FactorialCalculator = () => {
    const [number, setNumber] = useState(1);

    const factorialValue = useMemo(() => {
        console.log('Calculating factorial...');
        return factorial(number);
    }, [number]);

    const calculateFactorial = useCallback(() => {
        console.log('Recalculating factorial...');
        return factorialValue;
    }, [factorialValue]);

    return (
        <div>
            <h1>Factorial Calculator</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                min="0"
            />
            <p>Factorial: {factorialValue}</p>
            <ChildComponent calculate={calculateFactorial} />
        </div>
    );
};

export default FactorialCalculator;
