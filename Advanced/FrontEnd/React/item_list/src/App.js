import './App.css';
import TaskList from './components/ex1/TaskList';
//import GeneratorMain from './components/ex2/GeneratorMain.jsx'
//import NameGeneratorMain from './components/ex3/NameGeneratorMain.jsx'
const array = [{finished : true, text : "Eat"},{finished : false, text : "Sleep"},{finished : true, text : "Code"}]
function App() {
  return (
    <div className="App">
      {/*<GeneratorMain />*/}
      {/*<NameGeneratorMain />*/}
      <TaskList tasks = { array }/>
    </div>
  );
}

export default App;
