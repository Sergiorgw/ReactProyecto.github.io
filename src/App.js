// import logo from './logo.svg';
import './App.css';

function App() {
  let imagen = "craneo.jpg"
  let nombre = "Cráneo"
  let descripcion = "Cráneo humano hecho en impresión 3D."
  return (
    <div className='container'>
      <div className='row'>
        <div className='col md-4 offset-md-2'>
          <img src={imagen} alt= "cráneo" className='img-fluid'/>
        </div>
        <div className='col-md-4'>
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
