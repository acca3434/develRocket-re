'use client';
import React, {
  ChangeEvent,
  useState,
  useEffect,
  HTMLInputTypeAttribute,
} from 'react';
import { cn } from '@/app/_utils/clsx/utils';
import {
  ConvertSizeType,
  convertHeightClass,
  convertWidthClass,
} from './ConvertSize';

export type InputType = HTMLInputTypeAttribute | undefined;
export type InputValueType = string | number;

const InputLabelAnimation = (varType: boolean) =>
  varType ? 'bottom-[52px] left-2 text-sm' : 'bottom-4 left-3 text-base';

type TextInputProps = {
  name?: string;
  readOnly?: boolean;
  label?: string;
  width?: keyof ConvertSizeType;
  height?: keyof ConvertSizeType;
  type?: InputType;
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
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  const [labelFocused, setLabelFocused] = useState(false);
  const [labelPosition, setLabelPosition] = useState(
    InputLabelAnimation(labelFocused)
  );
  const handleBlur = () => {
    setLabelFocused(false);
    if (value === '') {
      setLabelPosition(InputLabelAnimation(false));
    }
  };
  useEffect(() => {
    const hasValue = value !== '';
    if (hasValue && !labelFocused) {
      setLabelPosition(InputLabelAnimation(true));
    }
    if (!hasValue && labelFocused) {
      setLabelPosition(InputLabelAnimation(true));
    }
  }, [value, labelFocused]);

  return (
    <div className="relative">
      <input
        className={cn(
          'border border-gray-300 p-3 rounded-[8px] shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          convertWidthClass(width as keyof ConvertSizeType),
          convertHeightClass(height as keyof ConvertSizeType)
        )}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={() => setLabelFocused(true)}
        onBlur={handleBlur}
      />
      <label
        className={cn(
          'absolute bg-white px-1 text-gray-500 transition-all pointer-events-none',
          labelPosition
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
