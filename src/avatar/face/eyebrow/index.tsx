import React from 'react'

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
import { Selector } from '../../../options'
import { EyebrowProps } from './type'

const Eyebrow: React.FC<EyebrowProps> = ({ type }: EyebrowProps) => {
  return <Selector defaultKey='Default' selectedKey={type}>
    <Angry key='Angry' />
    <AngryNatural key='AngryNatural' />
    <Default key='Default' />
    <DefaultNatural key='DefaultNatural' />
    <FlatNatural key='FlatNatural' />
    <RaisedExcited key='RaisedExcited' />
    <RaisedExcitedNatural key='RaisedExcitedNatural' />
    <SadConcerned key='SadConcerned' />
    <SadConcernedNatural key='SadConcernedNatural' />
    <UnibrowNatural key='UnibrowNatural' />
    <UpDown key='UpDown' />
    <UpDownNatural key='UpDownNatural' />
  </Selector>;
};

export default Eyebrow;
