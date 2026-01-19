import logo from '@/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const navHeaders = ["PROJECTS", "ART", "EXP."];
    
    return(
        <>
            {/** navbar */}
            <div
                className='flex text-primary bg-secondary gap-3 items-center rounded-b-2xl p-4 mx-4'
            >
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
                )
                )}
            </div>
        </>
    )
}

export default Navbar