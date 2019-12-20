import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p className="center-text">
      Current Total: <strong>$ {props.price}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.IngredientAdded(ctrl.type)}
        removed={() => props.IngredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      className="OrderButton"
      disabled={!props.purchasable}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
