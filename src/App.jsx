import * as C from './App.styles';
import './index.css';
import {
  useLocation,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import DetailsCaracther from './components/DetailsCharacter';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import NotFound from './pages/NotFound/NotFound';

function App() {

  const location = useLocation();
  return (
    <C.Container>
        <Header />
       { location.pathname !== '/Details'? <SearchArea /> : <DetailsCaracther /> }  
          <Routes> 
      <Route path="*" element={ <NotFound /> } />
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/Home" element={ <Home /> } />
      <Route exact path="/Details" element={ <DetailsCaracther />} />
    </Routes>   
    </C.Container>
  );
}

export default App;
