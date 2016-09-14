import React, {Component} from 'react';
import md5 from 'md5';

class Shopping extends Component{
  constructor(){
    super();
    this.state = {cart: []};
    this.add = this.add.bind(this);
  }

  add(){
    const name = this.refs.name.value;
    const category = this.refs.category.value;
    const time = Date.now();
    const picked = false;
    const hash = md5(name + category + time);
    this.setState({cart: [...this.state.cart, {name, category, time, picked, hash}]});
  }

  render(){
    return (
      <div>
        <h1>Shopping Cart</h1>
        <input type="text" ref="name" />
        <select ref="category">
          <option>Meat</option>
          <option>Produce</option>
        </select>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default Shopping;
