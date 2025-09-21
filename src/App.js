import { Recepies } from './components/recepies';
import './App.css';
export const data = require('./recepies.json')
function App() {
  return (
    <div className="App">
      {
      console.log(data)
}
<ul>
  <Recepies data={data}/>
</ul>
    </div>
  );
}

export default App;
