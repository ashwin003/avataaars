import * as React from 'react'

import lookup from '../../lookup'
import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairProps } from './type'

const components: Readonly<Record<string, React.ComponentType<FacialHairProps>>> = {
  Blank: Blank,
  BeardMedium: BeardMedium,
  BeardLight: BeardLight,
  BeardMajestic: BeardMajestic,
  MoustacheFancy: MoustacheFancy,
  MoustacheMagnum: MoustacheMagnum,
}

const FacialHair: React.FC<FacialHairProps> = ({ type, color }: FacialHairProps) => {
  const Component = lookup(components, type, 'Blank')
  return Component ? <Component color={color} /> : null
}

export default FacialHair;
