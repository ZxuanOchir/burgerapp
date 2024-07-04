
import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
    return (
        <div>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд :</p>
            <ul>
                {Object.keys(props.chosenIngredients).map(el => 
                <li key={el}>
                    {props.ingredientNames[el]} : {props.chosenIngredients[el]}
                </li>)}
            </ul>
            <p><strong>Захиалгын дүн {props.price}₮</strong></p>
            <p>Үргэлжлүүлэх үү?</p>
            <Button clicked={props.onCancel} type="Danger" text="ТАТГАЛЗАХ"/>
            <Button clicked={props.onContinue} type="Success" text="ҮРГЭЛЖЛҮҮЛЭХ"/>
        </div>
    )
}

export default OrderSummary;