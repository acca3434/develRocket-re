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
            width={'50%'}
            height={'100%'}
            onChange={handleValue}
            value={value}
            id={'user_id'}
          />
        </BoxWrap>
      </PageWrap>
    </>
  );
}
