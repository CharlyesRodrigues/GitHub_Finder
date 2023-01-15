

import Home from './routes/Home'
import Search from './components/Search'

import classes  from  './App.module.css' // para funcionar o css  nesse formato, temos que colocar (module) entre o  App.css

function App() {
 

  return (
    <div className={classes.app}> 
      
<h1>Github_finder</h1>
<Home />




 
    </div>
  )
}

export default App
