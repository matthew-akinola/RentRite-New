import React, { ChangeEvent, FC, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

interface InputProps {
  id: string;
  type: string;
  label: string;
  value: string;
  required?:boolean;
  onChange: (name:string, value: string) => void;
  placeholder?: string;
  error?: string;
  name:string
}

const PasswordInput: FC<InputProps> = ({ id, label, value, onChange,name, placeholder, error, required }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  const [view, setView] = useState(false)

  return (
    <div className='w-full'>
      <p className='text-[#757575] text-[12px] font-[inter] font-bold'>{label}  <span className="text-[red] text-sm font-normal">{required&& '*'}</span></p>
        <div className='border w-full rounded-lg'>
            <input 
                type={!view? 'password': 'text'}
                id={id}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                className=' p-4 bg-transparent outline-none text-sm text-[#212121] w-[95%]'
                // className={error ? 'error' : ''}
            />
            <button type='button' className='w-[5%]' onClick={()=> setView(!view)}>{!view ? <IoEyeOutline />: <IoEyeOffOutline />}</button>
        </div>

      {error && <small className="text-[red] error-message">{error}</small>}

    </div>
  );
};

export default PasswordInput;
