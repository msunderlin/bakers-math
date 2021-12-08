import React from 'react';
import {IngredientFormGroup} from './ingredient-form-group';
import { INGREDIENT_NAME, INGREDIENT_WEIGHT, INGREDIENT_PR, INGREDIENT_PERCENT } from '../constants/labels';
import AddIngredient from './add-ingredient';

const RecipeForm = (props)  => {
    return (
        <div className="container mx-auto">
            <h3>RecipeForm</h3>
            <table className="border-collapse border border-gray-500 table-auto w-full">
                <thead>
                    <tr>
                            <th className="text-nord10 border border-gray-500">{INGREDIENT_NAME}</th>
                            <th className="text-nord10 border border-gray-500">{INGREDIENT_WEIGHT}</th>
                            <th className="text-nord10 border border-gray-500">{INGREDIENT_PR}</th>
                            <th className="text-nord10 border border-gray-500">{INGREDIENT_PERCENT}</th>
                    </tr>

                </thead>
            {props.recipe.map((ingredient, index)=>{
                return <IngredientFormGroup key={index} dataIndex={index} ingredient={ingredient} onChange={props.handleChange} onRadioChange={props.handleRadioChange} />
            })}
            
            </table>
            <AddIngredient buttontitle='Add Ingredient' handleClick={props.handleAddIngredient} />
        </div>
    );    
};

export default RecipeForm;
