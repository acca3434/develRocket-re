import React from 'react';
import { cn } from '@/app/_utils/clsx/utils';
export const ButtonVariant = (varType: string) => {
  const variant: Record<string, string[]> = {
    primary: [
      `bg-[#5569FF] text-[#FFFFFF]`,
      `hover:bg-[#FFFFFF] hover:text-[#5569FF]`,
      `active:bg-[#5569FF] active:text-[#FFFFFF]`,
    ],
    cancel: [
      `bg-[#6E759F] text-[#FFFFFF]`,
      `hover:bg-[#FFFFFF] hover:text-[#6E759F]`,
      `active:bg-[#6E759F] active:text-[#FFFFFF]`,
    ],
    delete: [
      `bg-[#FF5555] text-[#FFFFFF]`,
      `hover:bg-[#FFFFFF] hover:text-[#FF5555]`,
      `active:bg-[#FF5555] active:text-[#FFFFFF]`,
    ],
    purple: [
      `bg-[#7800D7] text-[#FFFFFF]`,
      `hover:bg-[#FFFFFF] hover:text-[#7800D7]`,
      `active:bg-[#7800D7] active:text-[#FFFFFF]`,
    ],
    fileChoise: [
      `bg-[#505050] text-[#FFFFFF]`,
      `hover:bg-[#FFFFFF] hover:text-[#505050]`,
      `active:bg-[#505050] active:text-[#FFFFFF]`,
    ],
    success: [
      `bg-[#66bb6a] text-[#FFFFFF]`,
      `hover:bg-[#FFFFFF] hover:text-[#66bb6a]`,
      `active:bg-[#66bb6a] active:text-[#FFFFFF]`,
    ],
  };
  return variant[varType];
};

type ButtonProps = {
  isLoading?: boolean;
  disabled?: boolean;

  variant?:
    | 'primary'
    | 'cancel'
    | 'delete'
    | 'purple'
    | 'fileChoise'
    | 'success';
  title?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};
// cn 사용법
// https://github.com/acca3434/tailwindnextjs/blob/main/src/app/lib/README.md
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  title = '거래하기',
  type = 'submit',
  onClick,
}) => {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-[15px]',
        'text-sky-500 shadow ring-1 ring-slate-900/10 transition duration-150 ease-in-out',
        ButtonVariant(variant)
      )}
      onClick={onClick}
    >
      <h2
        className={cn(
          `w-full text-center font-inter font-bold text-base/[40px] whitespace-nowrap`
        )}
      >
        {title}
      </h2>
    </button>
  );
};

export default Button;
