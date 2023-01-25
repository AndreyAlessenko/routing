import './App.css';
import DataTable from './components/DataTable/DataTable.jsx'
import Map from './components/Map/Map.jsx'
import {Provider} from 'react-redux'
import {store} from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DataTable/>
        <Map/>
      </div>
    </Provider>
  );
}

export default App;
