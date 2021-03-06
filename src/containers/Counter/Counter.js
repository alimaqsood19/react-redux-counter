import React, { Component } from 'react';
import './Counter.css';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class App extends Component {
  increment = count => {
    this.props.incrementCount(count);
  };

  decrement = count => {
    this.props.decrementCount(count);
  };

  render() {
    let { count } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux inc/dec challenge</h1>
          <p className="count">{this.props.count}</p>
        </header>
        <button onClick={() => this.increment(count)}>Increment</button>
        <button onClick={() => this.decrement(count)}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count
});

export default connect(mapStateToProps, actions)(App);
