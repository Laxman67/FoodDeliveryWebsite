import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>

      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt natus
        deserunt nesciunt earum fugit suscipit voluptates, unde perferendis
        adipisci dolorem itaque architecto atque libero aut debitis, repudiandae
        quia amet tenetur.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
