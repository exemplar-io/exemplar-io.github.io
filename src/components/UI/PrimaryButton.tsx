import React from 'react';

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

const PrimaryButton = ({ title, onClick, disabled }: PrimaryButtonProps) => {
  return (
    <button
      className="bg-primary-500 shadow hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-500 focus:shadow-outline focus:outline-none text-secondary font-bold py-2 px-4 rounded"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
