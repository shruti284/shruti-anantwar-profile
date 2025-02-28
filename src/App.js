import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router";

function App() {
  return (
    <div className="app">
      <div className="App">
       <Header />
       <Outlet />
       <Footer />
     </div>
    </div>
  );
}

export default App;
