import { PagesTitle } from "@/app/_components/(ui)/pagesTitle"
import { BoxWrap } from "@/app/_components/(wrapper)/BoxWrap"
import { PageWrap } from "@/app/_components/(wrapper)/PageWrap"
import { Metadata } from "next"
import CourseInfoTable from "./content"
import { courseInfoHeader, courseInfoBody, courseInfoSize } from "./data"
import { useRecoilState } from "recoil"

export const metadata: Metadata = {
    title: "DevelRocet 관리자 - 승인 과정 관리",
}

export default function CourseInfoList() {
    return (
        <>
            <PagesTitle title={"승인 과정 관리"} />
            <PageWrap>
                <BoxWrap title={"승인 과정 목록"} footer={true} footerItem={<p>button</p>}>
                    <CourseInfoTable headers={courseInfoHeader} rows={courseInfoBody} widths={courseInfoSize} />
                </BoxWrap>
            </PageWrap>
        </>
    )
}
