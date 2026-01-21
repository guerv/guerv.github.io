import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Art() {
    return (
        <>
            { /** art header */}
            <div className='bg-primary pb-3'>
                <Navbar />

                <div 
                    className="flex flex-col font-bold text-center gap-y-2
                               m-8"
                >
                    <h1
                        className="text-5xl"
                    >
                        ART
                    </h1>
                    <div className='flex items-center mx-auto gap-x-3'>
                        <FontAwesomeIcon icon={faAsterisk} size='xs' className='animate-spin' />
                        <h3 className='text-lg'>
                            digital + traditional
                        </h3>
                        <FontAwesomeIcon icon={faAsterisk} size='xs' className='animate-spin' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Art;