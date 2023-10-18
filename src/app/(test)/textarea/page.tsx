'use client';
import Button from '@/app/_components/(icon)/Button';
import LoginTitle from '@/app/_components/(ui)/loginTitle';
import { LoginWrap } from '@/app/_components/(wrapper)/LoginWrap';
import CheckBox from '@/app/_components/(icon)/CheckBox';
import Image from 'next/image';
import { useState } from 'react';
import { CheckRadio, UnCheckRadio } from '@/app/_components/(icon)/Radio';
import { useForm } from '@/app/_utils/useForm';
import TextArea from '@/app/_components/(icon)/TextArea';
export default function LoginMain() {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, handleChange, resetForm, handleTextAreaChange] = useForm({
    user_id: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user_id } = e.target as HTMLFormElement;
    console.log(user_id.value);
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
            텍스트 에어리어 테스트 중
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
                <TextArea
                  value={formValues?.user_id}
                  label={'훈련 내용을 입력하세요'}
                  rows={4}
                  cols={53}
                  name={'user_id'}
                  id={'userId'}
                  onChange={handleTextAreaChange}
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
