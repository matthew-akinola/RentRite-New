export const Container = ({children}) =>{
    return(
        <div className="px-[3rem]">
            {children}
        </div>
    )
}
export const GridContainer3 = ({children}) =>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            {children}
        </div>
    )
}
export const GridContainer4 = ({children}) =>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
            {children}
        </div>
    )
}