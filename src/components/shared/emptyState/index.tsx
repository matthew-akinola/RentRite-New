
interface iEmptyState {
    label: string,
    icon: React.ReactNode
}
const EmptyState : React.FC<iEmptyState> = ({label, icon}) => {
    return (
        <div className=" w-full flex flex-col justify-center items-center" style={{height : `calc(100vh - 200px)`}}>
                {icon}
                <p className="text-[1rem] text-center font-bold text-gray-500">{label}</p>
        </div>
    )
}

export default EmptyState