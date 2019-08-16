import React, { Component } from 'react';
import WaterForm from '../form/WaterForm';
import WaterDisplay from '../display/WaterDisplay';
import PropTypes from 'prop-types';

export default class WaterTracker extends Component {
  static propTypes = {
    maxWater: PropTypes.number
  }

  static defaultProps = {
    maxWater: 32
  }
  state = {
    waterInput: 0,
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
        waterInput: 0
      };
    });
  }

  render() {
    return (
      <>
      <WaterForm 
        number={this.state.waterInput} 
        handleNumberChange={this.handleNumberChange}
        handleSubmit={this.handleSubmit}
      />
      <WaterDisplay total={this.state.totalWater}  
        max={this.props.maxWater}/>
      </>
    );
  }
}

