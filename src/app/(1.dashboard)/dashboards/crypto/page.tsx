'use client';

import { useParams } from 'next/navigation';

const DashboardMain = () => {
  const a = useParams();
  console.log(a, 'a');

  return <>dashboardMain </>;
};
export default DashboardMain;
