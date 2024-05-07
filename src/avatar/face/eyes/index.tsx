import React from 'react'

import Close from './Close'
import Cry from './Cry'
import Default from './Default'
import Dizzy from './Dizzy'
import EyeRoll from './EyeRoll'
import Happy from './Happy'
import Hearts from './Hearts'
import Side from './Side'
import Squint from './Squint'
import Surprised from './Surprised'
import Wink from './Wink'
import WinkWacky from './WinkWacky'
import { Selector } from '../../../options'
import { EyeProps } from './type'

const Eyes = ({ type }: EyeProps) => {
  return <Selector defaultKey='Default' selectedKey={type}>
    <Close key='Close' />
    <Cry key='Cry' />
    <Default key='Default' />
    <Dizzy key='Dizzy' />
    <EyeRoll key='EyeRoll' />
    <Happy key='Happy' />
    <Hearts key='Hearts' />
    <Side key='Side' />
    <Squint key='Squint' />
    <Surprised key='Surprised' />
    <Wink key='Wink' />
    <WinkWacky key='WinkWacky' />
  </Selector>;
};

export default Eyes;
