import React from 'react'
import './BirrasCalculator.scss'
import useBirraCalculator from './hooks/useBirraCalculator'

export default function BirrasCalculator(props) {

  const { people, temperature } = props
  const [ boxQuantity ] = useBirraCalculator(people, temperature)

  return (
    <div className="container__birras">
      <div>
        <span className="text_birras">Vamos a necesitar </span>
        <span className="box__birras">{boxQuantity}</span>
        <span className="text_birras"> cajas de birras.</span>
      </div>
      <img  className="img__birras" src={require('../../images/birras.png')} alt="birras"/>
    </div>
  )
}




