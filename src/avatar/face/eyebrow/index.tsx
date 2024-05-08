import * as React from 'react'

import Angry from './Angry'
import AngryNatural from './AngryNatural'
import Default from './Default'
import DefaultNatural from './DefaultNatural'
import FlatNatural from './FlatNatural'
import RaisedExcited from './RaisedExcited'
import RaisedExcitedNatural from './RaisedExcitedNatural'
import SadConcerned from './SadConcerned'
import SadConcernedNatural from './SadConcernedNatural'
import UnibrowNatural from './UnibrowNatural'
import UpDown from './UpDown'
import UpDownNatural from './UpDownNatural'
import { EyebrowProps } from './type'

const Eyebrow: React.FC<EyebrowProps> = ({ type }: EyebrowProps) => {
  if (!type) return <Default key='Default' />;
  return {
    'Angry': <Angry key='Angry' />,
    'AngryNatural': <AngryNatural key='AngryNatural' />,
    'Default': <Default key='Default' />,
    'DefaultNatural': <DefaultNatural key='DefaultNatural' />,
    'FlatNatural': <FlatNatural key='FlatNatural' />,
    'RaisedExcited': <RaisedExcited key='RaisedExcited' />,
    'RaisedExcitedNatural': <RaisedExcitedNatural key='RaisedExcitedNatural' />,
    'SadConcerned': <SadConcerned key='SadConcerned' />,
    'SadConcernedNatural': <SadConcernedNatural key='SadConcernedNatural' />,
    'UnibrowNatural': <UnibrowNatural key='UnibrowNatural' />,
    'UpDown': <UpDown key='UpDown' />,
    'UpDownNatural': <UpDownNatural key='UpDownNatural' />
  }[type];
};

export default Eyebrow;
