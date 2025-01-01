import axios from '../../axios-orders'

export const loadOrders = (userId) => {
    return function(dispatch, getState){
        // Захиалгыг татаж эхэллээ гэдгийг мэдээллэнэ.
        // Энийг хүлээж аваад Spinner ажиллуулна.
        dispatch(loadOrdersStart());

        //const token = getState().signupLoginReducer.token
        const token = localStorage.getItem("token");
        
        //console.log("ddddddd", token );

        axios
            .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then(response => {
                const loadedOrders = Object.entries(response.data).reverse()
                dispatch(loadOrdersSuccess(loadedOrders))
            })
            .catch(алдаа => dispatch(loadOrdersError(алдаа)))
    }
};

export const resetOrderStatus = () => {
    return {
        type : "RESET_ORDER_STATUS"
    }
}

export const loadOrdersStart = () => {
    return {
        type: "LOAD_ORDERS_START"
    }
}

export const loadOrdersSuccess = (loadOrders) => {
    return {
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadOrders
    }
}

export const loadOrdersError = (error) => {
    return {
        type: "LOAD_ORDERS_ERROR",
        error
    }
}

// Захиалгыг хадгалах хэсэг 
export const saveOrder = (newOrder) => {
    return function(dispatch, getState){
            //Spinner
            dispatch(saveOrderStart());

            //const token = getState().signupLoginReducer.token
            const token = getState().signupLoginReducer.token;

            //Firebase save
             axios.post(`/orders.json?auth=${token}`, newOrder) // ? & & & query parameters
        .then(response => {
            dispatch(saveOrderSuccess());
        })
        .catch(err => {
            dispatch(saveOrderError(err))
        })
        // .finally(() => {
        //     setLoader(false);
        //     navigate('/orders', {replace : true});
        // });
    }
}

export const saveOrderStart = () => {
    return {
        type : "SAVE_ORDER_START"
    }
}

export const saveOrderSuccess = () => {
    return {
        type : "SAVE_ORDER_SUCCESS"
    }
}

export const saveOrderError = (err) => {
    return {
        type : "SAVE_ORDER_ERROR",
        err
    }
}