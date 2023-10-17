export interface ConvertSizeType {
  '25%': string;
  '50%': string;
  '75%': string;
  '100%': string;
  '500px'?: string;
  '60px'?: string;
}

export const convertWidthClass = (width: keyof ConvertSizeType) => {
  const widthVariants: ConvertSizeType = {
    '25%': 'w-1/4',
    '500px': 'w-[500px]',
    '50%': 'w-2/4',
    '75%': 'w-3/4',
    '100%': 'w-full',
  };
  return widthVariants[width];
};

export const convertHeightClass = (height: keyof ConvertSizeType) => {
  const heightVariants: ConvertSizeType = {
    '25%': 'h-[53px]',
    '50%': 'h-[78.9px]',
    '60px': 'h-[60px]',
    '75%': 'h-[106px]',
    '100%': 'h-[132.5px]',
  };
  return heightVariants[height];
};
