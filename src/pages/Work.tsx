import Head from "../components/Head";
import Footer from "../components/Footer";

function Work() {
    return (
        <>
            <Head />

            <div id="container">
                <div id="content">
                    <h2>WebDev Coursework</h2>
                    <p>
                        <i>Work from a Full Stack WebDev Course</i>
                    </p>

                    <div>
                        <h3 className="skill">
                            <a href="work/canvas/index.html" target="_blank">
                                Drawing App
                            </a>
                        </h3>
                        <a
                            href="https://github.com/guerv/canvas-assignment"
                            target="_blank"
                        >
                            <img src="https://img.shields.io/badge/GitHub Link-black?style=for-the-badge&logo=github&logoColor=white" />
                        </a>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <img src="https://img.shields.io/badge/HTML5-%23e2543b?style=for-the-badge&logo=html5&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-%233b83e2?style=for-the-badge&logo=css3&logoColor=white" />
                        <p>
                            <i>
                                A pair assignment for a drawing app. Draw and
                                draw lines, circles, and rectangles of various
                                sizes and colours.
                            </i>
                        </p>
                    </div>

                    <div>
                        <h3 className="skill">
                            <a href="work/js_game/index.html" target="_blank">
                                Pig (Dice Game)
                            </a>
                        </h3>
                        <a
                            href="https://github.com/guerv/pig_dice"
                            target="_blank"
                        >
                            <img src="https://img.shields.io/badge/GitHub Link-black?style=for-the-badge&logo=github&logoColor=white" />
                        </a>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <img src="https://img.shields.io/badge/HTML5-%23e2543b?style=for-the-badge&logo=html5&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-%233b83e2?style=for-the-badge&logo=css3&logoColor=white" />
                        <p>
                            <i>
                                A client-side JavaScript game that replicates
                                Pig. Emphasizes user constrainsts and feedback.
                            </i>
                        </p>
                    </div>

                    <div>
                        <h3 className="skill">
                            <a href="work/weblayout/index.html" target="_blank">
                                Web Layout Display
                            </a>
                        </h3>
                        <a
                            href="https://github.com/guerv/weblayout"
                            target="_blank"
                        >
                            <img src="https://img.shields.io/badge/GitHub Link-black?style=for-the-badge&logo=github&logoColor=white" />
                        </a>
                        <img src="https://img.shields.io/badge/HTML5-%23e2543b?style=for-the-badge&logo=html5&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-%233b83e2?style=for-the-badge&logo=css3&logoColor=white" />
                        <p>
                            <i>
                                Displays responsive design with CSS media
                                queries. Also utilizes grid layouts for a
                                desktop vs. mobile layout.
                            </i>
                        </p>
                    </div>

                    <hr />

                    <div>
                        <h4>
                            <a
                                href="./work/lab_7.1/exercise2.html"
                                target="_blank"
                            >
                                Guessing Game with Statistics on Guesses
                            </a>
                        </h4>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <img src="https://img.shields.io/badge/HTML5-%23e2543b?style=for-the-badge&logo=html5&logoColor=white" />
                        <img src="https://img.shields.io/badge/CSS3-%233b83e2?style=for-the-badge&logo=css3&logoColor=white" />
                        <ul>
                            <li>Classes & Constructors</li>
                        </ul>
                    </div>

                    <div>
                        <h4>
                            <a
                                href="./work/lab_7.1/exercise5.html"
                                target="_blank"
                            >
                                500 Balls Colliding with Walls
                            </a>
                        </h4>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <ul>
                            <li>Animation</li>
                            <li>Classes & Constructors</li>
                        </ul>
                    </div>

                    <div>
                        <h4>
                            <a
                                href="./work/lab_6.1/canvasTestBed4.html"
                                target="_blank"
                            >
                                Testing the Canvas
                            </a>
                        </h4>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <ul>
                            <li>Graphics through JavaScript's Canvas</li>
                        </ul>
                    </div>

                    <div>
                        <h4>
                            <a
                                href="./work/lab_5.1/arithmetic.html"
                                target="_blank"
                            >
                                Basic Arithmetic
                            </a>
                        </h4>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <ul>
                            <li>
                                Responsive calculations with JavaScript Event
                                Listeners
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>
                            <a
                                href="./work/lab_5.1/catchTheRabbit/catchTheRabbit.html"
                                target="_blank"
                            >
                                Catch the Rabbit
                            </a>
                        </h4>
                        <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=white" />
                        <ul>
                            <li>
                                Responds to user mouse input with JavaScript
                                Event Listeners
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Work;
