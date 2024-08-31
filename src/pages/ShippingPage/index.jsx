import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import Contact from "../ContactPage";
import css from './style.module.css'
import { connect } from "react-redux";

const ShippingPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
//     const [ingredients, setIngredients] = useState({
//         salad: 0,
//         cheese: 0,
//         bacon: 0,
//         meat: 0
//     }
// );




    // useEffect(() => {
    //     const query = new URLSearchParams(location.search);
    //     const orts = {};

    //     let price = 0;

    //     for (let param of query.entries()) {
    //         if(param[0] !== 'dun') orts[param[0]] = param[1];
    //        // console.log(param); // ['salad', '0']
    //         else { 
    //             price = param[1];
    //         }
    //     }

    //     setIngredients(orts);
    //     setPrice(price);
    // }, [location.search]);

    const goBack = () => {
        navigate("/", {replace : true}); // Go back to the previous page
    };

    const showContactData = () => {
        navigate("contact");
    };


    return (
        <div className={css.ShippingPage}>
            <p style={{fontSize : '28px'}}>ТАНЫ ЗАХИАЛГА АМТТАЙ БОЛНО ГЭЖ НАЙДАЖ БАЙНА.</p>
            <p style={{fontSize : '28px'}}>Дүн : {props.price}</p>
            <Burger />
            <h1>ТА ЗАХИЛГА ХИЙХДЭЭ НЯГТАЛНА УУ...</h1>
            <Button clicked={goBack} type="Danger" text="Захиалга цуцлах"/>
            
            <Button clicked={showContactData} type="Success" text="Захиалга хүргүүлэх"/>

    

        </div>
    );
};

const mapStateToProps = state => {
    return {
        price : state.totalPrice
    }
}

export default connect(mapStateToProps)(ShippingPage);
