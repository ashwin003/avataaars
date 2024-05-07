import React from 'react'

import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import Blank from './Blank'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { Selector } from '../../../options'
import { FacialHairProps } from './type'

const FacialHair = ({ type, color }: FacialHairProps) => {
  return <Selector defaultKey='Blank' selectedKey={type}>
    <Blank key='Blank' />
    <BeardMedium key='BeardMedium' color={color} />
    <BeardLight key='BeardLight' color={color} />
    <BeardMajestic key='BeardMajestic' color={color} />
    <MoustacheFancy key='MoustacheFancy' color={color} />
    <MoustacheMagnum key='MoustacheMagnum' color={color} />
  </Selector>;
};

export default FacialHair;
