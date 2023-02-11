import React,{useState,useEffect, useContext, useReducer, useMemo, useRef, useCallback} from 'react'
import { Caracters } from './styledComponents';
import { ModContext } from './Body';

const initialState = {
  add:[]
}

export default function Characters({myFavorites}) {

 const addFavorites = (state, action) =>{
      switch (action.type) {
        case 'ADD_FAVORITES':
          return {...state, add: [...state.add, action.payload]}
        default:
          return state;
      }
 }
 const [characters, setCharacters] = useState([]);
 const modTheme = useContext(ModContext);
 const [favoritesCharacters, dispatch] = useReducer(addFavorites, initialState);
       myFavorites(favoritesCharacters);
 const [search, setsearch] = useState('');
 const searchInput = useRef(null);


 useEffect(() => {
   fetch('https://rickandmortyapi.com/api/character/')
   .then(Response=> Response.json())
   .then(data => setCharacters(data.results));
 }, []);

 const handleSearch = useCallback(() => {
   setsearch(searchInput.current.value)
 }, [])

 const filteredCharacters = useMemo(() => 
    characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
 )
 
  return (
    <div className=" col-12 col-md-10 col-lg-10 row mb-5 mt-5 justify-content-end justify-content-md-start">
      <Caracters.tittlesmallCardText className='mx-4 my-0 my-md-3 col-md-2 col-lg-1 col-8'>Search</Caracters.tittlesmallCardText>
      <Caracters.inputCharacters mod={modTheme} type="text" className='col-md-5 col-8 mx-3 my-md-3 my-3 mt-md-3 mt-1' ref={searchInput} onChange={handleSearch} />
      <Caracters.scrollCaracters mod={modTheme} className='row col-12 col-md-8 col-lg-8 justify-content-end'>
      {filteredCharacters.map(character =>(
          <Caracters.basicwrapper mod={modTheme} key={character.id} className='row col-10 col-md-10 col-lg-11 ms-3 me-sm-3 mb-3'>
             <div className="overflow-hidden py-4 row d-flex justify-content-center justify-content-md-start ms-2 ms-md-0">
              <div className='col-12 col-sm-8 col-md-8 col-lg-8 row'>
              <Caracters.tittlesmallCardText  className="col-12">{character.name}</Caracters.tittlesmallCardText>
              <Caracters.smallcardText mod={modTheme} className="col-6 col-md-12">{character.species}</Caracters.smallcardText>
              <Caracters.smallcardText mod={modTheme} className="col-6 col-md-12">{character.gender}</Caracters.smallcardText>
              <Caracters.btnCharacters mod={modTheme} className='col-9 m-2'  onClick={()=>dispatch({type: 'ADD_FAVORITES', payload:character })}>add to favorites</Caracters.btnCharacters>
               </div>
                 <div className='col-9 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-end me-5 me-sm-0 me-md-0 justify-content-md-end ms-4'>
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




