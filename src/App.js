import './App.css';
import NavBar from './components/Navbar';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Add from './components/Add';
import {movies} from './components/movies';
import {useState} from 'react';
import Details from './components/Details';
import {Switch, Route} from 'react-router-dom';


//console.log(movies);
function App() {
const [movieList,setmovieList]=useState(movies)
console.log(movieList);
  return (

    <div className="App">
      <NavBar/>
      <Filter/>
      <Add/> 
      <Switch>
        <Route exact path="/" >  <MovieList movieList={movieList} /> </Route>
        <Route  path="/Details/:id" render={ (props) => <Details{...props} list={movies}/>}  />

      </Switch>
      
     


      </div>
    
  );
}

export default App;
