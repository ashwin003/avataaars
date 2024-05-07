import React from 'react'

import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { Selector } from '../../../options'
import { AccessoriesProps } from './type'

const Accessories = ({ type }: AccessoriesProps) => {
  return <Selector defaultKey='Blank' selectedKey={type}>
    <Blank key='Blank' />
    <Kurt key='Kurt' />
    <Prescription01 key='Prescription01' />
    <Prescription02 key='Prescription02' />
    <Round key='Round' />
    <Sunglasses key='Sunglasses' />
    <Wayfarers key='Wayfarers' />
  </Selector>;
};

export default Accessories;
