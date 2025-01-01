import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/General/Button";
import css from './style.module.css';
import Spinner from "../../components/General/Spinner";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";

const ContactPage = (props) => {
    const navigate = useNavigate(); 

    const [hayag, setHayag] = useState({
        name: '',
        city: '',
        street: ''
    });

    const [loader, setLoader] = useState(false);

    const goBack = () => {
        navigate("/", {replace: true}); // Go back to home page
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHayag(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if (props.newOrderStatus.finished) {
            if (!props.newOrderStatus.error) {
                navigate('/orders', { replace: true });

                props.resetOrderStatus();
            } else {
                alert(`Error: ${props.newOrderStatus.error}`);
            }
        }
    }, [props.newOrderStatus, navigate]);
    
    const newOrder = () => {

        const order = {
            orts: props.ingredients,
            dun: props.price,
            userId: props.userId,
            hayag: {
                name: hayag.name,
                city: hayag.city,
                street: hayag.street,
            }
        };

        props.saveOrderAction(order)

        setHayag({name : '', city: '', street: ''});
    };

    return (
        <div className={css.Contact}>
            <h1>Хүргэлтийн Мэдээлэл</h1>
            <h1>Дүн: {props.price}₮</h1>

            <div>
                {props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа : ${props.newOrderStatus.error}`}
            </div>
            {props.newOrderStatus.saving && <Spinner />}

            <input 
                onChange={handleChange} 
                type="text" 
                name="name" 
                placeholder="Таны нэр" 
                value={hayag.name} 
            />
            <input 
                onChange={handleChange} 
                type="text" 
                name="city" 
                placeholder="Таны хот" 
                value={hayag.city} 
            />
            <input 
                onChange={handleChange} 
                type="text" 
                name="street" 
                placeholder="Таны гэрийн хаяг" 
                value={hayag.street} 
            />

            <Button clicked={goBack} text="Цуцлах" type="Danger" disabled={loader} />
            <Button clicked={newOrder} text="Илгээх" type="Success" disabled={loader} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    price: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId,
});

const mapDispatchToProps = (dispatch) => ({
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
    resetOrderStatus: () => dispatch(actions.resetOrderStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
