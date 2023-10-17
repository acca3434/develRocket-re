import React, {
  ChangeEvent,
  useState,
  useEffect,
  HTMLInputTypeAttribute,
} from 'react';
import { cn } from '@/app/_util/clsx/utils';
import {
  ConvertSizeType,
  convertHeightClass,
  convertWidthClass,
} from './ConvertSize';
export type InputType = HTMLInputTypeAttribute | undefined;
export type InputValueType = string | number;

const InputLabelAnimation = (varType: boolean) =>
  varType ? 'bottom-[43px] left-2 text-sm' : 'bottom-4 left-3 text-base';

type TextInputProps = {
  readOnly?: boolean;
  label?: string;
  width?: keyof ConvertSizeType;
  height?: keyof ConvertSizeType;
  type?: InputType;
  defaultValue?: InputValueType;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  label = '내용을 입력하세요',
  type = 'text',
  width = '25%',
  height = '25%',
  onChange,
  value,
}) => {
  const [defaultValue, setDefaultValue] = useState<InputValueType>(
    value !== undefined ? value : ''
  );

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
    const hasValue = defaultValue !== '';
    if (hasValue && !labelFocused) {
      setLabelPosition(InputLabelAnimation(true));
    }
    if (!hasValue && labelFocused) {
      setLabelPosition(InputLabelAnimation(true));
    }
  }, [defaultValue, labelFocused]);

  return (
    <div className="relative">
      <input
        className={cn(
          'border border-gray-300 p-3 rounded-md shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          convertWidthClass(width as keyof ConvertSizeType),
          convertHeightClass(height as keyof ConvertSizeType)
        )}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={() => setLabelFocused(true)}
        onBlur={handleBlur}
      />
      <label
        className={cn(
          'absolute bg-white px-1 text-gray-500 transition-all',
          labelPosition
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
