'use client';
import Button from '@/app/_components/(icon)/Button';
import LoginTitle from '@/app/_components/(ui)/loginTitle';
import { LoginWrap } from '@/app/_components/(wrapper)/LoginWrap';
import { useRef } from 'react';
import { MenuItemInput } from '@/app/_components/(icon)/Input/MenuItem';
export default function MenuItemText() {
  const temp3 = [
    { value: '1', label: '디벨로켓 홈페이지' },
    { value: '2', label: 'SNS (facebook/instagram...)' },
    { value: '3', label: '친구/지인' },
    { value: '4', label: 'HRD-Net' },
    { value: '5', label: '기타' },
  ];
  const temp1 = useRef<HTMLInputElement>(null);
  const temp2 = useRef<HTMLInputElement>(null);
  const a = () => {
    console.log(temp1.current?.value);
    console.log(temp2.current?.value);
  };
  return (
    <>
      <LoginTitle
        bgColor={'white'}
        title={
          <h3 className={'text-2xl font-NanumGothic font-bold'}>
            메뉴아이템 에어리어 테스트 중
          </h3>
        }
      />
      <div className={'p-[30px] w-full h-[1920px] bg-[#F2F5F9]'}>
        <div className={'flex justify-center items-center'}>
          <LoginWrap
            footer={true}
            footerItem={
              <>
                <Button
                  title={'로그인'}
                  type={'submit'}
                  variant={'primary'}
                  onClick={a}
                />
              </>
            }
          >
            <MenuItemInput
              label="디벨로켓을 어떻게 알게 되셨나요?"
              options={temp3}
              name={'how'}
              id={'how'}
              refV={temp1}
            />
            <div>dd</div>
            <MenuItemInput
              label="디벨로켓을 어떻게 알게 되셨나요?"
              options={temp3}
              name={'how'}
              id={'how'}
              refV={temp2}
            />
          </LoginWrap>
        </div>
      </div>
    </>
  );
}
