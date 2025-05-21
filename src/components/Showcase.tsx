import { useState } from "react";

import Subheading from "../components/Subheading";

import qPerf from "../assets/quatrobeat/perf.png";
import qMiss from "../assets/quatrobeat/miss.png";
import qMenu from "../assets/quatrobeat/menu.png";
import qEditMenu from "../assets/quatrobeat/editmenu.png";
import qEdit from "../assets/quatrobeat/editing.png";
import qTitle from "../assets/quatrobeat/quatrobeatTitle.png";

import pDemo from "../assets/paperstrings/paperstrings_demo.png";
import pLogo from "../assets/paperstrings/paperstrings.png";

import gFigma from "../assets/giftspark/figma.png";

import iSite from "../assets/isofolio/site.png";
import iFigma from "../assets/isofolio/figma.png";
import iFigmaIcon from "../assets/isofolio/figmaicon.png";

import cArt from "../assets/canvas/art.png";

function Showcase() {
    let projects = [
        "QuatroBeat",
        "Paper Strings",
        "GiftSpark",
        "WebDev Team Site",
        "Drawing App",
    ];
    let picsPaths = [
        [qPerf, qMiss, qMenu, qEditMenu, qEdit, qTitle],
        [pDemo, pLogo],
        [gFigma],
        [iSite, iFigma, iFigmaIcon],
        [cArt],
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
            <Subheading title="Showcase" />
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
