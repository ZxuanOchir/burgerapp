
import css from './style.module.css'
import Toolbar from '../../components/ToolBar'
import BurgerPage from '../BurgerPage'
import SideBar from '../../components/SideBar'
import { Component } from 'react'

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
      <BurgerPage />
    </main>
    </>
    )
  }
}

export default App
