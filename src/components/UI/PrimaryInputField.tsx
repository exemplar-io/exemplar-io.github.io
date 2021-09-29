import React, { ChangeEvent } from 'react';

type PrimaryInputProps = {
  id: string;
  placeholder: string;
  error: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PrimaryInputField = ({
  id,
  placeholder,
  error,
  value,
  onChange,
}: PrimaryInputProps) => {
  let borderColor = 'border-primary-500';
  if (error) borderColor = 'border-error';

  return (
    <input
      className={
        'shadow appearance-none border-2 ' +
        borderColor +
        ' rounded py-2 px-3 text-primary-500 leading-tight focus:outline-none focus:shadow-outline'
      }
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default PrimaryInputField;
