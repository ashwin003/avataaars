import * as React from 'react'

import lookup from '../../lookup'
import Angry from './Angry'
import AngryNatural from './AngryNatural'
import Default from './Default'
import DefaultNatural from './DefaultNatural'
import FlatNatural from './FlatNatural'
import FrownNatural from './FrownNatural'
import RaisedExcited from './RaisedExcited'
import RaisedExcitedNatural from './RaisedExcitedNatural'
import SadConcerned from './SadConcerned'
import SadConcernedNatural from './SadConcernedNatural'
import UnibrowNatural from './UnibrowNatural'
import UpDown from './UpDown'
import UpDownNatural from './UpDownNatural'
import { EyebrowProps } from './type'

const components: Readonly<Record<string, React.ComponentType>> = {
  Angry: Angry,
  AngryNatural: AngryNatural,
  Default: Default,
  DefaultNatural: DefaultNatural,
  FlatNatural: FlatNatural,
  FrownNatural: FrownNatural,
  RaisedExcited: RaisedExcited,
  RaisedExcitedNatural: RaisedExcitedNatural,
  SadConcerned: SadConcerned,
  SadConcernedNatural: SadConcernedNatural,
  UnibrowNatural: UnibrowNatural,
  UpDown: UpDown,
  UpDownNatural: UpDownNatural,
}

const Eyebrow: React.FC<EyebrowProps> = ({ type }: EyebrowProps) => {
  const Component = lookup(components, type, 'Default')
  return Component ? <Component /> : null
}

export default Eyebrow;
