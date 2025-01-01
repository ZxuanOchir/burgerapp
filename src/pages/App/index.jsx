import css from './style.module.css';
import Toolbar from '../../components/ToolBar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
import { Component } from 'react';
import OrderPage from '../OrderPage';
import { Route, Routes } from 'react-router-dom';
import ShippingPage from '../ShippingPage';
import Contact from '../ContactPage';
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';
import Logout from '../../components/Logout';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as actions from '../../redux/actions/loginActions';
import * as signupActions from '../../redux/actions/signupActions';

class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => ({
      showSideBar: !prevState.showSideBar,
    })); //showSideBar: true == false ==> true
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expireDate = new Date(localStorage.getItem('expireDate'));
    const refreshToken = localStorage.getItem('refreshToken');

    if (token) {
      if(expireDate > new Date()){
        //hugatsaa duusagui token bna autoLogin hiine
        this.props.autoLogin(token, userId);
        //token huchingui bolohod uldej baigaa hugatsaag tootsolj
        //ter hugatsaanii dara avtomataar logout hiinee
        this.props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime());
      } else{
        //token hugatsaa n duussan bainaa logout hiine
        this.props.logout();
      }
    }
  }

  render() {
    const { userId } = this.props;

    return (
      <>
        {/* Toolbar and Sidebar */}
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />

        {/* Main content */}
        <main className={css.Content}>
          <Routes>
            {userId ? (
              <>
                <Route path="/logout" element={<Logout />} />
                <Route path="ship/*" element={<ShippingPage />} />
                <Route path="ship/contact" element={<Contact />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/" element={<BurgerPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            )}
          </Routes>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.signupLoginReducer.userId,
});

const mapDispatchToProps = (dispatch) => ({
  autoLogin: (token, userId) =>
    dispatch(actions.loginUserSuccess(token, userId)),
  logout: () => dispatch(signupActions.logout()),
  autoLogoutAfterMillisec: () => 
    dispatch(signupActions.autoLogoutAfterMillisec()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
