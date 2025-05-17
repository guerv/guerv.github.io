import { useState } from "react";

function Showcase() {
    let projects = [
        "QuatroBeat",
        "Paper Strings",
        "GiftSpark",
        "WebDev Team Site",
        "Drawing App",
    ];
    let picsPaths = [
        [
            "../assets/quatrobeat/perf.png",
            "../assets/quatrobeat/miss.png",
            "../assets/quatrobeat/menu.png",
            "../assets/quatrobeat/editmenu.png",
            "../assets/quatrobeat/editing.png",
            "../assets/quatrobeat/quatrobeatTitle.png",
        ],
        [
            "../assets/paperstrings/paperstrings_demo.png",
            "../assets/paperstrings/paperstrings.png",
        ],
        ["../assets/giftspark/figma.png"],
        [
            "../assets/isofolio/site.png",
            "../assets/isofolio/figma.png",
            "../assets/isofolio/figmaicon.png",
        ],
        ["../assets/canvas/art.png"],
    ];

    const [selectedProj, setSelectedProj] = useState(0);
    const [selectedPath, setSelectedPath] = useState(0);

    const fixedTabCount = 7;
    const tabElements = [];

    for (let i = 0; i < fixedTabCount; i++) {
        if (i < projects.length) {
            tabElements.push(
                <li
                    className={
                        (selectedProj === i ? "selectedProj" : "") +
                        (" proj" + i)
                    }
                    key={projects[i]}
                    onClick={() => {
                        setSelectedProj(i);
                        setSelectedPath(0);
                    }}
                >
                    <div className="tab-content">{projects[i]}</div>
                </li>
            );
        } else {
            tabElements.push(
                <li className="spacer-tab" key={`spacer-${i}`}>
                    <div className="tab-content"></div>
                </li>
            );
        }
    }

    //let pathIndex = 0;

    return (
        <div id="showcase-container">
            <div className="subHeading">Showcase</div>
            <div id="showcase">
                <ul className="project-tabs">{tabElements}</ul>
                <div className="image-container">
                    <div className="image-wrapper">
                        {picsPaths[selectedProj][selectedPath] && (
                            <img
                                src={picsPaths[selectedProj][selectedPath]}
                            ></img>
                        )}
                    </div>
                    <div id="navShowcase">
                        <button
                            className="nav-button"
                            onClick={() => {
                                setSelectedPath(
                                    selectedPath === 0
                                        ? picsPaths[selectedProj].length - 1
                                        : selectedPath - 1
                                );
                            }}
                        >
                            ◀
                        </button>
                        <div className="dots-container">
                            {picsPaths[selectedProj].map((_, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`dot ${
                                        dotIndex === selectedPath
                                            ? "active-dot"
                                            : ""
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            className="nav-button"
                            onClick={() => {
                                setSelectedPath(
                                    selectedPath ===
                                        picsPaths[selectedProj].length - 1
                                        ? 0
                                        : selectedPath + 1
                                );
                            }}
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showcase;
