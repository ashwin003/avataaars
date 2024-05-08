import * as React from 'react'

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
import { EyeProps } from './type'

const Eyes = ({ type }: EyeProps) => {
  if (!type) return <Default key='Default' />;

  return {
    'Close': <Close key='Close' />,
    'Cry': <Cry key='Cry' />,
    'Default': <Default key='Default' />,
    'Dizzy': <Dizzy key='Dizzy' />,
    'EyeRoll': <EyeRoll key='EyeRoll' />,
    'Happy': <Happy key='Happy' />,
    'Hearts': <Hearts key='Hearts' />,
    'Side': <Side key='Side' />,
    'Squint': <Squint key='Squint' />,
    'Surprised': <Surprised key='Surprised' />,
    'Wink': <Wink key='Wink' />,
    'WinkWacky': <WinkWacky key='WinkWacky' />
  }[type];
};

export default Eyes;
