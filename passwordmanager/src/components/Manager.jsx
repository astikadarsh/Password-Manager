import React from 'react'

const Manager = () => {
    return (
<>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

        <div className="container mx-auto bg-slate-50 max-w-4xl px-40 py-16">
            <h1>PassVault</h1>
            <p>A Secure Password Mangement Tool</p>
        <div className="text-white flex flex-col p-4">
            <input className='bg-white rounded-full' type="text" />
            <div className="flex">
                <input className='bg-white' type="text" />
                <input className='bg-white' type="text" />
            </div>
        </div>
        </div>
</>
    )
}

export default Manager
