"use client"
import { GridContainer3 } from '@/components/shared/containers/container'
import useFetch from '@/hooks/useFetch'
import React, {useEffect, useState} from 'react'
import { BlogCard1 } from './BlogCard'

const Blog = () => {
     const [tab, setTab] = useState('Spotlight')
     const [blog, setBlog] = useState([])
     const [data, setData] = useState([])
     const {myData} = useFetch('/blogs/')

     useEffect(()=>{    
        console.log(myData)
        if (myData.length > 0){
           setBlog(myData) 
        }
        
     }, [myData])

     useEffect(()=>{
        const new_blog = blog.filter((item:any) => item.category.includes(tab))
        setData(new_blog)
     }, [tab])


  return (
    <div>
        <div className='bg-black flex items-center gap-8 p-4'>
            <button onClick={()=>setTab('Spotlight')} className={`${tab === 'Spotlight' && 'border-b-4 border-[#E4CCE5]'} text-[18px] text-[#F3F3F4] font-normal`}>SpotLight</button>
            <button onClick={()=>setTab('Buying')} className={`${tab === 'Buying' && 'border-b-4 border-[#E4CCE5]'} text-[18px] text-[#F3F3F4] font-normal`}>Buying & Selling</button>
            <button onClick={()=>setTab('Renting')} className={`${tab === 'Renting' && 'border-b-4 border-[#E4CCE5]'} text-[18px] text-[#F3F3F4] font-normal`}>Renting</button>
            <button onClick={()=>setTab('Tips')} className={`${tab === 'Tips' && 'border-b-4 border-[#E4CCE5]'} text-[18px] text-[#F3F3F4] font-normal`}>Tips & Advice</button>
        </div>

        <div>

            {
             data.length>0 ?
                <GridContainer3>

                    {
                        data?.map((b:any)=>{
                            return(
                            <BlogCard1
                                key = {b.id}
                                img = {b.image}
                                title = {b.title}
                                desc = {b.content}
                            />                            
                            )
                        }

                        )
                    }                
                </GridContainer3>
                    :
                    'No record found'
                }


        </div>
    </div>
  )
}

export default Blog