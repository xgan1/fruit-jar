import React, {useContext} from 'react';
import FruitContext  from '../reducers/FruitContext';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import FruitCard from '../components/FruitCard/FruitCard';

import './style.css';



const Jar = ({}) => {
  const { state, dispatch } = useContext(FruitContext);


  return (
    <>
        <div className="container">
        {state.jar.length === 0 ? <div className="noFruit">No fruit in jar</div> :
        <div className="fruit-cards">
        <FruitCard type={"fruitJar"}/>
      </div>
        }
          
        </div>
    </>
  );
};

export default Jar;
