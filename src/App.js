// https://www.valentinog.com/blog/react-redux-tutorial-beginners/

import React from 'react';
import Button from './components/Button';
import Count from './components/Count';

import { addition, subtraction } from "./actions";

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addition()),
    subtract: () => dispatch(subtraction()),
  }
}

class ConnectedApp extends React.Component {

  render() {
    console.log(this.props.add);
    return (
      <div>
        <Button handleOnClick={this.props.add}>+</Button>
        <Button handleOnClick={this.props.subtract}>-</Button>
        <Count count={this.props.count} />
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
