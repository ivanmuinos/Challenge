import React from 'react'
import './BirrasCalculator.scss'
import useBirraCalculator from './hooks/useBirraCalculator'
import PropTypes from 'prop-types';

export default function BirrasCalculator(props) {

  const { people, temperature } = props
  const [ boxQuantity ] = useBirraCalculator(people, temperature)

  return (
    <div className="container__birras">
      <div>
        <span className="text__birras">Vamos a necesitar</span>
        <span className="box__birras"> {boxQuantity} </span>
        <span className="text_birras">cajas de birras.</span>
      </div>
      <img  className="img__birras" src={require('../../images/birras.png')} alt="birras"/>
    </div>
  )
}

BirrasCalculator.propTypes = {
  people: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
}



