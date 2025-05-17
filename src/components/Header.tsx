import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id="header">
            <div>
                <Link to="/">
                    <img className="logo" src="/src/assets/portLogo.png" />
                </Link>
            </div>

            <div id="contact_info">
                <a
                    id="header"
                    href="/src/assets/2025NataliaGuevara_resume.pdf"
                    target="_blank"
                >
                    <HiDocumentText size={24} />
                    Resumé
                </a>
                <a id="header" href="https://github.com/guerv" target="_blank">
                    <FaGithub size={24} />
                    Github
                </a>
                <a
                    id="header"
                    href="https://www.linkedin.com/in/natalia-guevara-47753a2a0/"
                    target="_blank"
                >
                    <FaLinkedin size={24} />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Header;
