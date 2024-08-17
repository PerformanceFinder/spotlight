'use client';

import { useEffect } from 'react';
import { FormPage } from '@/components/component/formpage'; // Import the FormPage component

export default function Form() {
  useEffect(() => {
    // Perform any necessary actions when the Form page loads
    console.log('Form page loaded');
  }, []);

  return (
    <div>
      <FormPage />
    </div>
  );
}
