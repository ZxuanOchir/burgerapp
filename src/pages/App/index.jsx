
import css from './style.module.css'
import Toolbar from '../../components/ToolBar'
import BurgerPage from '../BurgerPage'
import SideBar from '../../components/SideBar'
import { Component } from 'react'
import OrderPage from '../OrderPage'
import { Route, Routes } from 'react-router-dom'
import  ShippingPage from '../ShippingPage'
import Contact from '../ContactPage'


class App extends Component {

  state = {
    showSideBar : false,
  }

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar} /* prevState = true = false */
    });
  }


  
  render() {
    return (
      <>
    <Toolbar toggleSideBar={this.toggleSideBar}/>
    <SideBar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar}/>
    <main className={css.Content}>
      <Routes>
          <Route path='/' element={<BurgerPage />}/>
          <Route path='ship/*' element={<ShippingPage />}/>
          <Route path="ship/contact" element={<Contact />} />
          <Route path='/orders' element={<OrderPage />}/>
      </Routes>
    </main>
    </>
    )
  }
}

export default App
