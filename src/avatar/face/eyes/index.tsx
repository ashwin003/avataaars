import * as React from 'react'

import lookup from '../../lookup'
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

const components: Readonly<Record<string, React.ComponentType>> = {
  Close: Close,
  Cry: Cry,
  Default: Default,
  Dizzy: Dizzy,
  EyeRoll: EyeRoll,
  Happy: Happy,
  Hearts: Hearts,
  Side: Side,
  Squint: Squint,
  Surprised: Surprised,
  Wink: Wink,
  WinkWacky: WinkWacky,
}

const Eyes: React.FC<EyeProps> = ({ type }: EyeProps) => {
  const Component = lookup(components, type, 'Default')
  return Component ? <Component /> : null
}

export default Eyes;
