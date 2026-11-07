import * as React from 'react'

import lookup from '../../lookup'
import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { AccessoriesProps } from './type'

const components: Readonly<Record<string, React.ComponentType>> = {
  Blank: Blank,
  Kurt: Kurt,
  Prescription01: Prescription01,
  Prescription02: Prescription02,
  Round: Round,
  Sunglasses: Sunglasses,
  Wayfarers: Wayfarers,
}

const Accessories: React.FC<AccessoriesProps> = ({ type }: AccessoriesProps) => {
  const Component = lookup(components, type, 'Blank')
  return Component ? <Component /> : null
}

export default Accessories;
