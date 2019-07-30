import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];


const BuildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            {controls.map(control => {
              return <BuildControl 
              label={control.label}
              added={() => props.addIngredient(control.type)}
              remove={() => props.removeIngredient(control.type)}
              ></BuildControl>
            })
        }
        </div>
    );
}


export default BuildControls;