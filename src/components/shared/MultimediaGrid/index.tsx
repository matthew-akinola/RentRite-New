import React, { useEffect, useState } from 'react';
import { DynamicObject } from '@/types'; // Assuming type definition is correct

interface MultiMediaGridProps {
    data: { pictures: DynamicObject[]; videos: DynamicObject[]; };
    setMutiMediaModalOpen: (value: boolean) => void;
    isMutiMediaModalOpen: boolean;
}

const MultiMediaGrid: React.FC<MultiMediaGridProps> = ({ data, setMutiMediaModalOpen, isMutiMediaModalOpen }) => {
    const [selectedMedia, setSelectedMedia] = useState(0);
    const [multimedia, setMultiMedia] = useState<any[]>([]);
    const [noofVideos, setNoofVideos] = useState(0)
    const [noofPictures, setNoofPictures] = useState(0)
    const [noofVT, setNoofVT] = useState(4)

    useEffect(() => {
        setNoofVideos(data?.videos?.length);
        setNoofPictures(data?.pictures?.length);

        const pcs = data.pictures.slice(0,4).map((picture: DynamicObject) => (
            picture.image
        ))

        if (data) {
            setMultiMedia([...pcs, ...data.videos]);
        }
    }, [data]);

    const isVideo = (url: string) => {
        console.log(url)
        return url?.match(/\.(mp4|webm)$/i);
      };

    if (!multimedia.length) return <p className="text-white">No media available.</p>;
    return (
        <div className="grid-wrapper grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 ">
             <div className='card absolute bg-white z-10 rounded-lg shadow-lg mt-3 ml-3'>
                <div className='flex py-2 px-5 '>
                    <span className='border-r-[1px] px-4 text-sm cursor-pointer' onClick={() => setMutiMediaModalOpen(true)}>{noofPictures} pictures</span>
                    <span className='border-r-[1px] px-4 text-sm cursor-pointer'  onClick={() => setMutiMediaModalOpen(true)}>{noofVideos} videos</span>
                    <span className=' px-4 text-sm cursor-pointer'  onClick={() => setMutiMediaModalOpen(true)}>{noofVT} virtual Tour</span>
                </div>
            </div>
            {multimedia.map((media, index) => {
                return(
                    (
                        <div key={index} 
                             className={`relative overflow-hidden rounded-lg cursor-pointer ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}`}
                             onClick={() => { setSelectedMedia(index); setMutiMediaModalOpen(true); }}>
                            {isVideo(media) ? (
                                <video
                                className={`w-full h-full object-cover`}
                                controls
                                >
                                <source src={media} type="video/mp4" />
                                Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={media} alt="" className="w-full h-full object-cover" />
                            )}
                        </div>
                    )
                )
            })}
        </div>
    );
};

export default MultiMediaGrid;
