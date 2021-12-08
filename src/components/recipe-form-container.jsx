import React from 'react';
import RecipeFormTitle from './recipe-form-title';



const RecipeFormContainer = (props)  => {
    return (
        <div className="container bg-nord5 w-full flex flex-col rounded border-gray-400">
            <div className="flex flex-col justify-end">
                <h3 className="text-3xl text-nord2">
                    Saved Form Goes here
                </h3>
            </div>
            <RecipeFormTitle form_title="Enter Base Recipe" />
            {props.children}
        </div>
    );    
};

export default RecipeFormContainer;
