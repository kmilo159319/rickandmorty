import { render } from '@testing-library/react'
import React, {useContext} from 'react'
import {BigCard} from './styledComponents';
import { ModContext } from './Body';

const Bigcard = (props) => {
   
  const changeMod = useContext(ModContext);

  return (
    <div className="col-12 col-sm-12 col-md-10 row m-md-5 m-4">
        <div className='col-12  d-flex justify-content-start'>
          <BigCard.PrincipalCard mod={changeMod} className='d-flex col-12 row align-items-start justify-content-start'>
            <div className="col-12">
              <BigCard.ImgTittle mod={changeMod}  className='col-12 col-md-4 mt-3' />
              <BigCard.BigCardText className='col-12 col-sm-6 mt-3 ms-md-4'>
                 description of the characters of rick and morty and their characteristics
              </BigCard.BigCardText>  
            </div>
          </BigCard.PrincipalCard>
        </div>
        <BigCard.FlexCard className=' col-12 col-md-2 col-lg-2 ms-md-4 m-3 m-sm-5 mt-lg-1 me-4'>
          <BigCard.BasicWrapperCard mod={changeMod}>
             <BigCard.BasicImg className='col-12 mt-lg-2'></BigCard.BasicImg>
          </BigCard.BasicWrapperCard>
        </BigCard.FlexCard>
    </div>
  )
}

export default Bigcard