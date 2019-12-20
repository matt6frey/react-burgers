import React from "react";
import Aux from "../../../higher_order/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ing => {
    return (
      <li key={ing + 1}>
        <span style={{ TextTransform: "capitalize" }}>{ing}</span>:{" "}
        {props.ingredients[ing]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger containing: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <p>
        <Button btnType="Danger" clicked={props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>
          Continue
        </Button>
      </p>
    </Aux>
  );
};

export default orderSummary;
