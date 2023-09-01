'use client'
import Image from "next/image"

export default function Navbar(){
    const toggleMenu = () => {
        const dropdown = document.querySelector(".dropdown")
        const menu = document.querySelector(".menu")
    
        dropdown?.classList.toggle("hidden")
        if (dropdown?.classList.contains("hidden")){
          menu?.setAttribute("src", "/images/icon-hamburger.svg")
        }
        else{
          menu?.setAttribute("src", "/images/icon-close.svg")
        }
      }

    return(
        <nav className='sticky self-start top-0 z-40 m-auto p-2 bg-white w-full lg:max-w-5xl flex justify-between sm:justify-center lg:rounded-[50px] lg:top-2 shadow-lg items-center'>
          <a className='sm:hidden w-16 mx-4 pt-[0.4rem] box-border block rounded-full aspect-square text-center font-semibold text-4xl text-light-blue relative' href="#">
              {/* <Image className='rounded-full' alt='warrior' src='/images/warrior.jpeg' fill objectFit='contain'/> */}
            </a>

          <div className='h-max mx-4 flex flex-col sm:block sm:w-5/6 sm:box-border'>
            <div onClick={toggleMenu} className='ml-auto sm:hidden'>
              <Image src='/images/icon-hamburger.svg' alt='menu-toggle' width={34} height={64} className='menu'/>
            </div>
            
            <div onClick={toggleMenu} className='hidden dropdown m-auto absolute w-full h-screen sm:h-full p-2 bg-transparent-black top-full left-1/2 -translate-x-1/2 shadow-xl sm:relative sm:flex sm:justify-end sm:max-w-3xl sm:left-0 sm:top-0 sm:-translate-x-0 sm:w-full sm:shadow-none sm:bg-transparent'>
              <div className='bg-purple-full max-w-[500px] w-[90%] m-auto sm:flex sm:justify-evenly sm:bg-transparent'>
                <a href='#' className='block px-8 py-4 font-semibold text-lg text-white hover:bg-mid-purple sm:text-purple sm:hover:text-mid-purple sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Home</a>
                <a href='#about' className='block px-8 py-4 font-semibold text-lg text-white hover:bg-mid-purple sm:text-purple sm:hover:text-mid-purple sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>About</a>
                <a href='#roadmap' className='block px-8 py-4 font-semibold text-lg text-white hover:bg-mid-purple sm:text-purple sm:hover:text-mid-purple sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Roadmap</a>
                <a href='#' className='block px-8 py-4 font-semibold text-lg text-white hover:bg-mid-purple sm:text-purple sm:hover:text-mid-purple sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Utilities</a>
                <a href='#' className='block px-8 py-4 font-semibold text-lg text-white hover:bg-mid-purple sm:text-purple sm:hover:text-mid-purple sm:inline sm:p-0 sm:mx-2  sm:hover:bg-transparent'>Contact</a>
              </div>
            </div>
          </div>
      </nav>
    )
}