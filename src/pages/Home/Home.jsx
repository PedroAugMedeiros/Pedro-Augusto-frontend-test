import * as C from "./styles";
import { RickMortyContext } from '../../context/RickMortyContext';
import { filters } from "../../helpers/filters";
import { useContext } from 'react';
import { useApiInterface } from '../../hooks/useApiInterface';
import { Navigate } from 'react-router-dom';


const Home = () => {

  const { setCharacterSelected, searchInput, typeFilter, showDetails, setShowDetails  } = useContext(RickMortyContext);

  const { charactersList , getAll } = useApiInterface()

  getAll();

  const HandleClick = (itemId) => {
     setCharacterSelected(itemId);
     setShowDetails(true)
  }


  const FiltredByName = () => {
    if( typeFilter === filters.FiltredByName) {
      return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).filter((item) => item.name.includes(searchInput)).map((item, index) => {
        if(index < 20) {
          return  (
            <C.Home>
            <div className='character-card'>
            <img src={ item.image } alt={ item.name } ></img>
            <C.Button onClick={ () => HandleClick(item.id) }> { item.name } </C.Button>
            { item.status !== 'Alive'?  <p className='characterStatusColorAlive'>{ item.status }</p> : <p className='characterStatusColorDead'>{ item.status }</p> }
             </div>
             </C.Home>
    )
  } else {
    return(<Navigate to='/NotFound'/>)
    
  }
  
    })
    }
  }

  const FiltredBySpecie = () => {
    if( typeFilter === filters.FiltredBySpecie) {
      return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).filter((item) => item.species.includes(searchInput)).map((item, index) => {
        if(index < 20) {
          return  (
          <C.Home>
            <div className='character-card'>
            <img src={ item.image } alt={ item.name } ></img>
            <C.Button onClick={ () => HandleClick(item.id) }> { item.name } </C.Button>
            { item.status !== 'Alive'?  <p className='characterStatusColorAlive'>{ item.status }</p> : <p className='characterStatusColorDead'>{ item.status }</p> }
            </div>
          </C.Home>
    )
  } else {
    return(<Navigate to='/NotFound'/>)
    
  }
  
    })
    }
  }

  const FiltredByStatus = () => {
    if( typeFilter === filters.FiltredByStatus) {
      return charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).filter((item) => item.status.includes(searchInput)).map((item, index) => {
        if(index < 20) {
          return  (
            <C.Home>
            <div className='character-card'>
            <img src={ item.image } alt={ item.name } ></img>
            <C.Button onClick={ () => HandleClick(item.id) }> { item.name } </C.Button>
            { item.status !== 'Alive'?  <p className='characterStatusColorAlive'>{ item.status }</p> : <p className='characterStatusColorDead'>{ item.status }</p> }
            </div>
            </C.Home>
    )
  } else {
    return(<Navigate to='/NotFound'/>)
    
  }
  
    })
    }
  }
  

    if(showDetails === true) {
    return (
        <Navigate to="/Details"></Navigate>
    )
  }

  if( typeFilter === filters.FiltredByName){
    return ( <C.HomeContainer >
    {FiltredByName()}
    </C.HomeContainer >
    )
  }

  if( typeFilter === filters.FiltredBySpecie){
    return ( <C.HomeContainer>
    {FiltredBySpecie()}
    </C.HomeContainer>
    )
  }
  
  if( typeFilter === filters.FiltredByStatus){
    return ( <C.HomeContainer>
    {FiltredByStatus()}
    </C.HomeContainer>
    )
  }
  
  return (<C.HomeContainer> {charactersList.sort((a, b) => (a.id < b.id) ? -1 : 1).map((item, index) => {

      if(index < 20) {
        
        return  (
         <C.Home>
         <div className='character-card'>
        <img src={ item.image } alt={ item.name } ></img>
        <div className='textCharacterCard'>
        <C.Button onClick={ () => HandleClick(item.id) }> { item.name } </C.Button>
        { item.status !== 'Alive'?  <p className='characterStatusColorAlive'>{ item.status }</p> : <p className='characterStatusColorDead'>{ item.status }</p> }
        </div>
         </div>
         </C.Home>
  )
} else {
  return(<Navigate to='/NotFound'/>)
  
}

  })}</C.HomeContainer>)
}

export default Home;
