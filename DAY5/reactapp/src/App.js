import './App.css';
import ClassLifecycleExample from './component/ClassLifeCycle';
import FunctionalLifecycleExample from './component/FunLifeCycle';
import Lifecycle from './component/Lifecycle';

function App() {
  return (
    <div className="App">
      <Lifecycle/>
      <FunctionalLifecycleExample/>
      <ClassLifecycleExample/>
    </div>
  );
}

export default App;