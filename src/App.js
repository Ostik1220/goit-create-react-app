import { Rcepies } from './components/recepies';
import './App.css';
export const data = require('./recepies.json')
function App() {
  return (
    <div className="App">
      {
      console.log(Rcepies(data))
}
<ul>
  <Rcepies data={data}/>
</ul>
    </div>
  );
}

export default App;
