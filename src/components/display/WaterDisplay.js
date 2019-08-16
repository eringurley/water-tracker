import React from 'react';
import PropTypes from 'prop-types';

function WaterDisplay ({ total }) {
  return (
    <section>
      <p>{total}</p>
      <p>{total}</p>


    {/* </section>
      <input type="number" 
      value={number}
      placeholder="How much water did you drink?"
      onChange={handleNumberChange} />
      <button>Add Water</button>
    </form>
  ); */}


  WaterDisplay.propTypes = {
    total: PropTypes.number.isRequired,
  }