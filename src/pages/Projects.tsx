import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

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
                            className="text-5xl"
                        >
                            PROJECTS
                        </h1>
                        <FontAwesomeIcon icon={faAsterisk} size='lg' className='animate-spin' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects; 