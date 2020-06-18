import React ,{Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import {Dishes} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import {Switch,Route,Redirect } from 'react-router-dom';
import Home from './Home'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: Dishes,
        };
      }
  render(){

    const HomePage = () => {
      return(
          <Home/>
      );
    }

  return (
    <div>
      <Header/>
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
      </Switch>
      <Footer/>
    </div>
  );
}
}
export default Main;