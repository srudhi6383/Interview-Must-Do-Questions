import React, { useState } from 'react';

const DynamicForm = ({ formData }) => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formState);
  };

  const renderInput = (input) => {
    switch (input.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'date':
      case 'tel':
        return (
          <div key={input.name}>
            <label>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              pattern={input.validation?.pattern}
              title={input.validation?.errorMessage}
              onChange={handleChange}
            />
          </div>
        );
      case 'radio':
        return (
          <div key={input.name}>
            <label>{input.label}</label>
            {input.options.map((option) => (
              <div key={option.value}>
                <input
                  type="radio"
                  name={input.name}
                  value={option.value}
                  required={input.required}
                  onChange={handleChange}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        );
      case 'select':
        return (
          <div key={input.name}>
            <label>{input.label}</label>
            <select name={input.name} required={input.required} onChange={handleChange}>
              {input.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case 'checkbox':
        return (
          <div key={input.name}>
            <label>
              <input
                type="checkbox"
                name={input.name}
                required={input.required}
                onChange={handleChange}
              />
              {input.label}
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form id={formData.form.id} action={formData.form.submitButton.action} method={formData.form.submitButton.method} onSubmit={handleSubmit}>
      <h2>{formData.form.title}</h2>
      <p>{formData.form.description}</p>
      {formData.form.levels.map((level) => (
        <fieldset key={level.level}>
          <legend>{level.title}</legend>
          {level.inputs.map((input) => renderInput(input))}
        </fieldset>
      ))}
      <button type="submit">{formData.form.submitButton.label}</button>
    </form>
  );
};

export default DynamicForm;
