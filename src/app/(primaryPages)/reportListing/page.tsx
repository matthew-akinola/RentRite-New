'use client'
import Link from "next/link"
import { useState } from "react"


const page = () => {

    const [formData, setFormData] = useState({
        conplaintType: '1',
        conplaintDescription :''
    })
    let disabled = ((formData.conplaintType.length) && (formData.conplaintDescription.length > 2)) ? false : true 

    const resetValues = ()=>{
        setFormData({
        conplaintType: '1',
        conplaintDescription :''
        })
        
    }
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        resetValues();
    }
    const handleChange =(e:React.FormEvent<HTMLTextAreaElement | HTMLSelectElement>)=>{
        const {name, value} = e.currentTarget;

        setFormData({
            ...formData, [name]: value ?? JSON.parse(value)
        })
        
    }

  return (
    <div className="pt-[97px] w-full font-outfit">
        <div className='text-[#000] border-t-2 border-[#E8E7EA] w-full border px-3 sm:px-12'>
           <div className="py-3 ">
            <Link href={'/'} className="text-[#79007B] mt-3">
                <span className="mr-3 inline-flex bg-[url('/icons/back-arrow-icon.svg')] w-4 h-3" ></span> <span className="inline-flex">Back to property listings</span>
            </Link>
           </div>
           
           <form action="" onSubmit={handleSubmit}>
               <h1 className="font-bold text-3xl text-[#161518] mt-5">Report Listing</h1>
                <div className="mt-10">
                    <label htmlFor="conplaint-type" className=" block font-bold text-sm text-[#2B2A30] uppercase mb-2">What problem did you run into?</label>
                    <select name="conplaintType" id="conplaint-type" className="w-full border-[1.5px] border-[#D0D0D5] rounded-lg bg-[#FBFBFC] outline-none px-5 py-4" onChange={(e)=>{handleChange(e)}} value={formData.conplaintType} >
                        <option value="1" >The property is not available</option>
                        <option value="2" >The Agent is being shady</option>
                        <option value="3" >Agent did not pick up</option>
                        <option value="4">Other problems</option>
                    </select>
                </div>
                <div className='my-10'>
        <label htmlFor="conplaint-description" className='block text-sm font-bold text-[#2B2A30] mb-2 uppercase'>Content Description</label>
            <textarea className='h-[459px] resize-none border-[1.5px] border-[#D0D0D5] rounded-lg w-full bg-[#FBFBFC] px-3 py-4 outline-none' name="conplaintDescription" id="content-description" placeholder='Start Writing content' value={formData.conplaintDescription} onChange={(e)=>{handleChange(e)}}></textarea>
        </div>
                <div className='my-10 flex'>
                <div className='ml-auto'>
                <button type="submit" className={`px-14 py-4 rounded-lg border text-[#D0D0D5] ${disabled ? 'bg-[#BC80BD]' :'bg-primary'} cursor-pointer`} disabled={disabled}>Post</button>
            </div>

                </div>
           
           </form>
        </div>
    </div>
  )
}

export default page
