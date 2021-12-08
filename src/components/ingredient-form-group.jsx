import React from 'react';
import { RecipeFormInput,RecipeFormInputD,RecipeFormCheckbox} from './common/form/recipe-form-input.jsx';


export const IngredientFormGroup = (props) => {
    return (
            <tr >
                <td className="border border-gray-500" >
               <RecipeFormInput 
                   name="iname"
                   value={props.ingredient.iname}
                   onChange={props.onChange}
                   dataIndex={props.dataIndex}
               />
                </td>
                <td className="border border-gray-500">
               <RecipeFormInput 
                   value={props.ingredient.iweight}
                   name="iweight"
                   onChange={props.onChange}
                   dataIndex={props.dataIndex}
               />
                </td>
                <td className="border border-gray-500">
               <RecipeFormCheckbox
                   value={props.ingredient.ibase}
                   name="ibase"
                   onChange={props.onRadioChange}
                   dataIndex={props.dataIndex}
               />
                </td>
                <td className="border border-gray-500">
               <RecipeFormInputD
                   value={props.ingredient.ipercent.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})}
                   name="iPercent"
                   dataIndex={props.dataIndex}
               />
                </td>
            </tr>

    );
}
