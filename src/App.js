import 'fontsource-roboto';
import { Route, Switch } from 'react-router-dom'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'

function App() {
  return (
    <Switch>
      <>
        <div className="App">
          <Route
            exact path='/'
            render={(props) => <Pokedex {...props} />}
          />

          <Route
            exact path='/:pokemonId'
            render={(props) => <Pokemon {...props} />}
          />
        </div>
      </>
    </Switch>
  );
}

export default App;
