import React, { Component } from 'react';
import WaterForm from '../components/form/WaterForm';

export default class App extends Component {
  render() {
    return (
      <>
        <WaterForm number={5} handleSubmit={() => { }} handleNumberchange={() => { }} />
      </>
    );
  }
}

//start with presenational components so we know we have some working things
//visual stuff less thinking
//once pres comp can render, then come to container and thinking about biz logic and interact
//controlled components just means that the value and the on set are set;
