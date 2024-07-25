import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Modal Title</h2>
                <p>This is the modal content.</p>
                <button onClick={onClose}>Close Modal</button>
            </div>
        </div>
    );
};

export default Modal;
