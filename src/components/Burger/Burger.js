import React, {Component} from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


class Burger extends Component {

    render() {

        let ingredients = this.props.ingredients;
        let ingredientkeys = Object.keys(ingredients);
        let ingredienthtml = [];

        for (let i = 0; i< ingredientkeys.length; i++) {
            for (let j = 0; j < ingredients[ingredientkeys[i]]; j++) {
                ingredienthtml.push(<BurgerIngredient 
                    key={ingredientkeys[i] + j} 
                    type={ingredientkeys[i]}>

                    </BurgerIngredient>);
            }
        }

        if (!ingredienthtml.length) {
            ingredienthtml = <p>Please add Ingredients</p>;
        }


        
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {ingredienthtml}
                <BurgerIngredient type="bread-bottom"/>
                
            </div>
        );
    }
}

export default Burger;