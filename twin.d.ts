// import 'twin.macro';
// import styledImport, { CSSProp, css as cssImport } from 'styled-components';

// declare module 'twin.macro' {
//   // The styled and css imports
//   const styled: typeof styledImport;
//   const css: typeof cssImport;
// }
// declare module 'react' {
//   // The css prop
//   interface HTMLAttributes<T> extends DOMAttributes<T> {
//     css?: CSSProp;
//     tw?: string;
//   }
//   // The inline svg css prop
//   interface SVGProps<T> extends SVGProps<SVGSVGElement> {
//     css?: CSSProp;
//     tw?: string;
//   }
// }

// // The 'as' prop on styled components
// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes<T> extends DOMAttributes<T> {
//       as?: string | Element;
//     }
//   }
// }

import 'twin.macro';
import { css as cssImport } from '@emotion/react';
import styledImport from '@emotion/styled';
import { CSSInterpolation } from '@emotion/serialize';
import { Key } from 'react';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
    tw?: string;
  }
}
