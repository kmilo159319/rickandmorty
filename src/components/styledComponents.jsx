import React,{useContext} from 'react';
import styled, {css,}  from 'styled-components';
import e from '../img/e.png';
import tittlecharacters from '../img/Characters.png';
import portal from '../img/portal.png';
import tittlecharacters2 from '../img/tittlecharacters2.png';
import titulo from '../img/titulo.gif';


const Themes = {
   background:{
     darkGradier : `linear-gradient(to bottom, rgba(0, 13, 22, 0.055), #050a0fd5)`,
     lightGradier : `linear-gradient(to bottom, #64eee537, #050a0f3d)`},
   colors:{
      borderDarkBlue: `1px solid #04334e`,
      borderLigthBlue: `1px solid #255451`,
      ligthBlue: `#0c4a6e`,
      darkBlue: `rgba(28, 43, 60, 0.712)`,
      greenLight: `rgba(140, 240, 233, 0.571)`,
      greenDark: `hsl(176, 41%, 30%)`,
      white: `rgba(255, 255, 255, 0.514)`,
      white2: `rgba(255, 255, 255, 0.912)`

   }  
}


const basicwrapper = styled.div`

   position: relative;
   background: linear-gradient(to bottom, #64eee533, #050a0f6e);
   border: 1px solid #0c4a6e;
   border-radius: 16px;
   transition: .2s;
`;


const BigCard =  {

   PrincipalCard : styled.div`
   height: 26rem;
   border-radius: 16px;
   border: ${ props => props.mod ? css`${Themes.colors.borderDarkBlue}`:css`${Themes.colors.borderLigthBlue}`};
   background: ${props => props.mod ? css`${Themes.background.darkGradier}, url(${e});` 
                            : css`${Themes.background.lightGradier},url(${e});`};
   background-image: cover;
   background-size: contain;
   background-position: bottom;
   background-repeat: no-repeat;
   @media (max-width: 768px){
      height: 26rem;
      width: 125%;
   }
`,

   BasicWrapperCard : styled(basicwrapper)`
   height: 30rem;
   background: ${props => props.mod ? css`${Themes.background.darkGradier}`: css`linear-gradient(to bottom, #64eee537, #050a0f3d)`};
   border: ${props => props.mod ? css`${Themes.colors.borderDarkBlue}`:css`${Themes.colors.borderLigthBlue}`};
`,

    BasicImg : styled.div`
    height: 100%;
    border-radius:16px 16px 0 0 ;
    background-image: url(${portal});
    background-size:contain;
    background-position: start;
    background-repeat: no-repeat;

`,


    ImgTittle : styled.div`
    height: 6em;
    background-image: ${props => props.mod ? css`url(${tittlecharacters})`:css`url(${tittlecharacters2})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 2s;
    @media (max-width: 768px){
      background-size: 30vh;
   }
`,

   BigCardText : styled.div`
   font-size: 30px;
   font-family: roboto;
   color: #fff;
   text-transform: bold;
   text-align: left;
   @media (min-width: 768px){
      font-size: 2rem;
  }
   @media (max-width: 768px){
      font-size: 1.2rem;
      text-align: center;
   }
`,

   FlexCard : styled.div`
   @media (min-width: 768px){
      position: absolute;
      right: 0;
   }
`

}

const Caracters = {

   basicwrapper : styled(basicwrapper)`
   background: ${props => props.mod ? css`${Themes.background.darkGradier}`: css`linear-gradient(to bottom, #64eee537, #050a0f3d)`};
   border: ${props => props.mod ? css`${Themes.colors.borderDarkBlue}`:css`${Themes.colors.borderLigthBlue}`};
   `,

   btnCharacters : styled.div`
   display: inline-flex;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   position: relative;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
   outline: 0px;
   margin: 0px;
   cursor: pointer;
   user-select: none;
   vertical-align: middle;
   appearance: none;
   text-decoration: none;
   font-family: exo, -apple-system, Arial;
   text-transform: uppercase;
   background-color: rgba(15, 20, 26, 0.5);
   border: 1px solid rgb(12, 74, 110);
   border-radius: 16px;
   color: #4b8985;
   font-size: 14px;
   padding: 14px;
   height: 48px;
   min-width: 50px;
   box-shadow: rgb(0 0 0 / 2%) 0px 2px 0px;
   font-weight: 600;
   line-height: 1.5;
   transition: background-color 0s ease 0s, border-color 0s ease 0s, color 0s ease 0s, all 0.1s ease-in-out 0s;
   `,

   imgCharacters: styled.img`
   border-radius: 10px;
   `,

   scrollCaracters: styled.div`
   overflow-y: scroll;
   height: 25em;
   &::-webkit-scrollbar {
      background: ${props => props.mod ? css`rgba(27, 60, 87, 0.375)`: css`hsl(180, 40%, 19%)`};
       -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      border-radius: 16px;
      align-items: center; 
      z-index: 4;
      width: 8px; 
  }
   &::-webkit-scrollbar-thumb {
      background-color: ${props => props.mod ? css`#193751dd`: css`#64eee571`};
      border-radius: 20px;
  }
   `,

   smallcardText : styled.div`
   font-size: 20px;
   font-family: roboto;
   color: ${props => props.mod ? css`#1a86c5`: css`hsl(176, 61%, 60%)`};
   text-transform: capitalize;
   text-align: left;
   @media (max-width: 576px){
      font-size: 13px;
   }
   `,

   tittlesmallCardText : styled.div`
   font-size: 30px;
   font-family: roboto;
   color: #fff;
   text-transform:unset;
   text-align: left;
   @media (max-width: 576px){
      font-size: 17px;
   }
   `,

   flexcard2: styled.iframe`
   position: absolute !important;
   right: 0;
   padding: 0;
   border-radius: 16px;
      @media (max-width: 576px){
      position: relative;
   };
   @media (max-width: 768px){
      position: relative !important;
   }

   `
}

const HeadStyled = {
   mainHead : styled.div`
   height: 10rem;
   @media (max-width: 768px){
      height: 18rem;
    };
    @media (max-width: 576px){
      height: 10rem;
    };
   `,

   tituloCard : styled.div`
    background-image: url(${titulo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    @media (max-width: 576px){
      background-position: top;
    };
    @media (max-width: 768px){
      background-position: top;
      background-size: 80%;
    }
   `,
 
   basicwrapper : styled(basicwrapper)`
      background: ${props => props.mod ? css`${Themes.background.darkGradier};` 
                            : css`${Themes.background.lightGradier}`};
    &:hover{
      background-color: ${props => props.mod ? css`${Themes.colors.ligthBlue}`: css`hsl(176, 41%, 30%)`};
      //background-color: hsl(176, 41%, 30%);
      cursor: pointer;
    };
    &:hover > i{
      color: ${props => props.mod ? css`${Themes.colors.white2}`: css`rgba(140, 240, 233, 0.87)`};
      cursor: pointer;
    }
   `,
   
   icon : styled.i`
    color: ${props => props.mod ? css`${Themes.colors.white}`:css`rgba(140, 240, 233, 0.571)`};
    font-size: 20px;
    padding: .9rem 0 .9rem 0;
    @media (max-width: 576px){
      font-size: 15px;
      padding: .9rem 0 .9rem 0;
    };
    @media (max-width: 768px){
      font-size: 15px;
      padding: .9rem 0 .9rem 0;
    };
    @media (max-width: 376px){
      font-size: 15px;
      padding: .9rem 5rem .9rem 0;
    }
   `,
}

const menuStyled = {
  menu : styled.div`
   height: 6rem;
  `,

  navNavbar : styled.div`
    position: fixed;
    background: ${props => props.mod ? css`rgba(15,20,26,.7)` : css`hsla(180, 40%, 19%, 0.504)`};
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 16px;
    align-items: center;   
    z-index: 4;
    display: flex;
    width: 65px;
    height: calc(70% - 20px);
    flex-direction: row;
    justify-content: center;
    & > i{
      font-size: 25px;
    }
    @media (max-width: 576px){
      height: 60px;
        width: calc(85% - 20px);
    };
    @media (max-width: 768px){
      height: 60px;
        width: calc(95% - 20px);
    }
   `,

  shineHighlight : styled.i`
    color: ${props => props.mod ? Themes.colors.white : Themes.colors.greenLight};
    transition: .2s;
    &:hover{
      color: ${props => props.mod ? Themes.colors.ligthBlue : Themes.colors.white};
      filter: ${props => props.mod ? css`drop-shadow(0 0 .75rem rgba(56, 191, 248, 0.188))` : css`drop-shadow(0 0 .75rem rgba(112, 248, 239, 0.314))`};
      cursor: pointer;
    }
  `,

   shineHighlight2 : styled.i`
     color: ${props => props.mod ? Themes.colors.ligthBlue : Themes.colors.white2};
     filter: ${props => props.mod ? css`drop-shadow(0 0 .75rem rgba(56, 191, 248, 0.188))` : css`drop-shadow(0 0 .75rem rgba(112, 248, 239, 0.314))`};
     transition: .3s;
     &:hover{
      cursor: pointer;
     }
   `  
}

const BodyStyled = {
   bodyTemplateImg: styled.div`
    overflow-x: hidden;
    width: 100%;
    & > video{
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 101%;
      height: 100vh;
      object-fit: cover;
    }
   `,
    BodyTemplate: styled.div`
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: ${props => props.mod ? css`linear-gradient(rgb(0, 13, 22) 0%, rgb(0, 13, 22) 35%, rgb(0, 0, 0) 100%);` : css`linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.107) 35%, rgba(0, 0, 0, 0.452) 100%)`};
      opacity: 70%;
    `
}

const ButtonDarkStyled = {
    
   Label : styled.label`
      width: 90px;
	   height: 40px;
	   position: relative;
	   display: block;
      background: ${props => props.mod? css`${Themes.colors.darkBlue}` : css`hsla(176.1904761904762, 41.17647058823529%, 30%, 0.471)`};
       -webkit-backdrop-filter: blur(5px);
       backdrop-filter: blur(5px);
	   border-radius: 200px;
	   box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
	   	inset 0px -5px 15px ${props => props.mod ? css`${Themes.colors.ligthBlue}`: css`hsla(180, 40%, 19%, 0.504)`} ;
	   cursor: pointer;
	   transition: 0.3s;
	   &:after {
	   	  content: "";
	   	  width: 35px;
	   	  height: 35px;
	   	  position: absolute;
	   	  top: 2px;
	   	  left: 2px;
	   	  background: linear-gradient(180deg, #ffcc89, #d8860b);
	   	  border-radius: 180px;
	   	  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	   	  transition: 0.3s;}
   `,

    Svg : styled.svg`
      position: absolute;
	   width: 25px;
	   top: 7px;
	   z-index: 100;
	   &.sun {
	   	left: 6px;
	   	fill: #fff;
	   	transition: 0.3s;
	   }
	   &.moon {
	   	left: 56px;
	   	fill: ${Themes.colors.white};
	   	transition: 0.3s;
	   }
    `,

    Input : styled.input`
      width: 0;
	   height: 0;
	   visibility: hidden;
	   &:checked + label {
	   	&:after {
	   		left: 86px;
	   		transform: translateX(-100%);
	   		background: linear-gradient(180deg,rgba(56, 191, 248, 0.188), ${Themes.colors.ligthBlue});
	   	}
	   	svg {
	   		&.sun {
	   			fill: #7e7e7e;
	   		}
	   		&.moon {
	   			fill: #fff;
	   		}
	   	}
	   	+ .background {
	   		background: #242424;
	   	}
	   }
	   &:active:after {
	   	width: 260px;
	   }
    `

}

export {BigCard, Caracters, HeadStyled, menuStyled, BodyStyled, ButtonDarkStyled};
