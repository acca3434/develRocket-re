'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/app/_utils/clsx/utils';
import { ConvertSizeType } from './ConvertSize';
import { InputType } from '.';
import ArrowDown from './ArrowDown';

type TextInputProps = {
  name?: string;
  readOnly?: boolean;
  label?: string;
  width?: keyof ConvertSizeType;
  height?: keyof ConvertSizeType;
  type?: InputType;
  id?: string;
  value?: string | number | undefined;
  options?: CourseOption[];
  title?: string;
  refV?: React.RefObject<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CourseOption = {
  value: string;
  label: string;
};

const defaultOptions: CourseOption[] = [
  { value: 'data1', label: 'option1 ' },
  { value: 'data2', label: 'option1 ' },
  { value: 'data3', label: 'option1 ' },
];

export const MenuItemInput: React.FC<TextInputProps> = ({
  label = '내용을 입력하세요',
  id = '',
  name = '',
  refV = '',
  options = defaultOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CourseOption>(
    options[0]
  );
  const toggleOptions = () => setIsOpen((prev) => !prev);
  const handleOptionclick = (option: CourseOption) => () => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  if (!options) return;
  return (
    <div
      className={cn(
        'flex flex-1 relative w-full',
        'border border-[#cbd0d7] rounded-lg',
        'md:text-sm',
        `${isOpen ? 'p-0' : 'pt-5 pr-[10px] pb-[10px]'}`
      )}
      id={id}
    >
      <div
        onClick={toggleOptions}
        className={cn(
          'w-full cursor-pointer bg-white flex justify-between',
          `${isOpen ? 'pl-3 pt-5 pr-[10px] pb-[10px]' : 'pl-3'}`,
          `${
            isOpen &&
            'bg-[#efefef] rounded-t-[10px] border-t-[1px] border-l-[1px] border-r-[1px] border-[#3d006d] '
          }`
        )}
      >
        {selectedOption.label}
        <label
          className={cn(
            'absolute left-2 top-3 cursor-text',
            '-top-[10px] left-3 w-fit  transition-all z-10 text-[14px] text-[#7b869a]',
            'bg-inherit rounded-lg'
          )}
          htmlFor={id}
        >
          {label}
        </label>
        <ArrowDown isOpen={isOpen} />
      </div>
      {isOpen && (
        <ul
          className={cn(
            'flex flex-col absolute w-full left-0 p-0 top-[100%]',
            'rounded-tr-none rounded-bl-md list-none',
            'bg-white border-[1px] border-[#3d006d]',
            'max-w-full max-h-[210px] z-[1] overflow-y-auto'
          )}
        >
          {options.map(({ value, label }) => (
            <li
              key={value}
              onClick={handleOptionclick({ value, label })}
              className="flex-1 cursor-pointer p-[8px] hover:bg-[#f5f5f5]"
            >
              {label}
            </li>
          ))}
        </ul>
      )}
      {name && (
        <input
          type="hidden"
          name={name}
          value={selectedOption.value}
          ref={refV}
        />
      )}
    </div>
  );
};
