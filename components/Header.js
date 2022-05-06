import { useState } from 'react'


const Header = ({ likedAlbums }) => {
  const [counter, setCounter] = useState()

  return (
    <header className='bg-white shadow-xl py-4 px-16 flex justify-between items-end'>
        <h1 className='text-4xl font-semibold tracking-widest underline decoration-4'>
        VINNYL
        </h1>
        <div className='relative'>
          <p className="text-2xl py-1 px-4 border-4 border-black font-semibold cursor-pointer hover">
            LIKES
          </p>
          <span className='text-white bg-red-600 p-1 px-2 rounded-full absolute -top-2 -right-3 text-xs animate-pulse'>
            {likedAlbums}
          </span>
        </div>
    </header>
  )
}

export default Header