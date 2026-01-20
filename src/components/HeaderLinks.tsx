import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../utils/cn.ts'

interface LinksProps {
    isFlexCol: boolean,
}

function HeaderLinks({isFlexCol} : LinksProps) {

    return (
        <>
            {/** links */}
            <div className={cn(
                'flex ml-auto gap-y-2', 
                isFlexCol ? 'flex-col' : 'flex-row',
            )}> 
                <a
                href='https://github.com/guerv'
                target='_blank'
                >
                <FontAwesomeIcon 
                    icon={faGithub} 
                    size='2xl'
                />
                </a>
                
                <a
                href='www.linkedin.com/in/natalia-guevara-47753a2a0'
                target='_blank'
                >
                <FontAwesomeIcon 
                    icon={faLinkedin} 
                    size='2xl'
                />
                </a>

                <a
                href='mailto:guevaran@mcmaster.ca'
                target='_blank'
                >
                <FontAwesomeIcon 
                    icon={faAt} 
                    size='2xl'
                />
                </a>
            </div>
        </>
    )
}

export default HeaderLinks;