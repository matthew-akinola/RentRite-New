import { FaSearch } from "react-icons/fa"

interface iSearchInput {
    className?: string;
    icon?: React.ReactNode,
    placeholder?: string,
    value: string,
    setValue: (value: string) =>void,
    label: string,
    handleSubmit: () => void,
    inputClassName?: string
}

const SearchInput :React.FC<iSearchInput> = ({className, icon, placeholder, value, setValue, handleSubmit, label, inputClassName}) => {
    return (
        <div className={`flex justify-between w-full gap-8 pl-3 ${className}`}>
            <div className={`flex items-center basis-4/5`}>
                    <span>
                    {icon}
                    {/* <FaSearch className="text-secondary" /> */}
                    </span>
                    <input
                    type="search"
                    placeholder={placeholder}
                    className={`w-full border-none focus:outline-none hover:outline-none p-2 placeholder:font-normal placeholder:text-lg placeholder:text-[#D0D0D5] ${inputClassName}`}
                    value={value} 
                    onChange={(e)=>{setValue(e.target.value)}}
                    />
            </div>

            <div className=" pe-3">
                <button className="flex justify-center items-center bg-[#79007b] hover:bg-[#930896] rounded-lg py-1 px-5 text-white" type="submit" onClick={handleSubmit}>
                <span className="text-md">{label}</span>
                </button>
            </div>
        </div>
    )
}

export default SearchInput