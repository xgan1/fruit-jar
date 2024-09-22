import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import SearchForm from '../components/Search/SearchForm';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import FruitCard from '../components/FruitCard/FruitCard';
import { useState, useContext, useEffect } from 'react';
import FruitContext from '../reducers/FruitContext';

import './style.css';

const Home = () => {
  const { state, dispatch } = useContext(FruitContext);
  const setFruits = (fruits) => {
    dispatch({ type: 'SET_FRUIT', payload: fruits });
  };
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFruits = async () => {
    try {
      const response = await fetch('https://proxyserver-phi.vercel.app/');
      const fruits = await response.json();
      if (response.status === 200) {
        setFruits(fruits);
        setFilteredFruits(fruits);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Something went wrong while fetching the fruits', error);
    }
  };

  useEffect(() => {
    if(state.fruits.length === 0) {
      fetchFruits();
    } else {
      //setFilteredFruits(state.fruits);
      setIsLoading(false);
    }
    
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="search-components">
            <SearchForm
              fruits={state.fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
            <SearchFilter
              fruits={state.fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
          </div>

          <div className="loading-state">
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="search-components">
            <SearchForm
              fruits={state.fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
            <SearchFilter
              fruits={state.fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
          </div>

          <div className="fruit-cards">
            <FruitCard fruits={filteredFruits}  type={"allFruit"}/>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
