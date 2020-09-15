import { useState, useEffect } from 'react'

const useBirraCalculator = (people, temperature) => {
  const [boxQuantity, setBoxQuantity] = useState()
  useEffect(() => {
    if(temperature > 24){
      setBoxQuantity(people*2/6)
      
    }else if(temperature < 20 ){
      setBoxQuantity(people*0.75/6)
    }else{
      setBoxQuantity(people/6)
    }
  }, [people, temperature])
  return [Math.ceil(boxQuantity)]
}

export default useBirraCalculator