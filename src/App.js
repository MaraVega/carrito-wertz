// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer'
function App() {

  const linksNavBar= ['Inicio', 'Productos', 'Nosotros', 'Contacto'];

  return (
    <div>
      <NavBar linksNavBar={linksNavBar} />
      <ItemListContainer title="WE ARE WERTZ"/>
    </div>
  );
}


export default App;
