import React, { Component } from "react";
import Container from "../../higher_order/Container";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1,
  bacon: 0.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceReduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceReduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(updatedIngredients) {
    const ingredients = {
      ...updatedIngredients
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum !== 0 });
  }

  isPurchasing = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };

  continuePurchase = () => {
    return;
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Container>
        <Modal show={this.state.purchasing} modalClosed={this.cancelPurchase}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancel={this.cancelPurchase}
            purchaseContinue={this.continuePurchase}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          IngredientAdded={this.addIngredient}
          IngredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.isPurchasing}
        />
      </Container>
    );
  }
}

export default BurgerBuilder;
