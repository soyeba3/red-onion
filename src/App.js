import './App.css';
import Body from './components/Body/Body';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (
      <>
        <Navbar></Navbar>
        <Header></Header>
        <Body></Body>
        <Blog></Blog>
        <Footer></Footer>
      </>
      
  );
}

export default App;
