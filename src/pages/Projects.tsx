import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import projectsInfo from "../assets/projects/info.json"
import ProjectTab from "../components/ProjectTab";
import {iconMap} from "../utils/icons";
import Container from "../components/Container";

interface Project {
    key: string;
    name: string; 
    icons:string[];
    date: string;
    gh_link?: string;
    description?: string;
    thumbnailUrl?: string;
}

function Projects() {
    return (
        <>
            <div className='bg-primary pb-3'>
                <Navbar />

                <div 
                    className="font-bold gap-y-2 
                               m-8"
                >
                    <div className="flex gap-x-4 items-center justify-center">
                        <FontAwesomeIcon icon={faAsterisk} size='lg' className='animate-spin' />
                        <h1
                            className="text-5xl font-daysone"
                        >
                            PROJECTS
                        </h1>
                        <FontAwesomeIcon icon={faAsterisk} size='lg' className='animate-spin' />
                    </div>
                </div>
            </div>

            <Container>
                <span className="w-full text-primary text-left text-sm">
                    Below are a few projects I've worked on! Click on a project to redirect to its GitHub repository.
                </span>
                <div className="mx-15 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    projectsInfo.map( (project: Project) => (
                        <ProjectTab
                            key={project.key}
                            name={project.name}
                            description={project.description}
                            thumbnailUrl={project.thumbnailUrl}
                            icons={project.icons.map((iconName:string) => iconMap[iconName])}
                            gh_link={project.gh_link}
                        />
                    ))
                }
                </div>
            </Container>

        </>
    )
}

export default Projects; 