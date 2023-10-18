import React, { useEffect, useState } from 'react';
import { CloudVariant } from '../Button/FileButton';

interface CloudProps {
  isOpen?: boolean;
}

const ArrowDown: React.FC<CloudProps> = ({ isOpen }) => {
  const rotateDegree = isOpen ? 180 : 0; // 화살표 회전 각도
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotateDegree}deg)`,
        transition: 'transform 0.2s ease-in-out', // 1초 동안 부드럽게 전환
      }}
    >
      <g filter="url(#filter0_d_151_503)">
        <path d="M9 6L14 0H4L9 6Z" fill="black" />
      </g>

      <defs>
        <filter
          id="filter0_d_151_503"
          x="0"
          y="0"
          width="18"
          height="20"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_151_503"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_151_503"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowDown;
