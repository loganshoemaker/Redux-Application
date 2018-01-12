// https://www.valentinog.com/blog/react-redux-tutorial-beginners/

import React from 'react';
import Button from './components/Button';
import Count from './components/Count';
import Input from './components/Input';

import { addition, checkvalidity, subtraction } from "./actions";

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.count,
    inputValid: state.inputValid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addition()),
    checkvalidity: (e) => dispatch(checkvalidity(e)),
    subtract: () => dispatch(subtraction()),
  }
}

class ConnectedApp extends React.Component {

  render() {
    console.log(this.props);

    const errorMessage = () => {
      if (this.props.inputValid) {
        return (
          <span>The text is long enough</span>
        )
      } else {
        return (
          <span>The text is not long enough</span>
        )
      }
    }

    return (
      <div>
        <Button handleOnClick={this.props.add}>+</Button>
        <Button handleOnClick={this.props.subtract}>-</Button>
        <Count count={this.props.count} />
        <br />
        <Input placeholder="Minimum 3" type="text" handleOnChange={this.props.checkvalidity} handleOnBlur={this.props.checkvalidity} />
        <br />
        {errorMessage()}
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
