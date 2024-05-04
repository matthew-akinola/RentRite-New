import { X } from 'lucide-react';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaReddit, FaPinterest, FaInstagram } from 'react-icons/fa'; // Import social icons

// Define the type for the props expected by the SocialMediaPopup component
interface SocialMediaPopupProps {
    closePopup: () => void; // A function that takes no arguments and returns nothing
}

const SocialMediaPopup: React.FC<SocialMediaPopupProps> = ({ closePopup }) => {
    const handleShare = (url: string) => { // Specify that url is a string
        window.open(url, '_blank', 'noopener,noreferrer');
        closePopup();
    };

    const url = window.location.href;

    
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnInstagram = () => {
    const instagramShareUrl = `https://www.instagram.com?url=${encodeURIComponent(url)}`;
    window.open(instagramShareUrl, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${encodeURIComponent(url)}`, '_blank');
  };
  const shareOnPinterest = () => {
    const imageUrl = url;
    const description = 'Check out this cool image!'; 
    const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(description)}`;
    window.open(pinterestUrl, '_blank');
  };

    return (
        <div className="absolute z-10 right-0">
            <div className="bg-white p-4 rounded-lg space-y-3 flex items-center shadow-md">
                <button className="block p-2 flex gap-2 items-center" onClick={() => shareOnFacebook()}>
                    <FaFacebook /> Facebook
                </button>
                <button className="block p-2 flex gap-2 items-center !mt-0 " onClick={() => shareOnTwitter()}>
                    <FaTwitter /> Twitter
                </button>
                <button className="block p-2 flex gap-2 items-center !mt-0" onClick={() => shareOnInstagram()}>
                    <FaInstagram /> Instagram
                </button>
                <button className="block p-2 flex gap-2 items-center !mt-0" onClick={() => shareOnPinterest()}>
                    <FaPinterest /> Pinterest
                </button>
                <button className="block p-2 flex gap-2 items-center !mt-0 border-[1px] rounded-[10px]" onClick={closePopup}>
                    <X className='h-3 w-3'/>
                </button>
            </div>
        </div>
    );
};

export default SocialMediaPopup;
