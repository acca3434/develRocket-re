'use client';
import React, { useState, useEffect, FocusEventHandler } from 'react';
import { cn } from '@/app/_utils/clsx/utils';

type TextAreaProps = {
  name?: string;
  rows?: number;
  cols?: number;
  readOnly?: boolean;
  label?: string;
  value?: string | number | undefined;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  rows = 53,
  cols = 53,
  name = '',
  onChange,
  value,
  id = '',
  label = '',
}) => {
  const handleOnFocusTextarea: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    onChange && onChange(e);
  };

  return (
    <div className="relative">
      <textarea
        className={cn(
          'border py-1 border-gray-300 p-3 rounded-[8px] shadow-sm',
          'peer transition-colors focus:border-2 focus:border-[#5569FF]',
          `${value ? 'border-[#5569FF] border-2 transition-colors' : ''}`
        )}
        rows={rows}
        cols={cols}
        id={id}
        name={name}
        value={value}
        onChange={handleOnFocusTextarea}
      />
      <label
        className={cn(
          'absolute left-2 top-3 cursor-text transition-all',
          'peer-focus:-top-2 peer-focus:left-3 peer-focus:w-fit peer-focus:bg-white peer-focus:text-[14px] peer-focus:text-[#5569FF]',
          `${
            value
              ? '-top-2 left-3 w-fit bg-white text-[14px] text-[#5569FF]'
              : ''
          }`
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
