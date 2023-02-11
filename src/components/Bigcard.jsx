import React, {useContext, useMemo, useState,} from 'react'
import {BigCard} from './styledComponents';
import { ModContext } from './Body';
import { FavoritesContext } from './Body';

const Bigcard = () => {

  const modTheme = useContext(ModContext);
  const favorites = useContext(FavoritesContext);


  return (
    <div className="col-12 col-sm-12 col-md-8 col-lg-9 row m-md-5 m-4">
        <div className='col-12  d-flex justify-content-start'>
          <BigCard.PrincipalCard mod={modTheme}  className='d-flex col-12 row align-items-start justify-content-start'>
            <div className="col-12">
              <BigCard.ImgTittle mod={modTheme} className='col-12 col-md-4 col-lg-6 mt-3 mt-lg-4' />
              <BigCard.BigCardText mod={modTheme} className='col-12 col-sm-6 mt-3 ms-md-4'>
                 description of the characters of rick and morty and their characteristics
              </BigCard.BigCardText>  
            </div>
          </BigCard.PrincipalCard>
        </div>
        <BigCard.FlexCard  className=' col-12 col-md-3 col-lg-3 row ms-md-4 me-lg-4 m-3 m-sm-5 mt-lg-1 mt-md-0 me-4 me-md-2'>
          <div className='col-12 ms-lg-4 ms-md-2 mb-3' mod={modTheme} >
          <BigCard.BasicImg className='col-12 mt-lg-2' />
          <BigCard.BigCardText mod={modTheme} className='col-12 col-sm-6 row mt-3 ms-md-4 ms-lg-5 d-flex justify-content-center'>
                 Favorites
            </BigCard.BigCardText>
          </div>
          <BigCard.scrollBigCard mod={modTheme}>
          {!favorites ? '' : favorites.add.map(character => (
          <BigCard.BasicWrapperCard mod={modTheme} key={character.id} className='row col-11 col-md-10 col-lg-11 ms-3 me-sm-3 mb-3'>
          <div className="overflow-hidden py-4 row d-flex justify-content-center justify-content-md-start">
           <div className='col-12 col-sm-8 col-md-8 col-lg-9 row'>
           <BigCard.tittlesmallCardText  className="col-12">{character.name}</BigCard.tittlesmallCardText>
           <BigCard.smallcardText mod={modTheme} className="col-6 col-md-12">{character.species}</BigCard.smallcardText>
           <BigCard.smallcardText mod={modTheme} className="col-6 col-md-12">{character.gender}</BigCard.smallcardText>
            </div>
              <div className='col-9 col-sm-4 col-md-4 col-lg-3 d-flex align-items-center justify-content-end me-3 me-sm-0 me-md-0 justify-content-md-end ms-4'>
                 <BigCard.imgCharacters className='col-12 ms-4' src={character.image}/>
              </div>
          </div>
      </BigCard.BasicWrapperCard> 
             ))}
           </BigCard.scrollBigCard>  
        </BigCard.FlexCard>
    </div>
  )
}

export default Bigcard