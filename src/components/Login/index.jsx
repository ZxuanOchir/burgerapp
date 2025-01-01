import React, {Component} from "react";
import Button from "../../components/General/Button";
import css from './style.module.css'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        alert(...login);
    }
    render() {
        return <div className={css.Login}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Button text="Login" type="Success" clicked={this.login}/>
        </div>
    }
}

export default Login;