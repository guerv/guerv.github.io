import Head from "../components/Head";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";

function Home() {
    return (
        <>
            <Head />

            <div id="container">
                <div id="content">
                    <Showcase />

                    <div id="skills">
                        <h2>SKILLS</h2>
                        <img src="https://img.shields.io/badge/GNU%20Bash-%233b83e2?style=for-the-badge&logo=gnubash&logoColor=white" />
                        <img src="https://img.shields.io/badge/Git-%23c07d47?style=for-the-badge&logo=git&logoColor=white" />
                        <img src="https://img.shields.io/badge/C-%23765b81?style=for-the-badge&logo=c&logoColor=white" />
                        <img src="https://img.shields.io/badge/PHP-%23765b81?style=for-the-badge&logo=php&logoColor=white" />
                        <img src="https://img.shields.io/badge/JavaScript-%23e2543b?style=for-the-badge&logo=javascript&logoColor=white" />
                        <img src="https://img.shields.io/badge/Python-%2351c2a6?style=for-the-badge&logo=python&logoColor=white" />
                        <img src="https://img.shields.io/badge/Java-%23c07d47?style=for-the-badge&logo=openjdk&logoColor=white" />
                        <img src="https://img.shields.io/badge/C%2B%2B-%233b83e2?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
                        <img src="https://img.shields.io/badge/HTML5-%23e2543b?style=for-the-badge&logo=html5&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-%233b83e2?style=for-the-badge&logo=css3&logoColor=white" />
                        <img src="https://img.shields.io/badge/Haskell-%23765b81?style=for-the-badge&logo=haskell&logoColor=white" />
                        <img src="https://img.shields.io/badge/MediaPipe-%233b83e2?style=for-the-badge&logo=mediapipe&logoColor=white" />
                        <img src="https://img.shields.io/badge/OpenCV-%23e2543b?style=for-the-badge&logo=opencv&logoColor=white" />
                        <img src="https://img.shields.io/badge/Figma-%23765b81?style=for-the-badge&logo=figma&logoColor=white" />
                        <img src="https://img.shields.io/badge/Latex-%2351c2a6?style=for-the-badge&logo=latex" />
                        <img src="https://img.shields.io/badge/Lua-%23765b81?style=for-the-badge&logo=Lua&logoColor=white" />
                        <img src="https://img.shields.io/badge/NeoVim-%2351c2a6?style=for-the-badge&logo=neovim&logoColor=white" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Home;
