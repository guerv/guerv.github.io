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
            "/src/assets/quatrobeat/perf.png",
            "/src/assets/quatrobeat/miss.png",
            "/src/assets/quatrobeat/menu.png",
            "/src/assets/quatrobeat/editmenu.png",
            "/src/assets/quatrobeat/editing.png",
            "/src/assets/quatrobeat/quatrobeatTitle.png",
        ],
        [
            "/src/assets/paperstrings/paperstrings_demo.png",
            "/src/assets/paperstrings/paperstrings.png",
        ],
        ["/src/assets/giftspark/figma.png"],
        [
            "/src/assets/isofolio/site.png",
            "/src/assets/isofolio/figma.png",
            "/src/assets/isofolio/figmaicon.png",
        ],
        ["/src/assets/canvas/art.png"],
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
