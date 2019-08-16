import React from 'react';
import PropTypes from 'prop-types';

function WaterForm({ number, handleNumberChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number"
        value={number}
        placeholder="How much did you drink?"
        onChange={handleNumberChange} />
      <button>Add Water</button>
    </form>
  );
}

WaterForm.propTypes = {
  number: PropTypes.number.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default WaterForm;
