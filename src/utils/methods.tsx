import React, { useState } from 'react';

interface ShortTextProps{
    text:string;
    maxLength: number;
    textstyle: string;
    btnstyle?:string
}

export function ShortenText({ text, maxLength, textstyle, btnstyle }:ShortTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='flex'>
      <div style={{ maxHeight: isExpanded ? 'none' : '100px', overflow: 'hidden' }}>
        <p className={textstyle}>{text.length > maxLength && !isExpanded ? `${text.slice(0, maxLength)}...` : text} {text.length > maxLength && (
        <button className={btnstyle} onClick={toggleExpand}>{isExpanded ? 'less details' : 'more details'}</button>
      )}</p>
      </div>
      
    </div>
  );
}

