
import './App.css';
import NoteBox from './components/NoteBox/NoteBox';

function App(props) {


  return (
    <div className="App">
      <NoteBox store={props.store} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
