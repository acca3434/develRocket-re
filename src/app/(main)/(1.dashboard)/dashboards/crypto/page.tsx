import { PagesTitle } from "@/app/_components/(ui)/pagesTitle"
import TableComponent from "@/app/_components/(ui)/table"
import { BoxWrap } from "@/app/_components/(wrapper)/BoxWrap"
import { Metadata } from "next"
import { headers1, table1, widths1 } from "./currentCourse.exam"
import { headers2, table2, widths2 } from "./currentCourse.exam"
import { headers3, table3, widths3 } from "./currentCourse.exam"
import { PageWrap } from "@/app/_components/(wrapper)/PageWrap"
import { PageNation } from "@/app/_components/(ui)/pagination"

export const metadata: Metadata = {
    title: "DevelRocet 관리자 - 대시보드",
}

const DashboardMain = () => {
    const course_id = "DES-101"
    return (
        <>
            <PagesTitle title={"대시보드"} />
            <PageWrap>
                <div className="w-full h-auto min-h-[250px] mb-[20px] shadow-sm">
                    <BoxWrap title={"운영중인 과정"} footer={false}>
                        <TableComponent headers={headers1} rows={table1} widths={widths1} />
                        <PageNation />
                    </BoxWrap>
                </div>
                <div className="flex h-auto min-h-[290px] w-full justify-between gap-[20px]">
                    <BoxWrap
                        title={"전체 공지 사항"}
                        footer={false}
                        href="/community/announcements"
                        linkLabel="전체 보기"
                    >
                        <TableComponent headers={headers2} rows={table2} widths={widths2} />
                        <PageNation />
                    </BoxWrap>

                    <BoxWrap
                        title={"주요 일정"}
                        footer={false}
                        href={`/learning/evaluate/list/${course_id}`}
                        linkLabel="전체 보기"
                    >
                        <TableComponent headers={headers3} rows={table3} widths={widths3} />
                        <PageNation />
                    </BoxWrap>
                </div>
            </PageWrap>
        </>
    )
}
export default DashboardMain
