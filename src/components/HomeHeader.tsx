import { useEffect, useRef, useState } from "react";
import typing from '@/assets/typing.svg'
import '@/App.css'

import Navbar from '../components/Navbar'
import HeaderLinks from '../components/HeaderLinks'
import CannyBG from '@/assets/output.svg'

function HomeHeader() {
  const faces = ['x_x', 'o_o', 'ouo', 'q_q', 'OuO', 'T_T', ':D', ':p', '0_o', '._.'];
  const kaomojis = ["ᗒᗣᗕ", "๑❛ڡ❛๑", "ಠ۾ಠ", "´°ω°`", "ಠ_ಠ"];
  const setImg = true;
  const inputRef = useRef<HTMLInputElement>(null); 
  const [face , setFace] = useState<string>('')
  const [isEditingFace, setIsEditing] = useState(false); // convert to input element or text
  const [isTypingAnim, setIsTyping] = useState(true);
  const typingSpeed = 250; 

  useEffect(() => {
    if (isTypingAnim && !isEditingFace) {
      let cur_index = 0;
      let fullFace = kaomojis[Math.floor(Math.random() * kaomojis.length)]
      let isDeleting = false;
      
      const typingInterval = setInterval( () => {
          if (!isDeleting && cur_index <= fullFace.length) {
            setFace(fullFace.slice(0, cur_index)) ;
            cur_index ++; 
          } else if(!isDeleting && cur_index > fullFace.length) {
            isDeleting = true; // keeping this clause pauses typing at full face
          } else if (isDeleting && 0 < cur_index)  {
            setFace(fullFace.slice(0,cur_index)); 
            cur_index --; 
            if (cur_index === 0) {
              isDeleting = false;
              fullFace = kaomojis[Math.floor(Math.random() * kaomojis.length)] 
            }
          } 
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [isTypingAnim, isEditingFace])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = document.getElementById('header-bg');
      if (header) {
        header.style.backgroundPositionY = `${-scrollY * 0.3}px`;
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    if (!isEditingFace) {
      setIsTyping(false);
      setIsEditing(true);
      setTimeout(() => inputRef.current?.focus(), 0);
        // 0 ms delay on task queue
    }
  }
  const handleBlur = () => {
    setIsEditing(false);
    if (!face) { // empty face
      setFace('x_x')
    }
    setIsTyping(true)
  }

    return(
        <>
        {/** header */}
        <div 
            className='bg-primary relative overflow-hidden'
            style={{
            backgroundImage: `url(${CannyBG})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto', 
            backgroundPosition: 'center left',
            transition: 'background-position 0.2s',
            height: '500px'
            }}
            id='header-bg'
        >
            <Navbar />

            <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-10 pt-0'>
                <div className='relative'>
                    <div className="flex sm:gap-10">
                        <img src={typing} />
                        <div className='mt-auto mb-50 md:hidden'>
                            <HeaderLinks isFlexCol={true} />
                        </div>
                    </div>
                    <div
                        className='absolute top-5/12  left-3/5 sm:left-1/2 -translate-x-1/2 -translate-y-1/2'
                        onClick={handleClick}
                    >
                        { isEditingFace ? (
                        <input 
                            ref={inputRef}
                            type='text'
                            value={face}
                            onChange={(e) => setFace(e.target.value)}
                            onBlur={handleBlur} // lost focus
                            className='bg-transparent border-none outline-none text-center text-6xl font-semibold whitespace-nowrap'
                        /> 
                        ) : (
                            <div className='text-6xl font-semibold'>
                            {face}
                            {isTypingAnim && <span className='animate-pulse font-thin'>|</span>} 
                            </div>
                        )
                        }
                    </div>
                </div>

                { /** right side */}
                <div className='flex flex-col gap-6'>
                    {/** Header */}
                    <div className='text-center sm:mt-4 md:text-right font-bold'>
                        <h1
                        className='text-5xl md:text-7xl'
                        >
                        NATALIA
                        </h1>
                        <p className='text-2xl hidden md:block md:text-4xl'>
                        Guevara
                        </p>
                    </div>
                    <div className='hidden md:block ml-auto'>
                        <HeaderLinks isFlexCol={false} />
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
export default HomeHeader;