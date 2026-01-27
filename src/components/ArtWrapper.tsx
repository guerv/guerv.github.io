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
        const { images } = this.state; 
        return (
            <>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{50:1, 300:2, 900:3}}
                >
                    <Masonry gutter='24px' className='mason'>
                        {
                            images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className='rounded-md transition'
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