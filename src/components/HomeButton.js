import React from 'react'

function HomeButton({title,onClick}) {
  return (
    <div >
      <button className='home-button' onClick={onClick} >{title}</button>
    </div>
  )
}

export default HomeButton
