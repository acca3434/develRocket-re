'use client';
import Button from '@/app/_components/(icon)/Button';
import FileButton from '@/app/_components/(icon)/Button/FileButton';
import { PagesTitle } from '@/app/_components/(ui)/pagesTitle';
import { BoxWrap } from '@/app/_components/(wrapper)/BoxWrap';
import { PageWrap } from '@/app/_components/(wrapper)/PageWrap';

export default function ButtonTest() {
  const handleRouter = () => {
    console.log('버튼이당');
  };
  return (
    <>
      <PagesTitle title={'버튼 모음'} />
      <PageWrap>
        <BoxWrap
          title={'버튼 모음'}
          footer={true}
          footerItem={
            <Button
              variant={'primary'}
              title={'+ 레벨테스트 추가'}
              onClick={handleRouter}
            />
          }
        >
          <Button
            variant={'primary'}
            title={'+ 레벨테스트 추가'}
            onClick={handleRouter}
          />
          <Button variant={'delete'} title={'평가 삭제'} />
          <Button variant={'cancel'} title={'삭제취소'} />
          <Button variant={'purple'} title={'작성하기'} />
          <FileButton variant={'cancel'} type={'file'} />
          <Button variant={'success'} title={'TIL 다운로드'} />
        </BoxWrap>
      </PageWrap>
    </>
  );
}
