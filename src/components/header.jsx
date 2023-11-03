import React from 'react'
import {TbCurrencyEthereum} from "react-icons/tb"
const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-black shadow-lg fixed top-0 left-0 right-0'>
       <a href='#' className='flex justify-start items-center text-xl text-white hover:text-gray-300 space-x-2'><span>PROJECT CF</span>
       <TbCurrencyEthereum/>
       </a>     
    <div className='text-white flex space-x-2 justify-center'> 
        <button type='button' className='inline-block px-6 py-2.5 bg-blue-400 font-medium text-s leading-tight rounded-xl shadow-md hover:bg-blue-800'>Connect Wallet</button>
    </div>

    </header>
  )
}

export default Header;