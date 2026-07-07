import React from 'react';
import Input from '@/components/ui/Input';

const AmountInput = ({
  value,
  onChange,
  error,
  placeholder = '0.00',
  className = '',
}) => {
  return (
    <Input
      label="Amount"
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      className={className}
    />
  );
};

export default AmountInput;