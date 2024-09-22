import React, {useReducer} from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import FruitJar from './pages/jar';
import About from './pages/about';
import ShowDetail from './pages/ShowDetail';
import NotFoundPage from './pages/notfound';
import Footer from './components/Footer/Footer';
import { fruitJarReducer, initialState } from './reducers/fruitJarReducer';
import FruitContext from './reducers/FruitContext';

function App() {
  const [state, dispatch] = useReducer(fruitJarReducer, initialState);
  return (
    <FruitContext.Provider value={{ state, dispatch }}> 
      <div className="App">
          <React.Fragment>
            <Router>
              <AppNavbar />
                  <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/fruitJar" element={<FruitJar />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/showd/:id" element={<ShowDetail />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
              <Footer />
            </Router>
          </React.Fragment>
      </div>
      </FruitContext.Provider>
  );
}

export default App;
