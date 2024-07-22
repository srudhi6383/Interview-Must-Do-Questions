import React, { useRef, useEffect } from 'react';

const FocusForm = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Autofocus the input field when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here

        // Maintain focus on the input field after form submission
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputField">Input:</label>
                <input
                    id="inputField"
                    type="text"
                    ref={inputRef}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FocusForm;
