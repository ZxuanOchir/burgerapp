import React from "react";
import { connect } from "react-redux";
import css from './style.module.css'
import * as actions from "../../redux/actions/burgerActions"
import BuildControl from "../BuildControl";
const BuildControls = (props) => {

    const disabledIngredients = {...props.burgeriinOrts}; //spread copy all

    for(let orts in disabledIngredients) {
       disabledIngredients[orts] = disabledIngredients[orts] <= 0;
       console.log(orts + '===>' + disabledIngredients[orts]); 
       //console.log(orts)
       //0 = true 0 < 1 = false
    }
    return (
                <div className={css.BuildControls}>
                    <p>Бургерийн үнэ : <strong>{props.price}</strong></p>
                
                {Object.keys(props.ingredientNames).map(el => <BuildControl
                    key={el}
                    disabled={disabledIngredients}
                    ortsNemeh={props.ortsNemeh} 
                    ortsHasah={props.ortsHasah} 
                    type={el} 
                    orts={props.ingredientNames[el]}
                />)}
                {/*  ['bacon', 'cheese', 'meat', 'salad'] object ===> array  */}
                    <button onClick={props.showConfirmModal} disabled={!props.purchasing} className={css.OrderButton}>ЗАХИАЛАХ</button>
                </div>
            )
}

const mapStateToProps = state => {
    return {
        burgeriinOrts : state.burgerReducer.ingredients,
        price : state.burgerReducer.totalPrice,
        purchasing : state.burgerReducer.purchasing, 
        ingredientNames : state.burgerReducer.ingredientNames
    }
} //state iig props ruu huvirga

const mapDispatchToProps = dispatch => {
    return {
        ortsNemeh : (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
        ortsHasah : (ortsNer) => dispatch(actions.removeIngredient(ortsNer))
    }// dispatch aar orj bui action iig props ruu damjuul
}
//actions ==> connect ==> reactContextApi(Provider) ==> store(Reducers)

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);