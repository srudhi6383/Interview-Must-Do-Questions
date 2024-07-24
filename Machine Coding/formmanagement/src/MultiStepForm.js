import React, { useReducer, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { formReducer } from './formReducer';

const initialState = {
    firstName: '',
    lastName: '',
    email: ''
};

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, dispatch] = useReducer(formReducer, initialState);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 formData={formData} dispatch={dispatch} />;
            case 2:
                return <Step2 formData={formData} dispatch={dispatch} />;
            case 3:
                return <Step3 formData={formData} dispatch={dispatch} />;
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {renderStep()}
            <div>
                {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
                {step < 3 ? (
                    <button type="button" onClick={nextStep}>Next</button>
                ) : (
                    <button type="submit">Submit</button>
                )}
            </div>
        </form>
    );
};

export default MultiStepForm;