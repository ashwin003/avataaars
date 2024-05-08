import * as React from 'react'

import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { FacialHairProps } from './type'

const FacialHair: React.FC<FacialHairProps> = ({ type, color }: FacialHairProps) => {
  if (!type) return <Blank key='Blank' />;
  return {
    'Blank': <Blank key='Blank' />,
    'BeardMedium': <BeardMedium key='BeardMedium' color={color} />,
    'BeardLight': <BeardLight key='BeardLight' color={color} />,
    'BeardMajestic': <BeardMajestic key='BeardMajestic' color={color} />,
    'MoustacheFancy': <MoustacheFancy key='MoustacheFancy' color={color} />,
    'MoustacheMagnum': <MoustacheMagnum key='MoustacheMagnum' color={color} />
  }[type];
};

export default FacialHair;
