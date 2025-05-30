import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Work from "./pages/Work";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/art" element={<Art />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </Router>
    );
}

export default App;
