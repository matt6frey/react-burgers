import React, { Component } from "react";
import "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    if (this.props.type) {
      switch (this.props.type) {
        case "bread-bottom":
          ingredient = <div className="BreadBottom" />;
          break;
        case "bread-top":
          ingredient = (
            <div className="BreadTop">
              <div className="Seeds1" />
              <div className="Seeds2" />
            </div>
          );
          break;
        case "meat":
          ingredient = <div className="Meat" />;
          break;
        case "salad":
          ingredient = <div className="Salad" />;
          break;
        case "cheese":
          ingredient = <div className="Cheese" />;
          break;
        case "bacon":
          ingredient = <div className="Bacon" />;
          break;
        default:
          ingredient = null;
      }
    }

    return ingredient;
  }
}

export default BurgerIngredient;
