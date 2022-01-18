import React from 'react';

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

const PrimaryButton = ({ title, onClick, disabled }: PrimaryButtonProps) => {
  return (
    <button
      className="bg-primary-800 shadow hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50  focus:shadow-outline focus:outline-none text-secondary font-semibold py-2 px-4 rounded"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
