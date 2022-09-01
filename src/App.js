import './App.css';
import NavBar from './assets/navBar/NavBar';
import ItemListContainer from './assets/itemList/itemListContainer';


function App() {

  
  const productos = ["maceta","escultura","animal"];
  
  return (
    <div className='container-fluid'>
      <NavBar />
      <hr />
      <ItemListContainer producto ={productos} titulo="mi lista"/>
    </div>
  );
}

export default App;

