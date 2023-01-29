import React from 'react'
import { HeadStyled } from './styledComponents'
import { ButtonDark } from './ButtonDark';



const Head = (props) => {

  return (
    <HeadStyled.mainHead className="header row justify-content-end">
        <div className='col-8 col-md-7 col-lg-5 row justify-content-end'> 
        <HeadStyled.tituloCard className='ms-5'/>
        </div>
        <div className='col-4 col-md-2 col-lg-4 mx-2'>
         <ButtonDark darkMode={props.handleClick}/>
        </div>
        <div className='col-6 col-md-3 d-flex justify-content-end align-items-start row'>
               <HeadStyled.basicwrapper className='col-3 col-md-3 col-lg-2 m-2'>
                  <HeadStyled.icon   className="fa-solid fa-bell" />
               </HeadStyled.basicwrapper>
               <HeadStyled.basicwrapper  className='col-3 col-md-3 col-lg-2 m-2'>
                  <HeadStyled.icon   className="fa-solid fa-envelope" />
               </HeadStyled.basicwrapper >
        </div>
    </HeadStyled.mainHead>
  )
}

export default Head;