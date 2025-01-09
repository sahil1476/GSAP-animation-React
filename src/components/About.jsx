import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: '#clip',
                start: 'center center', 
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100%',
            height: '100%',
            borderRadius: 0,
            duration: 3,
            ease: 'power2.in',
        })
    })
  return (
    <div id='about' className='min-h-screen w-screen'>
       <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
              <p className='font-general text-sm uppercase md:text-[10px]'>
                Welcome to The whole New World of Gaming... 
              </p>

              <AnimatedTitle 
                 title="Disc<b>o</b>ver the World's <br/>  L<b>a</b>rgest Shared <b>a</b>dventure" 
                 containerClass="mt-5 !text-black text-center"
              />


              <div className='about-subtext '>
                  <p>The Game of Games begin-your life, now an epic Transition</p>
                  <p className="text-gray-500">Valorent unites every player from countless games and platform</p>
              </div>     
       </div>
       <div className='h-dvh w-screen transi' id='clip'>
         <div className='mask-clip-path about-image'>
            <img src='img/about.webp'
                 alt='Background'
                 className='absolute left-0 top-0 size-full object-cover'
            />
         </div>
       </div>
    </div>
  )
}

export default About
