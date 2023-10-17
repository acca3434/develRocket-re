'use client';
import Button from '@/app/_components/(ui)/button';
import TextInput from '@/app/_components/(ui)/input';
import LoginTitle from '@/app/_components/(ui)/loginTitle';
import { LoginWrap } from '@/app/_components/(wrapper)/LoginWrap';
import { PageWrap } from '@/app/_components/(wrapper)/PageWrap';
import CheckBox from '@/app/_components/(icon)/CheckBox';
import { Metadata } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { CheckRadio, UnCheckRadio } from '@/app/_components/(icon)/Radio';
import { BlackLine } from '@/app/_components/(icon)/Line';

export default function LoginMain() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked); // isChecked 상태를 반전시킵니다.
  };
  return (
    <>
      <LoginTitle
        bgColor={'primary'}
        image={
          <>
            <Image
              className={`m-2`}
              src="/img/block_logo.png"
              alt=""
              width={232}
              height={30}
            />
          </>
        }
      />
      <LoginTitle
        bgColor={'white'}
        title={
          <h3 className={'text-2xl font-NanumGothic font-bold'}>
            로그인 이후 이용해주세요
          </h3>
        }
      />
      <div className="p-[30px] w-full h-[1920px] bg-[#F2F5F9]">
        <div className="flex justify-center items-center">
          <LoginWrap
            title={''}
            footer={true}
            footerItem={
              <>
                <Button title="로그인" type="submit" variant="primary" />
              </>
            }
          >
            <div className="flex flex-col gap-[20px]">
              <TextInput
                label={'아이디를 입력해주세요'}
                width="100%"
                height="60px"
              />
              <TextInput
                label={'비밀번호를 입력해주세요'}
                width="100%"
                height="60px"
              />
              <div className="flex justify-between">
                <CheckBox isChecked={isChecked} onClick={handleCheckBoxClick}>
                  로그인 저장
                </CheckBox>
                <div className="flex justify-between">
                  <CheckRadio label="운영자" />
                  <UnCheckRadio label="교강사" />
                </div>
              </div>
            </div>
          </LoginWrap>
        </div>
      </div>
    </>
  );
}
