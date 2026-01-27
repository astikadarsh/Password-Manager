import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
const Manager = () => {
    const ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    const showPassword = () => {
        alert("showing password");
        if (ref.current.src.includes("icons/eyecross.png")) {

            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyecross.png"
        }
    }


    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray,form])
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="container mx-auto max-w-4xl px-40 py-16">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>
                    Pass
                    <span className='text-green-500'>Vault/ &gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>A Secure Password Mangement Tool</p>
                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input name='site' value={form.site} onChange={handleChange} placeholder='enter website url' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                    <div className="flex w-full justify-between gap-8">
                        <input name='username' value={form.username} onChange={handleChange} placeholder='enter username' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                        <div className="relative">
                            <input name='password' value={form.password} onChange={handleChange} placeholder='enter password' className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                            <span className='absolute right-[-2px] top-[7px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={20} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/vjgknpfx.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000">
                        </lord-icon>
                        Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager
