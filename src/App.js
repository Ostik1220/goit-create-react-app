import { Recepies } from './components/recepies';
import './App.css';
export const data = require('./recepies.json')
function App() {
  return (
    <div className="App">
      {
      console.log(data)
}
  <Recepies data={data}/>
    </div>
  );
}

export default App;
