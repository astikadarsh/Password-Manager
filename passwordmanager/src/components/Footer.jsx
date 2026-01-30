import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white min-h-[6vh]'>
            <ul>
                <li className='flex gap-4 justify-center items-center'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="#">About</a>
                    <a className='hover:font-bold' href="#">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Footer
