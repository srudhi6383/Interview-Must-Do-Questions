import React from 'react';
import DynamicForm from './DynamicForm';

const formData = {
  "form": {
    "id": "userRegistrationForm",
    "title": "User Registration",
    "description": "Please fill out the form to register a new account.",
    "levels": [
      {
        "level": 1,
        "title": "Personal Information",
        "inputs": [
          {
            "type": "text",
            "label": "First Name",
            "name": "firstName",
            "placeholder": "Enter your first name",
            "required": true,
            "validation": {
              "pattern": "^[a-zA-Z]+$",
              "errorMessage": "First name can only contain letters."
            }
          },
          {
            "type": "text",
            "label": "Last Name",
            "name": "lastName",
            "placeholder": "Enter your last name",
            "required": true,
            "validation": {
              "pattern": "^[a-zA-Z]+$",
              "errorMessage": "Last name can only contain letters."
            }
          },
          {
            "type": "email",
            "label": "Email",
            "name": "email",
            "placeholder": "Enter your email address",
            "required": true,
            "validation": {
              "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
              "errorMessage": "Please enter a valid email address."
            }
          },
          {
            "type": "date",
            "label": "Date of Birth",
            "name": "dob",
            "required": true
          },
          {
            "type": "radio",
            "label": "Gender",
            "name": "gender",
            "options": [
              { "label": "Male", "value": "male" },
              { "label": "Female", "value": "female" },
              { "label": "Other", "value": "other" }
            ],
            "required": true
          }
        ]
      },
      {
        "level": 2,
        "title": "Account Information",
        "inputs": [
          {
            "type": "text",
            "label": "Username",
            "name": "username",
            "placeholder": "Choose a username",
            "required": true,
            "validation": {
              "pattern": "^[a-zA-Z0-9]{5,}$",
              "errorMessage": "Username must be at least 5 characters long and contain only letters and numbers."
            }
          },
          {
            "type": "password",
            "label": "Password",
            "name": "password",
            "placeholder": "Enter a password",
            "required": true,
            "validation": {
              "pattern": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
              "errorMessage": "Password must be at least 8 characters long, and contain at least one letter and one number."
            }
          },
          {
            "type": "password",
            "label": "Confirm Password",
            "name": "confirmPassword",
            "placeholder": "Re-enter your password",
            "required": true,
            "validation": {
              "matchField": "password",
              "errorMessage": "Passwords do not match."
            }
          }
        ]
      },
      {
        "level": 3,
        "title": "Contact Information",
        "inputs": [
          {
            "type": "tel",
            "label": "Phone Number",
            "name": "phone",
            "placeholder": "Enter your phone number",
            "required": true,
            "validation": {
              "pattern": "^\\+?[0-9]{7,15}$",
              "errorMessage": "Please enter a valid phone number."
            }
          },
          {
            "type": "text",
            "label": "Address",
            "name": "address",
            "placeholder": "Enter your address",
            "required": true
          },
          {
            "type": "text",
            "label": "City",
            "name": "city",
            "placeholder": "Enter your city",
            "required": true
          },
          {
            "type": "text",
            "label": "State",
            "name": "state",
            "placeholder": "Enter your state",
            "required": true
          },
          {
            "type": "text",
            "label": "Zip Code",
            "name": "zip",
            "placeholder": "Enter your zip code",
            "required": true,
            "validation": {
              "pattern": "^[0-9]{5}(?:-[0-9]{4})?$",
              "errorMessage": "Please enter a valid zip code."
            }
          },
          {
            "type": "select",
            "label": "Country",
            "name": "country",
            "options": [
              { "label": "United States", "value": "US" },
              { "label": "Canada", "value": "CA" },
              { "label": "United Kingdom", "value": "UK" },
              { "label": "Australia", "value": "AU" },
              {"label": "India", "value":"IN",}
            ],
            "required": true
          }
        ]
      },
      {
        "level": 4,
        "title": "Terms and Conditions",
        "inputs": [
          {
            "type": "checkbox",
            "label": "I agree to the terms and conditions",
            "name": "terms",
            "required": true
          }
        ]
      }
    ],
    "submitButton": {
      "label": "Register",
      "action": "/submit-registration",
      "method": "POST"
    }
  }
};

const App = () => (
  <div className="App">
    <DynamicForm formData={formData} />
  </div>
);

export default App;
