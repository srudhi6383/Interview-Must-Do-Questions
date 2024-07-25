import React, { useState } from 'react';
import Modal from './Modal'; // Ensure the path is correct

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <h1>My App</h1>
            <button onClick={toggleModal}>
                {showModal ? 'Hide' : 'Show'} Modal
            </button>
            <Modal show={showModal} onClose={toggleModal} />
        </div>
    );
};

export default App;
