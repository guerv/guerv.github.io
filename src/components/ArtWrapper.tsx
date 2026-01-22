import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface ImageModule {
    default: string;
}

const imageModules = import.meta.glob<ImageModule>(
    "../assets/art/*.{png,jpg,jpeg,svg}", 
    {
        eager: true,
    }
);

const images = Object.values(imageModules).map((module) => module.default);

interface ArtWrapperState {
    images: string[];
    selectedImage: string | null;
}

class ArtWrapper extends React.Component<object,ArtWrapperState> {
    constructor(props: object) {
        super(props);
        this.state = {
            images: images,
            selectedImage: null,
        };
    }

    handleImageClick = (image: string) => {
        this.setState({ selectedImage: image }); 
    }; 

    handleClose = () => {
        this.setState({ selectedImage: null });
    }
    
    render() {
        const { images, selectedImage } = this.state; 
        return (
            <>
                {/** Blur */} 
                {selectedImage && (
                    <div 
                        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
                        onClick={this.handleClose}
                    />
                )}

                {/** Modal */} 
                {selectedImage && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <div className='relative max-w-4xl max-h-[90vh] flex flex-col'>
                            <button 
                                onClick={this.handleClose}
                                className="absolute top-4 left-4 bg-secondary text-primary p-3 rounded-full hover:bg-opacity-80 transition"
                            >  
                                <FontAwesomeIcon icon={faArrowLeft} size='lg' />
                            </button>

                            <img 
                                src={selectedImage}
                                className='w-full h-auto rounded-md object-contain'
                            />
                        </div>
                    </div>
                )}

                <ResponsiveMasonry
                    columnsCountBreakPoints={{50:1, 300:2, 900:3}}
                >
                    <Masonry gutter='24px' className='mason'>
                        {
                            images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className='rounded-md cursor-pointer hover:opacity-80 transition'
                                    onClick={() => this.handleImageClick(image)}
                                />
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </>
        );
    }
}
export default ArtWrapper;