import React from 'react'
import Button from '../../Button'

const Hero = () => {
  return (
    <div className='p-4 min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
<div className="flex flex-col gap-4">
            <p>It's time to get</p>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>SUPER <span className='text-blue-400'>JAGGED</span></h1>
</div>
        <p className='text-sm md:text-base font-light'>I accept to be a <span className='uppercase text-blue-400 font-medium'>slave</span> to the Gym</p>
  <Button func = {() => {window.location.href = '#generate'}} text = {"Accept & Begin"} />
    </div>
  )
}

export default Hero