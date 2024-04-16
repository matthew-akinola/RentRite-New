export const HeaderTextMD = ({text, align})=>{
    return(
        <h2 style={{textAlign:`${align}`}} className="text-[#161518] font-[500] text-[34px]">
            {text}
        </h2>
    )
}
export const HeaderTextSM = ({text, align})=>{
    return(
        <h2 style={{textAlign:`${align}`}} className="text-[#161518] font-[500] text-[16px] lg:text-[28px]">
            {text}
        </h2>
    )
}