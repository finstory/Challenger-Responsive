import React from 'react'

export const Header = () => {
  return (
    <nav className="anim-opacity">
    <div className="header_box">
      <div className="img-wrap"
      onClick={()=>{
        window.open('https://www.ingertec.com.ar/', '_blank')
        }}
      >
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1670066830/Challenger-IngerTec/icons/logo_d6onfc.png"
          alt="logo"
        />
      </div>
    </div>
    <div className="header_box">
      <p className="anim-text-brightness">GAME OF THE YEAR</p>
    </div>
    <div className="header_box">
      <div className="img-wrap"
        onClick={()=>{
          window.open('https://github.com/finstory/challenger', '_blank')
          }}
      >
        <img
          src="https://res.cloudinary.com/dz9smi3nc/image/upload/v1669767946/Challenger-IngerTec/icons/github_csdaxu.png"
          alt="logo-github"
        />
      </div>
    </div>
  </nav>
  )
}
