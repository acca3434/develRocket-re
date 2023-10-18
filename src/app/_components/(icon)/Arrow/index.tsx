'use client';

interface ArrowProps {
  rotate: string;
  color: string;
  onClick?: (e: any) => void;
}
export const Arrow: React.FC<ArrowProps> = ({ rotate, color, onClick }) => {
  return (
    <svg
      width="30"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${rotate})`}
      style={{
        transformOrigin: 'center',
      }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00999 7.99808L8.01216 8L8.76351 7.33323L8.76147 7.33142L14 2.68414L13.251 2.01977L8.01234 6.66689L2.75135 2L2 2.66677L7.26084 7.33353L7.25847 7.33563L8.00783 8L8.00999 7.99808Z"
        fill="#F2F5F9"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
};
