import './App.css';
import { GlobalStyles } from './GlobalStyles';
import data from './recepies.json';
import { Recepies } from './components/Recepie.jsx';


function App() {
  return (
    <div className="App">
  <Recepies data={data}/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
