import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';


function App() {
  return (
    <div className="App">
      <Header/>
        <Body/>
      <Footer/>
    </div>
  );
}

export default App;
