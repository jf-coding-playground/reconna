import { useState } from 'react';

export function useFormSubmission(callback) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    callback(event);

    setValidated(true);
  };

  return {
    validated, 
    handleSubmit
  };
}