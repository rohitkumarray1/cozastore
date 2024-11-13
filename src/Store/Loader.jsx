import React from 'react'

const Loader = () => {
  return (
    <>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

        <div className="w-10 h-10 border-4 border-[blue] rounded-full animate-grow shadow-[0_5px_10px_rgba(91,91,91,0.3)]" role="status">
          <span className="sr-only">Loading...</span>
        </div>

      </div>

    </>
  )
}

export default Loader