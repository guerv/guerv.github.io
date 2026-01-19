import '@/App.css'
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface ProjectProps {
    thumbnailUrl: string,
    name: string, 
    description: string,
    icons: IconProp[]
}

const ProjectTab = ({
    thumbnailUrl, 
    name, 
    icons
}: ProjectProps) =>  {
    return (
        <div className="border-primary rounded-sm border-2 w-1/3 h-50 overflow-hidden text-primary">
            <img src={thumbnailUrl} className="p-5 w-full h-4/5 object-cover object-center hover:blur-xs transition-all duration-200 overflow-hidden" />
            <div className='font-bold hpx-2 flex justify-between items-center h-1/5 border-t-2 border-primary'>
                <p>{name}</p>
                <div>
                {
                    icons.map(icon => (
                        <FontAwesomeIcon icon={icon} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default ProjectTab;