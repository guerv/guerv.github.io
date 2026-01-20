import logo from '@/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const navHeaders = ["PROJECTS", "ART", "EXP."];
    
    return(
        <>
            {/** navbar */}
            <div
                className="
                    flex flex-col
                    h-13 hover:h-15 
                    transition-all duration-300 ease-in-out 
                    text-primary bg-secondary
                    rounded-b-2xl p-2 mx-4
                "
            >
                <div className='flex gap-3 items-center mt-auto mb-1'>
                    <img className='h-[1.5em] w-auto ml-5' src={logo} />
                    { navHeaders.map( value  => (
                    <>
                        <FontAwesomeIcon size='xs' icon={faAsterisk} />
                        <p
                            className='text-xl'
                            key={value}
                        >
                            {value}
                        </p> 
                    </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar