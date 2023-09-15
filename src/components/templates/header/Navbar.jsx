import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-end float-right w-2/3 py-4'>
        <ul className='flex items-center space-x-16 fonts-[500]  text-[20px] text-[#01384D]'>
            <li>
                <Link to={"/"}>Katalog</Link>
            </li>
            <li>
                <Link to={"/"}>Aksiya</Link>
            </li>
            <li>
                <Link to={"/"}>Biz haqimizda</Link>
            </li>
            <li>
                <Link to={"/"}>Manzilimiz</Link>
            </li>
            <li>
                <Link to={"/"}>Aloqa</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar