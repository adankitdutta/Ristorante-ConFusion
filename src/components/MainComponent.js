import React ,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {Dishes} from '../shared/dishes';
import Dishdetail from './DishdetailComponent'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: Dishes,
            selectedDish: null
        };
      }
    onSelectedDish(dish) {
        this.setState({
            selectedDish: dish
        })
    }
  render(){
  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Restaurant Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dish) => this.onSelectedDish(dish)}/>
      <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
    </div>
  );
}
}
export default Main;