import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from '../../axios-orders';
import Spinner from "../../components/General/Spinner";


const INGREDIENT_PRICES = {
    salad : 150,
    cheese : 250,
    bacon : 800,
    meat : 1500,
}

const INGREDIENT_NAMES = {
    bacon : 'Гахайн мах',
    cheese : 'Бяслаг',
    meat : 'Үхрийн Мах',
    salad : 'Салад'
}

class BurgerPage extends Component {
    
    state = {
        ingredients : {
            salad : 0,
            cheese :0,
            bacon : 0,
            meat : 0
        },
        totalPrice : 2000,
        purchasing : false,
        confirmOrder : false,
    }

    componentDidMount = () => {
       
    }

    continueOrder = () => {
        const order = {
            orts : this.state.ingredients,
            dun: this.state.totalPrice,
            hayag : {
                name : 'Bold',
                city: 'UlaanBaatar',
                street : '10r horoolol'
            }
        }
        this.setState({loading : true});
        axios.post('/orders.json', order).then(response => {
            
        }).finally(() => {
            this.setState({loading : false});
        });
    }

    showConfirmModal = () => {
        this.setState({confirmOrder : true});
    }

    closeConfirmModal = () => {
        this.setState({confirmOrder : false});
    }

    ortsNemeh = (type) => {
        const newIngredients = {...this.state.ingredients}; //object clone spread operator es6

        newIngredients[type]++; 

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({purchasing : true, ingredients : newIngredients, totalPrice : newPrice});

    }

    ortsHasah = (type) => {
        if(this.state.ingredients[type] > 0) {
            const removeIngredient = {...this.state.ingredients};

            removeIngredient[type]--;

            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    
            this.setState({purchasing: newPrice > 2000, ingredients : removeIngredient, totalPrice : newPrice});
        }
    }
    
    render() {
        const disabledIngredients = {...this.state.ingredients};

        for(let orts in disabledIngredients) {
           disabledIngredients[orts] = disabledIngredients[orts] <= 0;
           //console.log(orts + '===>' + disabledIngredients[orts]); 
           //0 = true 0 < 1 = false
        }

        return (
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} show={this.state.confirmOrder}>
                    {this.state.loading ? <Spinner /> : <OrderSummary
                    onCancel={this.closeConfirmModal}
                    onContinue={this.continueOrder}
                    price={this.state.totalPrice}
                    ingredientNames={INGREDIENT_NAMES} 
                    chosenIngredients={this.state.ingredients}/>}
                    

                </Modal>
                <Burger orts = {this.state.ingredients}/>

                <BuildControls showConfirmModal = {this.showConfirmModal} ingredientNames={INGREDIENT_NAMES} disabled={!this.state.purchasing} price={this.state.totalPrice} disabledIngredients={disabledIngredients} ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah}/>
            </div>
        )
    }
}

export default BurgerPage;