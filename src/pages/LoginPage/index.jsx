import React, {Component} from "react";
import Button from "../../components/General/Button";
import css from './style.module.css'
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        // alert("login" + " : "+ this.state.password);
        this.props.login(this.state.email, this.state.password);
    }

    changeEmail = (e) => {
        this.setState({email: e.target.value});
    }

    changePassword1 = (e) => {
        this.setState({password : e.target.value})
    } 


    render() {
        if (this.props.userId) {
            return <Navigate to="/orders" />;
        }

        return <div className={css.Login}>
            <input onChange={this.changeEmail} type="text" placeholder="Email" />
            <input onChange={this.changePassword1} type="password" placeholder="Password" />

            {this.props.logging && <Spinner />}

            {/* {this.props.firebaseError && <div style={{color: 'red'}}>{this.props.firebaseError} код нь : {this.props.firebaseCodeError}</div>} */}

            {this.props.firebaseCodeError === 400 && (
                <div>
                    <h3>Нууц үг буруу байна. Та дахин оролдоно уу.</h3>
                </div>
            )}

            <Button text="Login" type="Success" clicked={this.login}/>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.loginUser(email, password))
    }
}

const mapStateToProps = state => {
    return {
        logging: state.signupLoginReducer.logging,
        firebaseError: state.signupLoginReducer.firebaseError,
        firebaseCodeError: state.signupLoginReducer.firebaseCodeError,
        userId : state.signupLoginReducer.userId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);