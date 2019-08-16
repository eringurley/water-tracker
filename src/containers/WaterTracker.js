import React, { Component } from 'react';
import WaterForm from './WaterForm';
import WaterDisplay from './WaterDisplay';
import PropTypes from 'prop-types';

export default class WaterTracker extends Component {
  static propTypes = {
    maxWater: PropTypes.number
  }

  static defaulProps = {
    maxWater: 32
  }
  state = {
    waterInput: '',
    totalWater: 0
  };

  handleNumberChange = ({ target }) => {
    this.setState({ waterInput: Number.parseInt(target.value) });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return {
        totalWater: state.waterInput + state.totalWater, 
        waterInput: ''
      };
    });
  }

  render() {
    return (
      <>
      <WaterForm number={this.state.waterInput} handleNumberchange={this.handleNumberChant}
        handleSubmit={this.handleSubmit}
      />
      <WaterDisplay total={this.state.total}  max={this.props.maxWater}/>
      </>
    );
  }
}

