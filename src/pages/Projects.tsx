import Head from "../components/Head";
import Footer from "../components/Footer";

function Projects() {
    return (
        <>
            <Head />
            <div id="container">
                <div id="content">
                    <h2>PROJECT SHOWCASE</h2>

                    <div>
                        <h3>
                            <a
                                href="https://github.com/guerv/quatrobeat"
                                target="_blank"
                            >
                                QuatroBeat
                            </a>
                        </h3>
                        <p>
                            <i>
                                A four-key rhythm game that allows you to play
                                and create your own levels.
                            </i>
                        </p>
                    </div>

                    <div>
                        <h3>
                            <a
                                href="https://github.com/ameya-g-git/paper-strings"
                                target="_blank"
                            >
                                Paper Strings
                            </a>
                        </h3>
                        <p>
                            <i>
                                A 24-hour project for DeltaHacks XI that allows
                                you to play basic guitar chords based on your
                                hand shape!
                            </i>
                        </p>
                    </div>

                    <div>
                        <h3>
                            <a
                                href="https://github.com/guerv/Grocery-Store-Nightmare"
                                target="_blank"
                            >
                                Grocery Store Nightmare
                            </a>
                        </h3>
                    </div>
                    <p>
                        <i>
                            Simple adventure game made with Java with moving
                            enemies, projectiles, and power-ups.
                        </i>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Projects;
