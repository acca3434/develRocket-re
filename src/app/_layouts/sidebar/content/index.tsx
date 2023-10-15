import Link from 'next/link';
import tw, { css } from 'twin.macro';
interface SideMenuProps {
  item: SideMenuItems;
  pathName: string;
}

interface SideMenuItems {
  category?: string;
  list: ListItem[];
}

interface ListItem {
  label: string;
  path: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  item: { list, category },
  pathName,
}) => {
  return (
    <div css={tw`text-white`}>
      {category && <div tw="py-5 font-bold text-xs ">{category}</div>}
      <ul tw="flex flex-col ">
        {list.map((v, i) => (
          <Link
            href={v.path}
            className={`px-7 py-3 text-sm hover:bg-slate-600 rounded-lg ${
              pathName === v.path ? 'bg-slate-800' : ''
            }`}
            key={i}
          >
            {v.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};
