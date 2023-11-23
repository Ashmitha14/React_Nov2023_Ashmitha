import './App.css';
import Person1 from './component/Person1';
import Person2 from './component/Person2';
import PureComponent from './component/PureComponent';

function App() {
  return (
    <div className="App">
        <Person1/>
        <Person2/>
        <PureComponent/>
    </div>
  );
}

export default App;
