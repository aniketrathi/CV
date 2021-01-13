import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';
import Main from "./MainComponent";
function App() {
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/"><h1>CV-Maker</h1></NavbarBrand>
          </div>
        </Navbar>
        <Main />
    </div>
  );
}

export default App;
