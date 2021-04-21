import 'fontsource-roboto';
import PageContextProvider from './PageContextProvider'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'

function App() {
  return (
    <PageContextProvider>
      <Router history={createBrowserHistory()}>
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
      </Router>
    </PageContextProvider>
  );
}

export default App;
