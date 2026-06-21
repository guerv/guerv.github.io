import { useEffect, useRef, useState } from "react";
import typing from '@/assets/typing.svg'
import '@/App.css'

import Navbar from '../components/Navbar'
import HeaderLinks from '../components/HeaderLinks'
import Link from '../components/Link'
import CannyBG from '@/assets/header.svg'

function HomeHeader() {
  const faces = ['x_x', 'o_o', 'ouo', 'q_q', 'OuO', 'T_T', ':D', ':p', '0_o', '._.'];
  const kaomojis = ["ᗒᗣᗕ", "๑❛ڡ❛๑", "ಠ۾ಠ", "´°ω°`", "ಠ_ಠ", "°□°"];
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
        {/** DISTORTION */}
        <svg className="absolute">
          <defs>
            <filter id='distort'>
              <feTurbulence baseFrequency="0.01 0.01" numOctaves="1" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="R" />
            </filter>
          </defs>
        </svg>


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
                        {/*<img src={typing} id="distort"/>*/}
                        <svg filter="url(#distort)" width="409" height="530" viewBox="0 0 409 530" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M325.708 182.303C330.547 218.599 330.702 253.49 329.064 283.803C318.313 297.99 301.985 308.848 283.208 315.145C278.511 316.72 273.661 318.009 268.708 318.994C251.773 322.361 233.621 322.167 216.208 317.643C211.473 316.413 206.793 314.863 202.208 312.977C184.363 305.639 167.941 293.218 155.26 274.803C150.965 220.945 154.984 164.255 180.208 125.303C188.708 172.303 231.708 200.303 255.708 206.803C234.708 185.803 235.541 157.303 236.708 142.803C253.208 170.803 302.208 182.303 325.708 182.303ZM325.708 182.303L320.208 149.803" stroke="#0B0D0C" stroke-width="6" stroke-linecap="round"/>
<path d="M209.121 8.0166L198.829 50.0059C229.952 25.1737 264.136 19.1876 296.373 25.8018C330.971 32.9005 363.151 54.4593 386.988 82.3535L391.955 88.166L384.361 87.2822C371.964 85.8407 359.325 85.1864 350.818 84.9355C364.736 99.173 376.406 118.066 385.576 136.332C395.976 157.049 403.284 177.206 407.072 189.413L408.535 194.127L403.678 193.256L374.35 187.993C376.42 201.668 379.295 218.146 381.296 233.932C383.504 251.351 384.745 268.566 382.668 281.286L380.802 292.719L376.884 281.817C374.982 276.527 371.805 268.184 368.463 260.385C366.791 256.484 365.091 252.748 363.499 249.61C363.48 249.573 363.459 249.535 363.44 249.498C361.178 263.126 357.114 281.723 351.456 300.602C344.558 323.616 335.189 347.402 323.621 363.084L316.758 372.389L318.231 360.92C322.685 326.28 332.445 258.821 323.064 185.257C310.989 184.87 293.867 181.901 277.542 175.867C263.014 170.498 248.704 162.551 239.248 151.472C238.911 166.581 241.274 188.126 257.829 204.682L265.788 212.641L254.923 209.698C242.415 206.311 225.243 197.429 210.108 183.443C196.522 170.889 184.437 154.089 178.909 133.259C162.546 162.342 156.712 200.305 156.769 239.548C156.831 281.631 163.663 324.779 171.138 359.165L173.506 370.056L165.992 361.825C160.457 355.762 152.058 342.588 143.837 326.145C137.294 313.059 130.778 297.732 125.834 281.976C125.273 286.583 124.34 293.978 122.68 306.206L121.381 315.774L117.029 307.154C111.344 295.893 107.417 281.294 104.992 265.251C99.4633 228.68 101.6 183.661 109.461 151.099C111.978 140.671 115.108 131.412 118.824 124.074C121.713 118.37 125.071 113.6 128.964 110.412C126.293 107.389 124.355 103.671 122.963 99.7119C121.108 94.437 120.152 88.5398 119.776 82.8115C119.029 71.437 120.538 60.1401 122.371 54.8252L123.935 50.2881L127.329 53.6816C132.361 58.7132 138.091 62.8027 143.236 65.6855C146.835 67.702 149.986 69.037 152.316 69.7402C155.135 57.1921 163.949 44.2589 173.679 33.1855C184.309 21.0862 196.452 10.7428 204.432 4.88477L211.086 0L209.121 8.0166ZM201.169 87.8555C198.437 87.4537 195.897 89.3433 195.495 92.0752C191.214 121.185 205.396 144.458 213.326 152.757L226.372 166.409L221.792 148.09C218.373 134.413 221.774 121.368 225.661 112.839C239.917 138.363 260.085 150.788 269.86 154.046L285.83 159.369L275.355 146.191C268.952 138.135 266.69 130.828 266.177 125.421C271.13 129.442 276.786 132.856 282.209 135.639C290.795 140.044 299.28 143.112 304.578 144.613C307.235 145.366 309.999 143.823 310.752 141.166C311.504 138.509 309.961 135.745 307.305 134.992C302.603 133.66 294.738 130.827 286.774 126.741C278.734 122.616 271.07 117.453 266.311 111.637L261.116 105.286L257.853 112.814C255.866 117.4 254.87 125.955 258.384 136.141C249.199 129.094 238.34 117.543 230.495 100.238L226.977 92.4795L221.919 99.333C217.97 104.683 212.084 116.211 210.684 130.309C206.408 120.725 203.27 107.933 205.388 93.5303C205.79 90.7983 203.901 88.2573 201.169 87.8555Z" fill="#0B0D0C"/>
<path d="M192.208 342.303L217.302 327.303C217.797 335.054 217.248 341.571 216.208 346.831C207.408 354.808 196.541 354.136 192.208 352.803V342.303Z" fill="#071E22"/>
<path d="M267.146 327.303C306.208 350.235 307.408 354.103 304.208 359.303C296.041 359.303 277.108 357.489 266.708 350.235C265.812 344.493 265.633 337.158 267.146 327.303Z" fill="#071E22"/>
<path d="M192.208 342.303L217.302 327.303C217.797 335.054 217.248 341.571 216.208 346.831C207.408 354.808 196.541 354.136 192.208 352.803V342.303Z" stroke="#E52E00" stroke-width="6"/>
<path d="M267.146 327.303C306.208 350.235 307.408 354.103 304.208 359.303C296.041 359.303 277.108 357.489 266.708 350.235C265.812 344.493 265.633 337.158 267.146 327.303Z" stroke="#E52E00" stroke-width="6"/>
<path d="M183.208 511.303L188.208 489.303L188.208 438.803L185.208 430.803L186.708 423.803C195.208 443.303 261.708 453.303 287.402 430.803C283.875 446.774 281.208 461.466 281.208 470.303L282.708 526.303H185.208L183.208 511.303Z" fill="#071E22" stroke="#071E22" stroke-width="6"/>
<path d="M158.208 430.803C172.208 444.003 184.041 464.636 188.208 473.303V489.303L183.208 511.303L185.208 526.303H282.708L281.208 470.303C336.808 417.103 355.041 402.803 357.208 402.303L359.208 397.053L363.708 402.303L390.208 526.303H331.208H282.708H185.208H144.708H92.7076L113.208 416.803L120.708 397.803V390.303L132.708 380.803L158.208 430.803Z" fill="#0B0D0C"/>
<path d="M185.208 526.303L183.208 511.303L188.208 489.303V473.303C184.041 464.636 172.208 444.003 158.208 430.803L132.708 380.803L120.708 390.303V397.803L113.208 416.803L92.7076 526.303H144.708H185.208ZM185.208 526.303H282.708M282.708 526.303L281.208 470.303C336.808 417.103 355.041 402.803 357.208 402.303L359.208 397.053L363.708 402.303L390.208 526.303H331.208M282.708 526.303H331.208" stroke="#0B0D0C" stroke-width="6" stroke-linecap="round"/>
<path d="M328.838 483.303L327.708 462.803M328.838 483.303C330.734 482.103 349.874 464.803 359.208 456.303M328.838 483.303L331.208 526.303" stroke="#E52E00" stroke-width="4" stroke-linecap="round"/>
<path d="M144.708 526.303L145.583 501.803M145.583 501.803L146.708 470.303M145.583 501.803L122.208 456.803" stroke="#E52E00" stroke-width="4" stroke-linecap="round"/>
<path d="M304.208 359.303C302.609 370.171 293.654 402.496 287.402 430.803C283.875 446.774 281.208 461.466 281.208 470.303C336.808 417.103 355.041 402.803 357.208 402.303L361.208 391.803C354.008 377.803 349.874 373.969 348.708 373.803L327.708 352.803V337.803C302.708 322.303 292.708 318.994 283.208 315.145C278.511 316.72 273.661 318.009 268.708 318.994C268.058 321.949 267.544 324.713 267.146 327.303C306.208 350.235 307.408 354.103 304.208 359.303Z" fill="#0B0D0C" stroke="#0B0D0C" stroke-width="6"/>
<path d="M188.208 473.303C184.041 464.636 172.208 444.003 158.208 430.803L132.708 380.803C129.108 374.803 127.208 368.136 126.708 366.303L160.208 339.303L158.208 332.303C165.808 326.303 190.708 316.919 202.208 312.977C206.793 314.863 211.473 316.413 216.208 317.643C216.754 321.051 217.108 324.271 217.302 327.303L192.208 342.303V352.803L188.208 416.803L185.208 430.803L188.208 438.803V473.303Z" fill="#0B0D0C" stroke="#0B0D0C" stroke-width="6"/>
<path d="M188.208 473.303C184.041 464.636 172.208 444.003 158.208 430.803L132.708 380.803" stroke="#0B0D0C" stroke-width="6"/>
<path d="M216.208 346.831C207.408 354.808 196.541 354.136 192.208 352.803L188.208 416.803L186.708 423.803C195.208 443.303 261.708 453.303 287.402 430.803C293.654 402.496 302.609 370.171 304.208 359.303C296.041 359.303 277.108 357.489 266.708 350.235M216.208 346.831C217.248 341.571 217.797 335.054 217.302 327.303C217.108 324.271 216.754 321.051 216.208 317.643C233.62 322.167 251.773 322.361 268.708 318.994C268.058 321.949 267.544 324.713 267.146 327.303C265.633 337.158 265.812 344.493 266.708 350.235M216.208 346.831C214.679 354.562 212.091 359.576 210.208 361.803M266.708 350.235C267.751 356.931 269.767 361.462 271.208 365.303" stroke="#0B0D0C" stroke-width="6" stroke-linecap="round"/>
<path d="M107.959 264.803C102.487 228.608 104.609 183.98 112.377 151.803C93.2076 151.803 81.7076 151.803 75.7076 141.303C75.7076 154.303 91.2076 172.303 98.2076 177.803C62.2076 175.803 26.7076 218.803 5.20761 277.303C25.2076 268.803 88.7076 262.803 107.959 264.803Z" fill="#0B0D0C" stroke="#0B0D0C" stroke-width="6"/>
</svg>

                        <div className='mb-30 md:hidden'>
                            <HeaderLinks isFlexCol={true} />
                        </div>
                    </div>
                    <div
                        className='absolute top-5/12 md:left-3/5 left-1/2 -translate-x-1/2 -translate-y-5/12'
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
                        className='text-5xl md:text-7xl font-daysone'
                        >
                        NATALIA
                        </h1>
                        <p className='text-2xl hidden md:block md:text-4xl font-daysone'>
                        Guevara
                        </p>
                    </div>

                    <div className="
                        text-center md:text-right text-primary text-lg
                        bg-secondary rounded-lg md:rounded-r-none py-3 pl-7 pr-3
                    ">
                        <h3>Currently Studying <Link href='https://www.eng.mcmaster.ca/cas/degree-options/computer-science/'>CS @ McMaster</Link></h3>
                        <h3>Seeking 2026 Fall Roles</h3>
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
