import React from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { cn } from '@/app/_utils/clsx/utils';
import CloudUploadIcon from '../../(icon)/Icon/CloudUploadIcon';
import { ButtonVariant } from '.';
import { Wrap } from './Wrap';
export const CloudVariant = (varType: string) => {
  const variant: Record<string, string> = {
    white: '#FFFFFF',
    primary: '#5569FF',
    cancel: '#6E759F',
    delete: '#FF5555',
    purple: '#7800D7',
    fileChoise: '#505050',
    success: '#66bb6a',
  };

  return variant[varType];
};
type FileButtonProps = {
  isLoading?: boolean;
  disabled?: boolean;
  variant?:
    | 'primary'
    | 'cancel' // Corrected 'cencel' to 'cancel'
    | 'delete'
    | 'purple'
    | 'fileChoice' // Corrected 'fileChoise' to 'fileChoice'
    | 'success';
  value?: string;
  onClick?: () => void;
  type?: HTMLInputTypeAttribute;
  label?: string;
};

const FileButton: React.FC<FileButtonProps> = ({
  variant = 'cencel',
  value = '+ 파일 업로드',
  type = 'file',
  label = '레벨테스트 자료',
}) => {
  return (
    <>
      <Wrap>
        <label
          className={cn(
            'text-white font-medium rounded-md cursor-pointer py-2 px-3',
            'shadow ring-1 ring-slate-900/10 transition duration-150 ease-in-out',
            ButtonVariant(variant)
          )}
        >
          <div className="flex justify-between items-center">
            <span className="mr-2">
              <CloudUploadIcon color={variant} />
            </span>
            <div>
              <div>{value}</div>
              <input type={type} name={type} className="hidden" />
            </div>
          </div>
          <label
            className={cn(
              'absolute bg-white px-1 text-gray-500 transition-all pointer-events-none',
              'bottom-[46px] left-2 text-sm'
            )}
          >
            {label}
          </label>
        </label>
      </Wrap>
    </>
  );
};

export default FileButton;
