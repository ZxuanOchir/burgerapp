import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import withNavigate from "../../components/hoc/withNavigate";
import Spinner from "../../components/General/Spinner";
import css from "./style.module.css";


// const INGREDIENT_PRICES = {
//     salad : 150,
//     cheese : 250,
//     bacon : 800,
//     meat : 1500,
// }



class BurgerPage extends Component {

    
    state = {
        confirmOrder : false,
        loading : false,
    }

    handleNavigate = () => {
        // const params = [];
        // for(let orts in this.props.burgeriinOrts){
        //     params.push(orts + '=' + this.props.burgeriinOrts[orts])
        // }

        // params.push('dun=' + this.props.niitUne)

        // const query = params.join('&');
        this.props.navigate({
            pathname: "/ship",
            // search: `?${query}`,
        });
    };



    componentDidMount = () => {
    
    }

    continueOrder = () => {
        // const order = {
        //     orts : this.props.burgeriinOrts,
        //     dun: this.props.niitUne,
        //     hayag : {
        //         name : 'Bold',
        //         city: 'UlaanBaatar',
        //         street : '10r horoolol'
        //     }
        // }
        // this.setState({loading : true});
        // axios.post('/orders.json', order).then(response => {
            
        // }).finally(() => {
        //     this.setState({loading : false});
        // });
        
        this.handleNavigate();
    

        this.closeConfirmModal();
    }

    showConfirmModal = () => {
        this.setState({confirmOrder : true});
    }

    closeConfirmModal = () => {
        this.setState({confirmOrder : false});
    }

    // ortsNemeh = (type) => {
    //     const newIngredients = {...this.props.burgeriinOrts}; //object clone spread operator es6

    //     newIngredients[type]++; 

    //     const newPrice = this.props.niitUne + INGREDIENT_PRICES[type];

    //     this.setState({purchasing : true, ingredients : newIngredients, totalPrice : newPrice});

    // }

    // ortsHasah = (type) => {
    //     if(this.props.burgeriinOrts[type] > 0) {
    //         const removeIngredient = {...this.props.burgeriinOrts};

    //         removeIngredient[type]--;

    //         const newPrice = this.props.niitUne - INGREDIENT_PRICES[type];
    
    //         this.setState({purchasing: newPrice > 2000, ingredients : removeIngredient, totalPrice : newPrice});
    //     }
    // }
    
    render() {

        //console.log('hey', this.props);
        

        return (
            <div>
            <Modal
                    closeConfirmModal={this.closeConfirmModal} 
                    show={this.state.confirmOrder}
                    >
                        
                <OrderSummary
                    onCancel={this.closeConfirmModal}
                    onContinue={this.continueOrder}
                />
                    
            </Modal>
                <Burger />

                <BuildControls
                    showConfirmModal = {this.showConfirmModal}
                />
            </div>
        )
    }
}


export default withNavigate(BurgerPage); //withnavigate