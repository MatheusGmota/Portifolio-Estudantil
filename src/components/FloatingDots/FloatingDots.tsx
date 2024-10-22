import React from 'react'

export default function FloatingDots() {
    return (
    <div className='absolute flex items-center justify-center w-full h-full'>
        <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 animate-bounce [animation-delay:.7s]"></div>
        </div>
    </div>
  )
}
