import React from "react";
import css from './style.module.css'
const Order = (props) => {

    const { order } = props;


    if (!order || !order.orts || !order.hayag) {
        return <div>Error: Order data is missing</div>;
    }


    return (
        <div className={css.Order}>
            <p>Орц : Гахайн мах : {order.orts.bacon}, 
                    Салад : {order.orts.salad},
                    Бяслаг : {order.orts.cheese}, 
                    Үхрийн мах : {order.orts.meat}  
                    </p>
            <p>Хаяг : {order.hayag.name} | 
                      {order.hayag.street} | 
                      {order.hayag.city}</p>
            <p>Үнийн дүн : <strong>{order.dun}₮</strong></p>
        </div>
    )
}

export default Order;