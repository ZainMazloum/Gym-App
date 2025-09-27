import React from 'react'

const Button = (props) => {
    const {text , func} = props
  return (
        <button onClick={func} className='px-8 py-4 mx-auto rounded-md cursor-pointer border-blue-400 border-solid border-[2px] blueShadow'><p>{text}</p></button>

  )
}

export default Button