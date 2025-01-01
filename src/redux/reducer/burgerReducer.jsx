const initialState = {
    ingredients : {
        salad : 0,
        cheese :0,
        bacon : 0,
        meat : 0
    }, // shuud object ==> array bolgood map ashiglaad el bolgonoor davtaj ashiglana.
    totalPrice : 1000,
    purchasing : false,
    ingredientNames : {
        bacon : 'Гахайн мах',
        cheese : 'Бяслаг',
        meat : 'Үхрийн Мах',
        salad : 'Салад'
    }
}

const INGREDIENT_PRICES = {
    salad : 150,
    cheese : 250,
    bacon : 800,
    meat : 1500,
}

const burgerReducer = (state = initialState, action) => {
    if(action.type === "ADD_INGREDIENT"){
        console.log(action.ortsNer)
        return {
            ...state,
            ingredients : {
                ...state.ingredients,
                [action.ortsNer] : state.ingredients[action.ortsNer] + 1
            },
            totalPrice : state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
            purchasing : true
        }
    }else if(action.type === "REMOVE_INGREDIENT"){
        if(state.ingredients[action.ortsNer] > 0){
            const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer];
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ortsNer] : state.ingredients[action.ortsNer] - 1
                },
                totalPrice : newPrice,
                purchasing : newPrice > 1000
            }
        }
    }
    
    return state;
}

export default burgerReducer;