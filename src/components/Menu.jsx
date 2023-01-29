import React from 'react'
import { menuStyled } from './styledComponents'

const Menu = () => {

  return (
    <menuStyled.menu className="col-3 col-md-1 col-lg-1">
          <menuStyled.navNavbar  className='nav-navbar ms-3 ms-sm-4  d-flex row align-items-md-start align-items-center justify-content-sm-center'>
          <menuStyled.shineHighlight2 className="fa-sharp fa-solid fa-house col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1 mt-md-5"/>
          <menuStyled.shineHighlight  className="fa-brands fa-youtube col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          <menuStyled.shineHighlight  className="fas fa-robot col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          <menuStyled.shineHighlight  className="fas fa-archive col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          <menuStyled.shineHighlight  className="fab fa-github col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          </menuStyled.navNavbar>
    </menuStyled.menu>
  )
}

export default Menu
