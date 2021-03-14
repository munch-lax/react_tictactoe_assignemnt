import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home';
import Main from './components/Main';
import Side from './components/Side'
import Game2 from './components/Game2';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Route  path='/' exact component={Home}/>
    <Route   path='/side'  exact component={Side}/>
    <Route   path='/main/:id' exact component={Main}/>
    <Route   path='/game2' exact component={Game2}/>

      
    </BrowserRouter>
  );
}

export default App;
