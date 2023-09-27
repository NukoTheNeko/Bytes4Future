import './App.css';
//import GeneratorMain from './components/ex2/GeneratorMain.jsx'
//import NameGeneratorMain from './components/ex3/NameGeneratorMain.jsx'
//import TaskList from './components/ex1/TaskList';
//const array = [{finished : true, text : "Eat"},{finished : false, text : "Sleep"},{finished : true, text : "Code"}]
//import SudokuMain from './components/sudoku/SudokuMain';
//import PiskelMain from './components/piskel/PiskelMain';
import JokerMain from './components/joker/JokerMain'
function App() {
  return (
    <div className="App">
      {/*<GeneratorMain />*/}
      {/*<NameGeneratorMain />*/}
      {/*<TaskList tasks = { array }/>*/}
      {/*<SudokuMain />*/}
      {/*<PiskelMain />*/}
      <JokerMain />
    </div>
  );
}

export default App;
