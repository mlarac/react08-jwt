
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import Home from './pages/Home';
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  

  return (
    <>
      <NavigationBar />  
      <Header 
        text="Bienvenido a Pizzería Mamma Mia!"
      />
      <Home />
      <Footer/>
    
    </>
  );
}

export default App;
