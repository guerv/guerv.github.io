import '@/App.css'
import testImg from '@/assets/projects/TEST.png';
import {iconMap} from '../utils/icons'
import nullImage from '@/assets/noImage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type IconComponent = (typeof iconMap)[keyof typeof iconMap];

interface ProjectProps {
    thumbnailUrl?: string,
    name: string, 
    description?: string,
    icons?: IconComponent[],
    gh_link?: string,
}

const ProjectTab = ({
    thumbnailUrl, 
    name, 
    description,
    icons,
    gh_link
}: ProjectProps) =>  {
    /*if (thumbnailUrl) {
        const url = new URL(thumbnailUrl, window.location.origin);
    }*/
    return (
        <a href={gh_link} target='_blank' rel='noopener noreferrer' 
            className="block 
                        border-primary rounded-sm 
                            border-2 border-r-4 border-r-primary
                            border-l-[3px] border-l-primary
                            border-b-8 border-b-primary
                            border-t border-t-primary
                        w-full  overflow-hidden text-primary 
                        
                        hover:border-t-primary-hover
                        hover:border-b-3 hover:border-t-6
                        transition-all duration-300 ease-in-out 
                        group
                        cursor-pointer
                        p-3 pb-1

                        no-underline font-normal
        ">
                <div className='outline rounded overflow-hidden relative'>
                    <img src={thumbnailUrl ? thumbnailUrl : nullImage} className="w-full h-48 object-cover object-center opacity-75
                                                group-hover:blur-xs group-hover:opacity-20
                                                transition-all duration-200 
                                                overflow-hidden rounded-sm " />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100 

                                    font-bold text-lg
                                    gap-x-1 
                                    brightness-200 
                    ">
                        <p>GitHub Link</p>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </div>
                    { icons && 
                        <div className='absolute top-2 right-2 bg-black/85 px-2 py-2 rounded flex gap-2'>
                            { 
                                icons.map((Icon) => (
                                    <Icon fontSize={25} color='rgb(229,46,0)' />
                            ))}
                        </div>
                    }
                </div>
            <div className='p-2'>
                <div className='font-bold flex justify-between items-center text-lg'>
                    <p className='text-2xl font-daysone'>{name}</p>
                </div>
                <p className='text-left text-xs italic'>{description}</p>
            </div>
        </a>
    )
}
export default ProjectTab;