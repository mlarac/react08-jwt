
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import Home from './pages/Home';
import { Footer } from "./components/Footer";
import Header from "./components/Header";
//import { Login } from "./components/Login";
//import { Register } from "./components/Register";
//import Cart from './components/Cart'
import Pizza from "./components/Pizza";


function App() {
  

  return (
    <>
      <NavigationBar />  
      <Header 
        text="Bienvenido a Pizzería Mamma Mia!"
      />
      {/* <Home />*/}
      {/* <Register /> */}
      {/* <Login /> */}
      {/*<Cart />*/}
      <Pizza/>
      <Footer/>
    
    </>
  );
}

export default App;
