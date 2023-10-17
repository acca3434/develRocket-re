'use client';
import Button from '@/app/_components/(icon)/Button';
import TextInput from '@/app/_components/(icon)/Input';
import LoginTitle from '@/app/_components/(ui)/loginTitle';
import { LoginWrap } from '@/app/_components/(wrapper)/LoginWrap';
import CheckBox from '@/app/_components/(icon)/CheckBox';
import Image from 'next/image';
import { useState } from 'react';
import { CheckRadio, UnCheckRadio } from '@/app/_components/(icon)/Radio';
import { useForm } from '@/app/_utils/useForm';
export default function LoginMain() {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, handleChange, resetForm] = useForm({
    user_id: '',
    user_pw: '',
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user_id, user_pw } = e.target as HTMLFormElement;
    console.log(user_id.value, user_pw.value);
  };
  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
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
      <form onSubmit={handleSubmit}>
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
                  />
                </>
              }
            >
              <div className={'flex flex-col gap-[20px]'}>
                <TextInput
                  label={'아이디를 입력해주세요'}
                  width={'100%'}
                  height={'60px'}
                  value={formValues?.user_id}
                  name={'user_id'}
                  onChange={handleChange}
                />
                <TextInput
                  label={'비밀번호를 입력해주세요'}
                  width={'100%'}
                  height={'60px'}
                  value={formValues?.user_pw}
                  name={'user_pw'}
                  onChange={handleChange}
                />
                <div className={'flex justify-between'}>
                  <CheckBox isChecked={isChecked} onClick={handleCheckBoxClick}>
                    로그인 저장
                  </CheckBox>
                  <div className={'flex justify-between'}>
                    <CheckRadio label={'운영자'} />
                    <UnCheckRadio label={'교강사'} />
                  </div>
                </div>
              </div>
            </LoginWrap>
          </div>
        </div>
      </form>
    </>
  );
}
