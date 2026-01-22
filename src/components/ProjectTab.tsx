import '@/App.css'
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface ProjectProps {
    thumbnailUrl: string,
    name: string, 
    description?: string,
    icons: IconProp[],
    gh_link?: string,
}

const ProjectTab = ({
    thumbnailUrl, 
    name, 
    description,
    icons,
    gh_link
}: ProjectProps) =>  {
    return (
        <div className="border-primary rounded-sm 
                            border-2 border-r-5 border-r-primary
                            border-l-[3px] border-l-primary
                            border-b-12 border-b-primary
                            border-t border-t-primary
                        w-full  overflow-hidden text-primary 
                        
                        hover:border-t-primary-hover
                        hover:border-b-3 hover:border-t-2
                        transition-all duration-300 ease-in-out 
                        group
                        cursor-pointer
                        p-3 pb-1
        ">
            <a href={gh_link} target='_blank' rel='noopener noreferrer'> 
                <img src={thumbnailUrl} className="w-full h-48 object-cover object-center group-hover:blur-xs transition-all duration-200 
                                                overflow-hidden rounded-sm outline" />
            </a>
            <div className='p-2'>
                <div className='font-bold flex justify-between items-center text-lg'>
                    <p>{name}</p>
                    <div className='flex gap-2'>
                    {
                        icons.map(icon => (
                            <FontAwesomeIcon icon={icon} size='lg' />
                        ))
                    }
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default ProjectTab;