type ReportCardProps = {
    id: string;
    when: string;
    from: string;
    role: string;
    organization: string;
    content: string;
}

export const ReportCard = ( props : ReportCardProps ) => {
    return (
        <div className="flex-shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard hover:border-neo-orange/50 hover:-translate-y-2 transition-all duration-500 relative group/card overflow-hidden text-left whitespace-normal">
            <div className="absolute top-0 left-0 w-full h-1 bg-neo-orange"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45"></div>
            <div className="flex justify-between items-start mb-6">
                <div className="font-mono text-neo-orange text-xs font-bold tracking-widest uppercase">REPORT_{props.id}.log</div>
                <div className="text-[10px] font-mono text-gray-500">{props.when}</div>
            </div>
            <div className="font-mono text-gray-400 text-[10px] mb-2 uppercase tracking-tight">FROM: {props.from} @ {props.organization}</div>
                <p className="font-bold text-xl leading-snug mb-6 text-white/90">{props.content}</p>
                <div className="flex text-neo-orange/60 gap-1 text-lg">
                    <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
            </div>
        </div>
    )
}