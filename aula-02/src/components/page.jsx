/* eslint-disable react/prop-types */
import { Component } from "react";
import Proptypes from "prop-types";

class Page extends Component {
  constructor() {
    super();
    this.state = {
      cartCount: 0,
    };
  }

  static propTypes = {
    title: Proptypes.string.isRequired,
    count: Proptypes.number,
    changeCount: Proptypes.func,
  };

  increment() {
    // this.setState({
    //   cartCount: this.state.cartCount + 1,
    // });

    this.props.changeCount();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate", this.state, nextProps, nextState);

  //   return true;
  // }

  componentDidMount() {
    // console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <main>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.increment()}>increment</button>
        {this.props.children}
      </main>
    );
  }
}

export default Page;
