import React from 'react';



export const RecipeFormRadio = (props) => {

    return(
            <input 
                name={props.name}
                id={props.id}
                type="checkbox" 
                checked={props.value}
                onChange={props.onChange}
                data-index={props.dataIndex}

            />
    );
}


