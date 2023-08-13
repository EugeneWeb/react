import './App.css';
import Test1 from './Test/Test1';
import Test2 from './Test/Test2';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Test1 />
        <Test2 />
      </div>

      
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
