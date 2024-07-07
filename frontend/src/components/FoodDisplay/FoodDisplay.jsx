import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category == 'All' || category == item.category)
            // it will iterate over an over to check if category  of the item  is same as *category* state , if true then display or ignore

            // 1. All -> Then it will dipplay all the  food list
            // 2. specific category -> Then it will only display the items of that category

            return (
              <FoodItem
                items={item} // to list down the items that are passed into food food_list
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
