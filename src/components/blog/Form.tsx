'use client'
import React, {useRef} from 'react'

const Form = () => {

   const uploadImageRef = useRef<HTMLInputElement>(null);
   const uploadNameRef = useRef<HTMLInputElement>(null) 


   const handleUpload = ()=>{
    if (uploadImageRef.current){
      uploadImageRef.current.click()  
    }
   
   }
   const handleChange = ()=>{
    if (uploadNameRef.current && uploadImageRef.current?.files){
      uploadNameRef.current.value = uploadImageRef.current.files[0].name
    }

   }

  return (
    <form className='py-10 bg-white px-8' encType="multipart/form-data">
      <h1 className='text-[#000000] font-bold text-[60px] sm:text-[88px] text-center'>Create a blog</h1>
      <div className=' my-10'>
        <label htmlFor="blog-tittle" className='block text-sm font-bold text-[#2B2A30] mb-2 uppercase'>Blog Tittle</label>
        <input type="text" name="blog-tittle" id="" className='w-full border-[1.5px] border-[#D0D0D5] rounded-lg h-16 px-3 py-4 bg-[#FBFBFC] ' placeholder='Tittle of your blog' />
      </div>
      <div className='my-10'>
        <label htmlFor="blog-tittle" className='block text-sm font-bold text-[#2B2A30] mb-2 uppercase '>Select Category</label>
        <select name="" id="" className='w-full border-[1.5px] border-[#D0D0D5] rounded-lg h-16 px-3 py-4 bg-[#FBFBFC]' >
            <option value="" className='hover:bg-[#FCDFC4]'>Spotlight</option>
            <option value="" className='hover:bg-[#FCDFC4]' >Buying & Selling</option>
            <option value="" className='hover:bg-[#FCDFC4]' >Renting</option>
            <option value="" className='hover:bg-[#FCDFC4]' >Tips & advice</option>    
        </select>      
      </div>
        <div className='my-10'>
            <label htmlFor="image-upload" className='block text-sm font-bold text-[#2B2A30] mb-2 uppercase'>Upload Image</label>
            <div onClick={handleUpload} className='w-full border-[1.5px] border-[#D0D0D5] rounded-lg h-16 px-3 py-4 bg-[#FBFBFC] flex flex-row' >
              
              <input type="file" name="image-upload" id=""  accept='image/png, image/jpeg' className='hidden' ref={uploadImageRef} onChange={handleChange} />
              <input type="text" name="" id="" ref={uploadNameRef} disabled className='px-2 w-[50%] sm:w-fit bg-inherit' placeholder='Upload an image' />
                <button className='inline-flex w-fit ml-auto justify-center items-center'><svg className=' w-5 h-4' viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.828 2L5.828 4H2V16H18V4H14.172L12.172 2H7.828ZM7 0H13L15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5L7 0ZM10 15C8.54131 15 7.14236 14.4205 6.11091 13.3891C5.07946 12.3576 4.5 10.9587 4.5 9.5C4.5 8.04131 5.07946 6.64236 6.11091 5.61091C7.14236 4.57946 8.54131 4 10 4C11.4587 4 12.8576 4.57946 13.8891 5.61091C14.9205 6.64236 15.5 8.04131 15.5 9.5C15.5 10.9587 14.9205 12.3576 13.8891 13.3891C12.8576 14.4205 11.4587 15 10 15ZM10 13C10.9283 13 11.8185 12.6313 12.4749 11.9749C13.1313 11.3185 13.5 10.4283 13.5 9.5C13.5 8.57174 13.1313 7.6815 12.4749 7.02513C11.8185 6.36875 10.9283 6 10 6C9.07174 6 8.1815 6.36875 7.52513 7.02513C6.86875 7.6815 6.5 8.57174 6.5 9.5C6.5 10.4283 6.86875 11.3185 7.52513 11.9749C8.1815 12.6313 9.07174 13 10 13Z" fill="#B1B0B9"/>
                </svg>
                </button>
              </div>
        </div>
        <div className='my-10'>
        <label htmlFor="content-description" className='block text-sm font-bold text-[#2B2A30] mb-2 uppercase'>Content Description</label>
            <textarea className='h-[459px] resize-none border-[1.5px] border-[#D0D0D5] rounded-lg w-full bg-[#FBFBFC] px-3 py-4' name="content-description" id="" placeholder='Start Writing content' ></textarea>
        </div>
        <div className='my-10 flex'>

            <div>
                <input type="checkbox" name="featured-post" id="" className='rounded-lg border border-[#2B2A30]' />
                <label htmlFor="featured-post" className='ml-2'>Featured post</label>
            </div>
            <div className='ml-auto'>
                <button type="submit" className=' px-14 py-4 rounded-lg border text-[#D0D0D5] bg-[#BC80BD]'>Post</button>
            </div>
        </div>
    </form>
  )
}

export default Form
function LegacyRef<T>(arg0: null): boolean {
  throw new Error('Function not implemented.');
}

