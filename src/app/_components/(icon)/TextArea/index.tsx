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
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  rows = 53,
  cols = 53,
  name = '',
  onChange,
  value,
  placeholder = '입력창을 입력하세요',
}) => {
  const handleOnFocusTextarea: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    onChange && onChange(e);
  };

  return (
    <div className="relative">
      <textarea
        className={cn(
          'border border-gray-300 p-3 rounded-[8px] shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        )}
        rows={rows}
        cols={cols}
        name={name}
        value={value}
        onChange={handleOnFocusTextarea}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
