import React from 'react'

function IconWrapper(props) {
  return (
    <div className='w-[65px] h-[65px] rounded-full bg-grayLight flex justify-center items-center'>{props.children}</div>
  )
}

export default IconWrapper