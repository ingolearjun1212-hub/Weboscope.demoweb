import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['About', '/About'],
  ['menu', '/menu'],
  ['Servises', '/Servises'],
  ['Gallery', '/Gallery'],
  ['Contact', '/Contact'],
]

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-30'>
      <nav className='hidden rounded-full bg-white/50 p-2  text-white shadow-md backdrop-blur-lg lg:block md:h-20 '>
        <div className='flex items-center gap-2 h-full rounded-full bg-black/50 p-2'>
          {links.map(([label, path]) => (
            <Link key={path} className='rounded-2xl p-2 transition hover:bg-black hover:font-bold hover:text-amber-500' to={path}>
              {label}
            </Link>
          ))}
        </div>
      </nav>

      <button
        type='button'
        className='flex-none rounded-lg bg-black/70 px-2 py-1 text-2xl text-white lg:hidden'
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? '\u00D7' : '\u2630'}
      </button>

      {open && (
        <nav className='absolute right-0 top-full mt-10 min-w-60 flex duration-1000 transition flex-col rounded-lg bg-black/70 p-2 text-white hover:scale-105 shadow-lg lg:hidden'>
          {links.map(([label, path]) => (
            <Link key={path} className='rounded px-3 py-2 hover:bg-white/30 hover:font-serif hover:px-5 hover:scale-110 transition duration-1000 ' to={path} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}

export default Menu
