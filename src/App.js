// https://www.valentinog.com/blog/react-redux-tutorial-beginners/

import React from 'react';
import Button from './components/Button';
import Count from './components/Count';
import Input from './components/Input';
import './App.css';

import { addition, subtraction, updateInputMessage } from "./actions";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    count: state.count,
    inputMessage: state.inputMessage,
    inputValid: state.inputValid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addition()),
    subtract: () => dispatch(subtraction()),
    updateMessage: (e) => dispatch(updateInputMessage(e)),
  }
}

class ConnectedApp extends React.Component {

  render() {

    const errorMessage = () => {
      if (this.props.inputMessage.length > 0) {
        if (!this.props.inputValid) {
          return (
            <span style={{ color: 'red', }}>The text is not long enough</span>
          )
        }
      }
    }

    return (
      <div>
        <Button className="counterButton" handleOnClick={this.props.add}>+</Button>
        <Button className="counterButton" disabled={this.props.count === 0} handleOnClick={this.props.subtract}>-</Button>
        <Count count={this.props.count} /><br />
        <Input placeholder="Minimum 3" type="text" handleOnChange={this.props.updateMessage} /><br />
        {errorMessage()}<br />
        <Button disabled={!this.props.inputValid}>Send Message</Button>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
