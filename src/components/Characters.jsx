import React,{useState,useEffect, useContext} from 'react'
import { Caracters } from './styledComponents';
import { ModContext } from './Body';

export default function Characters() {

 const [characters, setCharacters] = useState([]);
 const modTheme = useContext(ModContext);

 useEffect(() => {
   fetch('https://rickandmortyapi.com/api/character/')
   .then(Response=> Response.json())
   .then(data => setCharacters(data.results));
 }, []);
 
  return (
    <div className=" col-12 col-md-10 col-lg-10 row mb-5 mt-5 justify-content-end justify-content-md-start">
      <Caracters.scrollCaracters mod={modTheme} className='row col-12 col-md-8 col-lg-8 justify-content-end'>
      {characters.map(character =>(
          <Caracters.basicwrapper mod={modTheme} key={character.id} className='row col-11 col-md-10 col-lg-11 ms-3 me-sm-3 mb-3'>
             <div className="overflow-hidden py-4 row d-flex justify-content-center justify-content-md-start">
              <div className='col-12 col-sm-8 col-md-8 col-lg-8 row'>
              <Caracters.tittlesmallCardText  className="col-12">{character.name}</Caracters.tittlesmallCardText>
              <Caracters.smallcardText mod={modTheme} className="col-6 col-md-12">{character.species}</Caracters.smallcardText>
              <Caracters.smallcardText mod={modTheme} className="col-6 col-md-12">{character.gender}</Caracters.smallcardText>
               </div>
                 <div className='col-9 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-end justify-content-md-end'>
                    <Caracters.imgCharacters className='col-12 ms-4' src={character.image}/>
                 </div>
             </div>
         </Caracters.basicwrapper> 
      ))}
      </Caracters.scrollCaracters>
      <Caracters.flexcard2 className='col-10 col-md-5 col-lg-5 basic-wrapper me-md-5 mt-5 mt-md-0' 
                           height="250rem" src="https://www.youtube.com/embed/E6TUs69Cw94" title="YouTube video player" 
                           frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Caracters.flexcard2>
    </div>
  )
}




