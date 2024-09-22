import React, { useContext } from 'react';
import './fruit-card.css';
import FruitContext  from '../../reducers/FruitContext';



const FruitCard = ({ fruits, type }) => {
  const { state, dispatch } = useContext(FruitContext);

  const addFruitToJar = (fruit) => {
    dispatch({ type: 'ADD_FRUIT', payload: fruit });
  };
  
  const removeFruitFromJar = (fruitId) => {
    dispatch({ type: 'REMOVE_FRUIT', payload: fruitId });
  };

  const fruitsView = type === "fruitJar"  ? state.jar : fruits;

  const eachFruit = fruitsView.map((fruit) => (
    <div className="fruit-card" key={fruit.id}>
      <div className="fruit-detail-container">
        <div className="fruit-name">
          <a
            href={`/showd/${fruit.name}`}
            onClick={() => {
              console.log('fruit.name = ', fruit.name);
            }}
          >
            {fruit.name}
          </a>
        </div>

        <div className="fruit-detail">
          Genus: <span className="fruit-detail-span">{fruit.genus}</span>
        </div>

        <div className="fruit-detail">
          Family: <span className="fruit-detail-span">{fruit.family}</span>
        </div>

        <div className="fruit-detail">
          Order: <span className="fruit-detail-span">{fruit.order}</span>
        </div>
        {type === "fruitJar" ? (<button onClick={() => removeFruitFromJar(fruit.name)}>Remove</button>) : 
        (<button onClick={() => addFruitToJar(fruit)}>add</button>)}
      </div>
    </div>
  ));

  return <>{eachFruit ? eachFruit : <div>Loading...</div>}</>;
};

export default FruitCard;
