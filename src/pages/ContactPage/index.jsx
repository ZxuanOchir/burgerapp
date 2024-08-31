// Contact.jsx
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/General/Button";
import css from './style.module.css'
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";
import { connect } from "react-redux";

const ContactPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate(); 

    const [hayag, setHayag] = useState({
        name : '',
        city : '',
        street : '',
    })

    const [loader, setLoader] = useState(false);



    const goBack = () => {
        navigate("/", {replace : true}); // Go back to the previous page
    };

    const changeName = (e) => {
        setHayag(prevState => ({
            ...prevState,
            name: e.target.value
        }));
    }

    const changeCity = (e) => {
        setHayag(prevState => ({
            ...prevState,
            city: e.target.value
        }));
    };

    const changeAddress = (e) => {
        setHayag(prevState => ({
            ...prevState,
            street: e.target.value
        }));
    }



    const saveOrder = () => {
        const order = {
            orts : props.ingredients,
            dun: props.price,
            hayag : {
                name : hayag.name,
                city: hayag.city,
                street : hayag.street,
            }
        };

        setLoader(true);
        
        axios.post('/orders.json', order)
        .then(response => {
            console.log('Saved firebase', response.data);
        })
        .catch(err => console.log('Error saving order',err))
        .finally(() => {
            setLoader(false);
            navigate('/orders', {replace : true});
        });
    }
    
    return (
        <div className={css.Contact}>
            <h1>Хүргэлтийн Мэдээлэл</h1>

            <h1>Дүн : {props.price}</h1>
            

            {loader && <Spinner />}

            <input onChange={changeName} type="text" name="name" placeholder="Таны нэр" value={hayag.name}/>

            <input onChange={changeCity} type="text" name="city" placeholder="Таны хот" value={hayag.city}/>

            <input onChange={changeAddress} type="text" name="address" placeholder="Таны гэрийн хаяг" value={hayag.address}/>

        
            <Button clicked={goBack} text="Цуцлах" type="Danger" />

            <Button clicked={saveOrder} text="Илгээх" type="Success" />
        </div>
    );
};
const mapStateToProps = state => {
    return {
        price : state.totalPrice,
        ingredients : state.ingredients
    }
}


export default connect(mapStateToProps)(ContactPage);
