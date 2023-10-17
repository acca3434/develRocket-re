import { BlackLine } from '../../(icon)/Line';

interface LoginWrapFooterTrue {
  title: string;
  footer: true;
  footerItem?: React.ReactNode;
  href?: string;
  linkLabel?: string;
  children?: React.ReactNode;
}
interface LoginWrapFooterFasle {
  title: string;
  footer: false;
  href?: string;
  linkLabel?: string;
  children?: React.ReactNode;
}
type LoginWrapProps = LoginWrapFooterTrue | LoginWrapFooterFasle;

export const LoginWrap: React.FC<LoginWrapProps> = (props) => {
  return (
    <div className="h-[340px] w-[600px] rounded-[15px] bg-white shadow-[0_2px_15px_0_#22335410] flex flex-col justify-center ">
      <div className="h-full w-full pt-[45px] pb-[30px] px-[50px]">
        {props.children}
      </div>
      <BlackLine />
      <div className="w-full h-full flex justify-center items-center">
        {props.footer && <>{props.footerItem}</>}
      </div>
    </div>
  );
};
