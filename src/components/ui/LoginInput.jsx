import React from 'react'

export default function LoginInput({ type, name, onChange, placeholder, id }) {
    return (
        <input className='text-[#01384D] p-[16px] my-3 leading-[17px] text-sm shadow-lg border border-slate-400 focus:border-[#01384D] rounded  w-full outline-none' type={type || 'text'} name={name || ''} placeholder={placeholder || ''} id={id || ''}  />
    )
}