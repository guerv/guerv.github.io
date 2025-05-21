import ArtWrapper from "../components/ArtWrapper";
import Subheading from "../components/Subheading";
import Head from "../components/Head";

function Art() {
    return (
        <>
            <Head />
            <div id="container">
                <div id="art-container">
                    <div id="art-bg">
                        <Subheading title="Art" />
                        <ArtWrapper />{" "}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Art;
