// CheckBox 컴포넌트
import React from 'react';

interface CheckBoxProps {
  isChecked: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  isChecked,
  onClick,
  children,
}) => {
  return (
    <>
      <div
        className="cursor-pointer flex justify-between gap-2"
        onClick={onClick}
      >
        {isChecked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect width="22" height="22" rx="4" fill="#5569FF" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.01 14.9974L11.0122 15L11.7635 14.111L11.7615 14.1086L17 7.91219L16.251 7.02636L11.0123 13.2225L5.75135 7L5 7.88902L10.2608 14.1114L10.2585 14.1142L11.0078 15L11.01 14.9974Z"
              fill="#F2F5F9"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect
              x="1"
              y="1"
              width="20"
              height="20"
              rx="3"
              stroke="#5569FF"
              strokeWidth="2"
            />
          </svg>
        )}
        <div>{children}</div>
      </div>
    </>
  );
};

export default CheckBox;
