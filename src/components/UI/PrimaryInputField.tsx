import React, { ChangeEvent } from 'react';

type PrimaryButtonProps = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const PrimaryInputField = ({
  id,
  placeholder,
  value,
  onChange,
}: PrimaryButtonProps) => {
  return (
    <input
      className="shadow appearance-none border-2 border-primary-500 rounded py-2 px-3 text-primary-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default PrimaryInputField;
