import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="container mx-auto max-w-4xl px-40 py-16">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>
                    Pass
                    <span className='text-green-500'>Vault/ &gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>A Secure Password Mangement Tool</p>
                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                    <div className="flex w-full justify-between gap-8">
                        <input className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                        <input className='bg-white rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                    </div>

                    <button className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-4 py-2 w-fit'>
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
