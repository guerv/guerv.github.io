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
}

class ArtWrapper extends React.Component<{}, ArtWrapperState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            images: images,
        };
    }

    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="24px" className="mason">
                    {this.state.images.map((image, index) => (
                        <img key={index} src={image} className="artImage" />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        );
    }
}

export default ArtWrapper;
