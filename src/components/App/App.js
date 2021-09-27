import MainPage from '../MainPage';
import Header from '../Header';
import Counter from '../Counter';
import ToDo from '../ToDo';
import Store from '../Store'
import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/counter' exact component={Counter}/>
        <Route path='/todo' exact component={ToDo}/>
        <Route path='/store' exact component={Store}/>
      </Switch>
    </div>
  );
}

export default App;
