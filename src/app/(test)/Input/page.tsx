'use client';
import Button from '@/app/_components/(icon)/Button';
import Input, { InputValueType } from '@/app/_components/(icon)/Input';
import { PagesTitle } from '@/app/_components/(ui)/pagesTitle';
import { BoxWrap } from '@/app/_components/(wrapper)/BoxWrap';
import { PageWrap } from '@/app/_components/(wrapper)/PageWrap';
import { ChangeEvent, useState } from 'react';

export default function InputTest() {
  const [value, setValue] = useState<string | number>();
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as InputValueType;
    setValue(newValue);
  };
  return (
    <>
      <PagesTitle title={'버튼 모음'} />
      <PageWrap>
        <BoxWrap
          title={'버튼 모음'}
          footer={true}
          footerItem={<Button variant={'primary'} title={'footer 버튼'} />}
        >
          <Input
            type={'text'}
            label={'훈련 비용'}
            width={'25%'}
            onChange={handleValue}
            value={value}
          />
        </BoxWrap>
      </PageWrap>
    </>
  );
}

{
  /* <form onSubmit={(e) => onsubmit(e)}>
</form> */
}

// // const onsubmit = (e: FormEvent<HTMLFormElement>,type:InputType) => {
//   const onsubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const inputElements = e.currentTarget.querySelectorAll('input[type="text"]');

//     const inputValues = Array.from(inputElements).map((inputElement: Element) => {
//       if (inputElement instanceof HTMLInputElement) {
//         return inputElement.value;
//       }
//       return '';
//     });
//     console.log('입력된 값들:', inputValues);
//   };
