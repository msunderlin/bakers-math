import React from 'react';


const RecipeFormTitle = (props) =>{
    return (
      <div className="container mx-auto w-full">
        <h2 className="text-8xl text-nord0">{props.form_title}</h2>
      </div>
    );
}

export default RecipeFormTitle;
