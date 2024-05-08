import * as React from 'react'

import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { AccessoriesProps } from './type'

const Accessories = ({ type }: AccessoriesProps) => {
  if (!type) return <Blank key='Blank' />;
  return {
    'Blank': <Blank key='Blank' />,
    'Kurt': <Kurt key='Kurt' />,
    'Prescription01': <Prescription01 key='Prescription01' />,
    'Prescription02': <Prescription02 key='Prescription02' />,
    'Round': <Round key='Round' />,
    'Sunglasses': <Sunglasses key='Sunglasses' />,
    'Wayfarers': <Wayfarers key='Wayfarers' />
  }[type];
};

export default Accessories;
