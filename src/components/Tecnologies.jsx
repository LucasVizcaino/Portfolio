import React from 'react'
import { RiEraserLine } from 'react-icons/ri'
import { SiPostgresql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Tecnologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className="my-20 text-center text-4xl">Tecnologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiEraserLine className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostgresql className='text-7xl text-cyan-400'/>
            </div>
          
        </div>
    </div>
  )
}

export default Tecnologies