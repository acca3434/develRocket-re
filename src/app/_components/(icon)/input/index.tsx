'use client';
import React, { HTMLInputTypeAttribute } from 'react';
import { cn } from '@/app/_utils/clsx/utils';
import {
  ConvertSizeType,
  convertHeightClass,
  convertWidthClass,
} from './ConvertSize';

export type InputType = HTMLInputTypeAttribute | undefined;
export type InputValueType = string | number;

type TextInputProps = {
  name?: string;
  readOnly?: boolean;
  label?: string;
  width?: keyof ConvertSizeType;
  height?: keyof ConvertSizeType;
  type?: InputType;
  id?: string;
  value?: string | number | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  label = '내용을 입력하세요',
  type = 'text',
  width = '25%',
  height = '25%',
  name = '',
  onChange,
  value,
  id = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <div className="relative">
      <input
        className={cn(
          'border py-1 border-gray-300 p-3 rounded-[8px] shadow-sm',
          'peer transition-colors focus:border-2 focus:border-[#5569FF]',
          `${value ? 'border-[#5569FF] border-2 transition-colors' : ''}`,
          convertWidthClass(width as keyof ConvertSizeType),
          convertHeightClass(height as keyof ConvertSizeType)
        )}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
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

export default TextInput;
