import Link from "next/link"

interface blogProp{
    img:string;
    title:string;
    desc:string;
}

export const BlogCard1 = ({img, title, desc}:blogProp)=>{
    return(
        <div className="space-y-6">
            <div className="h-[350px] w-full">
                <img className="h-full w-full" src={img} alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="font-bold text-[#161518] text-[18px]">{title}</h2>
                <p className="text-[14px] text-[#82808F]">{desc}</p>
            </div>
            <Link className="font-[600] text-[14px] text-[#161518]" href=''>Read Post</Link>
        </div>
    )
}
export const blogCard2 = ()=>{
    return(
        <div className="flex gap-4 pr-[1.3rem] justify-center items-center">
            <div className="h-[300px] w-[300px]">
                <img className="h-full w-full" src="" alt="" />
            </div>
            <div className="space-y-4">
                <h2 className="font-bold text-[#161518] text-[18px]">How to be a home owner</h2>
                <small className="text-[#B1B0B9] text-[12px]">Dec 23rd, 2022</small>
                <p className="text-[14px] text-[#82808F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas modi at magni exercitationem voluptates hic cum voluptatem, quo, debitis vero voluptatum optio reiciendis natus non aut amet. Architecto, modi minus doloremque autem voluptas suscipit, enim dolorum porro eos, animi laborum!</p>
            </div>
        </div>
    )
}