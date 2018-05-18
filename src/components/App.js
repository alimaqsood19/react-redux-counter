import React, { Component } from 'react';
import './App.css';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log('hi', this.props.count);
  }

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
        <div className="buttons">
          <button onClick={() => this.increment(count)}>Increment</button>
          <button onClick={() => this.decrement(count)}>Decrement</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count
});

export default connect(mapStateToProps, actions)(App);
