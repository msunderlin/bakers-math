import React from 'react';



export const RecipeFormInput = (props) => {

    return(
            <input 
                name={props.name}
                className="bg-nord4 w-full  border-gray-black"
                id={props.id}
                type="text" 
                value={props.value}
                onChange={props.onChange}
                data-index={props.dataIndex}
                disabled={props.disabled}
            />
    );
}


export const RecipeFormCheckbox = (props) => {

    return(
            <input 
                name={props.name}
                id={props.id}
                type="checkbox" 
                value={props.value}
                onChange={props.onChange}
                checked={props.value}
                data-index={props.dataIndex}
            />
    );
}


export const RecipeFormInputD = (props) => {

    return(
        <div className="flex-auto">
            <label>{props.label}</label>
            <input 
                name={props.name}
                id={props.id}
                type="text" 
                value={props.value}
                onChange={props.onChange}
                data-index={props.dataIndex}
                disabled={true}
                readOnly={true}
            />
        </div>
    );
}

