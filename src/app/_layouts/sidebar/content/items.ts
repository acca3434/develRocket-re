const year = new Date().getFullYear()

export const menuItems = {
    category: "",
    list: [
        {
            label: "대시보드",
            path: "/dashboards/crypto",
        },
    ],
}
export const courseInfoItems = {
    category: "기관정보 관리",
    list: [
        {
            label: "승인 과정 관리",
            // path: "/courseInfo/list",
            path: "",
        },
        {
            label: "개설 과정 관리",
            // path: "/coursemanagement/list",
            path: "",
        },
        {
            label: "기관 휴일 관리",
            // path: `/holidays/list/${year}`,
            path: "",
        },
    ],
}

export const courseManagementItems = {
    category: "구성원 관리",
    list: [
        {
            label: "교직원 관리",
            // path: "/sstaff/list",
            path: "",
        },
        {
            label: "전체 학생 관리",
            // path: "/students/info/DES-101",
            path: "",
        },
        {
            label: "지원자 관리",
            // path: "/candidatemanagement/list/DES-101",
            path: "",
        },
    ],
}

export const contentManagementItems = {
    category: "콘텐츠 관리",
    list: [
        {
            label: "비행일지 관리",
            // path: "/flight/log",
            path: "",
        },
    ],
}

export const jobManagement = {
    category: "취업 관리",
    list: [
        {
            label: "취업 관리 시트",
            path: "https://drive.google.com/drive/folders/1aVp3_1xMO0U-2CH7UfVgnY3BP6J1z9D_?usp=sharing",
        },
    ],
}
