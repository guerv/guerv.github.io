import logo from '@/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk} from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';

function Navbar() {
    const navHeaders = ["PROJECTS", "ART"];
    const navLinks = ["/projects", "/art", "/experience"];
    
    // svg disturbance interval 
    useEffect(() => {
        const interval = setInterval(() => {
        const x = 0.01 + Math.random() * 0.002;
        const y = 0.01 + Math.random() * 0.002;
        const turbulence = document.querySelector('feTurbulence');
        if (turbulence) {
            turbulence.setAttribute('baseFrequency', `${x} ${y}`);
        }
        }, 500);
        return () => clearInterval(interval);
    }, []);

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
                    <a href='/'>
                        <img className='h-[1.5em] w-auto ml-5 cursor-pointer hover:brightness-300' src={logo} />
                    </a>
                    { navHeaders.map( (value, index)  => (
                    <>
                        <FontAwesomeIcon size='xs' icon={faAsterisk} />
                        <a  className='no-underline' href={navLinks[index]}>
                            <p
                                className='text-xl font-bold cursor-pointer hover:brightness-300'
                                key={value}
                            >
                                {value}
                            </p> 
                        </a>
                    </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar