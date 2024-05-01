import { DynamicObject } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import "./styles.css"
import MultimediaModal from '../multimediaModal';

interface iProps {
    data: DynamicObject,
    setMutiMediaModalOpen: (value: boolean) => void,
    isMutiMediaModalOpen: boolean,
}

function ImageGrid({ data , setMutiMediaModalOpen, isMutiMediaModalOpen} : iProps) {
    // State to hold the index of the currently selected main image
    const [selectedImage, setSelectedImage] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [noofVideos, setNoofVideos] = useState(0)
    const [noofPictures, setNoofPictures] = useState(0)
    const [noofVT, setNoofVT] = useState(4)
    const [multimedia, setMultiMedia] = useState<any[]>([])

    if (!data || !data.pictures.length) {
        return <p>No images available.</p>;
    }

    const Dwidth = 100 / data.pictures.length

     // Navigate to the previous image
    const goPrev = () => {
        setSelectedImage((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : data.pictures.length - 1
        );
    };

    // Navigate to the next image
    const goNext = () => {
        setSelectedImage((prevIndex) =>
        prevIndex < data.pictures.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handleImageClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        setNoofVideos(data?.videos?.length);
        setNoofPictures(data?.pictures?.length);

        const pcs = data.pictures.map((picture: DynamicObject) => (
            picture.image
        ))

        setMultiMedia([
            ...pcs,
            ...data.videos
        ])
    }, [data])

    console.log(multimedia)

    const isVideo = (url: string) => {
        return url?.match(/\.(mp4|webm)$/i);
      };

    return (
        <div className="image-gallery r">
            {/* Main image display */}
            <div className="main-image relative" onClick={handleImageClick}>
                {
                    isVideo(multimedia[selectedImage]) ? (
                        <video
                        className={`w-full max-h-[400px] object-cover`}
                        controls
                        >
                        <source src={multimedia[selectedImage]} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={multimedia[selectedImage]} alt="" className="w-full max-h-[400px] object-cover" />
                    )
                }
                {/* <img src={data.pictures[selectedImage].images} alt="" className="w-full max-h-[400px] object-cover" /> */}
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-white" onClick={goPrev}>
                    <ChevronLeft />
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white" onClick={goNext}>
                    <ChevronRight />
                </button>
            </div>
            <ImageModal isOpen={isModalOpen} onClose={closeModal} image={data.pictures[selectedImage]} goNext={goNext} goPrev={goPrev} />
            {/* Thumbnails */}
            <div className={`thumbnail-container relative flex gap-1 mt-1 w-100 justify-center`}>
                <div className='card absolute bg-white mt-[-20px] z-10 rounded-lg shadow-lg'>
                    <div className='flex py-2 px-5 '>
                        <span className='border-r-[1px] px-4 text-sm cursor-pointer' onClick={() => setMutiMediaModalOpen(true)}>{noofPictures} pictures</span>
                        <span className='border-r-[1px] px-4 text-sm cursor-pointer'  onClick={() => setMutiMediaModalOpen(true)}>{noofVideos} videos</span>
                        <span className=' px-4 text-sm cursor-pointer'  onClick={() => setMutiMediaModalOpen(true)}>{noofVT} virtual Tour</span>
                    </div>
                </div>
                {/* {multimedia.map((picture : DynamicObject, index: number) => (
                    <div style={{ width:  `${Dwidth}%` , height: 'auto', cursor: 'pointer'}}>
                        <img key={index} src={picture.images} alt=""
                            className={`w-full h-full object-cover transition-all duration-300 ${index === selectedImage ? 'border-purple-400 border-2 p-1' : 'border-transparent border-2 hover:border-purple-300'}`}                            
                            onClick={() => setSelectedImage(index)}
                        />
                    </div>
                ))} */}
                {multimedia.map((url, index) => (
                    <div key={index} style={{ width: `${Dwidth}%`, height: 'auto', cursor: 'pointer' }}>
                    {/* Conditional rendering based on file type */}
                    {isVideo(url) ? (
                        <video
                        className={`w-full h-full object-cover transition-all duration-300 ${index === selectedImage ? 'border-purple-400 border-2 p-1' : 'border-transparent border-2 hover:border-purple-300'}`}
                        controls
                        onClick={() => setSelectedImage(index)}
                        >
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                        src={url}
                        alt=""
                        className={`w-full h-full object-cover transition-all duration-300 ${index === selectedImage ? 'border-purple-400 border-2 p-1' : 'border-transparent border-2 hover:border-purple-300'}`}
                        onClick={() => setSelectedImage(index)}
                        />
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
}


interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: DynamicObject;
    goNext: () => void;
    goPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image, goNext, goPrev }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity duration-300 ease-out"
            style={{ animation: 'fadeIn 300ms ease-out' }}>
            <div className="bg-white p-4 max-w-3xl w-full mx-auto rounded-lg shadow-lg space-y-4 relative">
                <button onClick={onClose} className="absolute right-2 top-2 text-black text-xl">
                    ✕
                </button>
                <button onClick={goPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-black">
                    <ChevronLeft />
                </button>
                <button onClick={goNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-black">
                    <ChevronRight />
                </button>
                <img src={image.images} alt="" className="w-full max-h-[80vh] object-contain" />
            </div>
        </div>
    );
};


export default ImageGrid;