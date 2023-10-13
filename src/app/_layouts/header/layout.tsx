export default function Header() {
    const items = ["학습 관리", "학생 관리", "훈련 일지", "만족도 조사", "커뮤니티"]
    return (
        <div className="w-full h-[80px] bg-slate-50 flex justify-between">
            <div className="flex items-center ml-10">
                {items.map((v, i) => (
                    <div key={i} className="p-2 px-3 text-lg leading-normal">
                        {v}
                    </div>
                ))}
            </div>
            <div>123</div>
        </div>
    )
}
