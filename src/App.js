import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';

function App() {
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <hr />
      <ItemListContainer />
      <ItemCount />
    </div>
    
  );
}

export default App;

