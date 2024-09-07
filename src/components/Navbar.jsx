import React from 'react'
import logo from "../assets/react.svg"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-deepPurple p-3 flex justify-between items-center">
      <div className="flex items-center ml-10">
        <span className="text-white font-semibold text-lg ">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-white hover:text-lavender">หน้าหลัก</NavLink></li>
        <li><NavLink to="/Course" className="text-white hover:text-lavender">หลักสูตรที่เปิดสอน</NavLink></li>
        <li><NavLink to="/Contact" className="text-white hover:text-lavender">ติดต่อ</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar