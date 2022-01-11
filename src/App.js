import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';

function App() {

  const linksNavBar= ['Inicio', 'Productos', 'Nosotros', 'Contacto'];

  return (
    <NavBar linksNavBar={linksNavBar} />
  );
}


export default App;
