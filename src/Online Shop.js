import React from 'react';

function Online_shop (props){
    return (
        <div> 

    <h1>We are surving: {props.ProductName} {props.books}</h1><hr/>
    <h1>We are also surving: {props.MobName} {props.cloth}</h1><hr/>
       

        </div>
    );

}
export default Online_shop;