import React, {Component} from 'react';

import Burger from '../../components/Burger/Burger';
import Auxillary from '../../hoc/Auxillary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    salad: 0.4,
    bacon: 0.5,
    cheese: 0.6,
    meat: 1.4
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        TotalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
         const newIngredientCount = oldIngredientCount + 1;

         const newIngredients = {
             ...this.state.ingredients
         };

         newIngredients[type] = newIngredientCount;

         const oldPrice = this.state.TotalPrice;
         const newPrice = this.state.oldPrice + INGREDIENT_PRICES[type];

         this.setState({ingredients: newIngredients, TotalPrice: newPrice});

    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
         const newIngredientCount = oldIngredientCount - 1;
         const newIngredients = {
            ...this.state.ingredients
        };

        newIngredients[type] = newIngredientCount;

        const oldPrice = this.state.TotalPrice;
         const newPrice = this.state.oldPrice - INGREDIENT_PRICES[type];

         this.setState({ingredients: newIngredients, TotalPrice: newPrice});
    }


    render() {
        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}></BuildControls>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;