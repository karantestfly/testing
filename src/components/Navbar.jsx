import React from 'react'
import logo from '../assets/logo.png'
import profile1 from '../assets/Profile1.png'
import Icon from './Icon'

function Navbar() {
  return (
    <nav className=' flex justify-between text-purpleDark mt-8 md:mt-4 mb-12'>
        <div className="logo w-[160px] h-[45px] md:h-[63px]">
            <img className='w-full h-auto' src={logo} alt="logo" />
        </div>
        <div className="nav-links flex items-center gap-5">
        <ul className="font-medium  items-center gap-5 opacity-25 hidden md:flex">
            <li>My Assignment</li>
            <li>Chat With Mentor</li>
        </ul>
        <div className="profileBtn flex items-center gap-2 mr-5 py-[12px] px-[25px] justify-center rounded-md text-white md:text-purpleDark bg-purpleDark md:bg-white">
            <img className='hidden md:block' src={profile1} alt="user icon" />
            <button>ProfileName</button>
            <div className="icon md:hidden">
                <Icon color="white" />
            </div>
            <div className="icon hidden md:block">
                <Icon color="purple" />
            </div>
            
        </div>
        </div>
    </nav>
  )
}

export default Navbar