import React from 'react';


const Page = (props)=>{
    return (
        <>
            <h1> Convert your recipe!</h1>
            {props.children}
        </>
    );
};

export default Page;
