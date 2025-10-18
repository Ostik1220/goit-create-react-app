import { Recepies } from './components/recepies';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
export const data = require('./recepies.json')


function App() {
  return (
    <div className="App">
      {
      console.log(data)
}
  <Recepies data={data}/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
