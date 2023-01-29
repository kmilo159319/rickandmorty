import React, {useContext} from 'react'
import { menuStyled } from './styledComponents'
import { ModContext } from './Body';

const Menu = () => {

  const changeMod = useContext(ModContext);


  return (
    <menuStyled.menu className="col-3 col-md-1 col-lg-1">
          <menuStyled.navNavbar mod={changeMod} className='nav-navbar ms-3 ms-sm-4  d-flex row align-items-md-start align-items-center justify-content-sm-center'>
          <menuStyled.shineHighlight2 mod={changeMod} className="fa-sharp fa-solid fa-house col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1 mt-md-5"/>
          <menuStyled.shineHighlight mod={changeMod} className="fa-brands fa-youtube col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          <menuStyled.shineHighlight mod={changeMod} className="fas fa-robot col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          <menuStyled.shineHighlight mod={changeMod} className="fas fa-archive col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          <menuStyled.shineHighlight mod={changeMod} className="fab fa-github col-1 col-sm-1 col-md-12 px-4 px-sm-5 px-md-1"/>
          </menuStyled.navNavbar>
    </menuStyled.menu>
  )
}

export default Menu
