import React, {useState, createContext} from 'react'
import Characters from './Characters';
import Bigcard from './Bigcard';
import Head from './Head';
import videofondo from '../img/fondo.mp4';
import videofondo2 from '../img/RIckepic.mp4';
import Menu from '../components/Menu';
import { BodyStyled } from './styledComponents';


export const ModContext = createContext();
export const FavoritesContext = createContext();


const Body = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [MyFavorites, setMyFavorites] = useState();

  const favorites = (myFavorites) => {
    setMyFavorites(myFavorites);
  }

  

  const handleClick = () => {
    
    setDarkMode(!darkMode);

  }


    return (
    <ModContext.Provider value={darkMode}>
    <BodyStyled.bodyTemplateImg>
      <video src={darkMode ? videofondo2 : videofondo} autoPlay loop muted />
      <BodyStyled.BodyTemplate mod={darkMode}></BodyStyled.BodyTemplate>
        <div className='row '>
          <Head handleClick={handleClick} />
          <Menu />
            <div className="col-10 row">
              <FavoritesContext.Provider value={MyFavorites} >
              <Bigcard/>
              </FavoritesContext.Provider>
              <Characters myFavorites={favorites} />
            </div>
        </div>
    </BodyStyled.bodyTemplateImg>
    </ModContext.Provider>
    );
}

export default Body


  
