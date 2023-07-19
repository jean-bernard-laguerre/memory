import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Board from './components/Board/Board'
import Title from './components/Title/Title';

function App() {
  return (
    <div className="App">
        <Title text= "Memory"/>
        <Board/>
    </div>
  );
}

export default App;
