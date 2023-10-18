import { ChangeEvent, useState } from 'react';
type FormValues<T> = {
  [key in keyof T]: string | number;
};

type UseFormReturnType<T> = [
  FormValues<T>,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void,
  (e: ChangeEvent<HTMLTextAreaElement>) => void
];

export const useForm = <T extends Record<string, string | number>>(
  initialValues: T
): UseFormReturnType<T> => {
  const [formValues, setFormValues] = useState<FormValues<T>>(initialValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = initialValues[name] === 'number' ? Number(value) : value;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: newValue,
    }));
  };

  const resetForm = () => {
    setFormValues(initialValues);
  };
  const handleInputAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newValue = initialValues[name] === 'number' ? Number(value) : value;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: newValue,
    }));
  };

  return [formValues, handleInputChange, resetForm, handleInputAreaChange];
};
