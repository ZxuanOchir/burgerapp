import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";

class OrderPage extends Component {
    state = {
        showMessage: true,
    };

    componentDidMount() {
        // Load orders when the component mounts
        this.props.loadOrders(this.props.userId);

        // Hide the success message after 3 seconds if logged in
        if (this.props.userId) {
            this.timer = setTimeout(() => {
                this.setState({ showMessage: false });
            }, 3000);
        }
    }

    componentWillUnmount() {
        // Cleanup timer on unmount
        clearTimeout(this.timer);
    }

    render() {
        return (
            <div>
                {/* Show success message only if logged in */}
                {this.props.userId && this.state.showMessage && (
                    <h3 style={{ color: "green" }}>Амжилттай нэвтэрлээ!</h3>
                )}

                {this.props.loading ? (
                    <Spinner />
                ) : (
                    this.props.orders.map((el) => (
                        <Order key={el[0]} order={el[1]} />
                    ))
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        userId: state.signupLoginReducer.userId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
