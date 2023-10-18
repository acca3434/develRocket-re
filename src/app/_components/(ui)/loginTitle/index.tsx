import { cn } from '@/app/_utils/clsx/utils';
import Image from 'next/image';

interface LoginHeaderColorType {
  primary: string;
  white: string;
}
interface LoginHeaderProps {
  bgColor?: keyof LoginHeaderColorType;
  href?: string;
  linkLabel?: string;
  children?: React.ReactNode;
  image?: React.ReactNode;
  title?: string | React.ReactNode;
}

const backgroundConvertColor = (bgColor: keyof LoginHeaderColorType) => {
  const LoginColorVariants: LoginHeaderColorType = {
    white: 'bg-[#FFFFFF]',
    primary: 'bg-[#5569ff]',
  };
  console.log();

  return LoginColorVariants[bgColor];
};

const LoginTitle: React.FC<LoginHeaderProps> = ({ bgColor, image, title }) => {
  return (
    <>
      <div
        className={backgroundConvertColor(
          bgColor as keyof LoginHeaderColorType
        )}
      >
        <div
          className={cn(
            'p-6 border-b-2 shadow-md',
            backgroundConvertColor(bgColor as keyof LoginHeaderColorType)
          )}
        >
          <div className={'container mx-auto'}>
            <div className={'p-0 flex justify-center items-center'}>
              {image}
              {title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginTitle;
