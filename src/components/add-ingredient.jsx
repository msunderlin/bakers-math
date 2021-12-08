import React from 'react';




export const AddIngredient = (props) => {

    return (
        <>
            <button onClick={props.handleClick}>
                {props.buttontitle}
            </button>
        </>
    );
}


export default AddIngredient;
