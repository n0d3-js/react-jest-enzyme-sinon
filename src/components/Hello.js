import React, {Component} from 'react';

class Hello extends Component{
  constructor(){
    super();
    this.state = {};
    this.hi = this.hi.bind(this);
  }

  hi(){
    const name = this.refs.name.value;
    this.setState({greeting: `Hello, ${name}`});
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <input type="text" ref="name" />
        <button onClick={this.hi}>Speak</button>
        <div id="greeting">{this.state.greeting}</div>
      </div>
    );
  }
}

export default Hello;
