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
        <div className="border-primary rounded-sm 
                            border-2 border-r-5 border-r-primary
                            border-l-[3px] border-l-primary
                            border-b-12 border-b-primary
                            border-t border-t-primary
                        w-full h-50 overflow-hidden text-primary 
                        
                        hover:border-t-primary-hover
                        hover:border-b-3 hover:border-t-2
                        transition-all duration-300 ease-in-out 
                        group
                        cursor-pointer
        ">
            <img src={thumbnailUrl} className="p-5 w-full h-4/5 object-cover object-center group-hover:blur-xs transition-all duration-200 overflow-hidden" />
            <div className='font-bold px-2 flex justify-between items-center h-1/5 border-t-2 border-primary'>
                <p>{name}</p>
                <div className='flex gap-2'>
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