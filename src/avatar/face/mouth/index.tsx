import * as React from 'react'

import lookup from '../../lookup'
import Concerned from './Concerned'
import Default from './Default'
import Disbelief from './Disbelief'
import Eating from './Eating'
import Grimace from './Grimace'
import Sad from './Sad'
import ScreamOpen from './ScreamOpen'
import Serious from './Serious'
import Smile from './Smile'
import Tongue from './Tongue'
import Twinkle from './Twinkle'
import Vomit from './Vomit'
import { MouthProps } from './type'

const components: Readonly<Record<string, React.ComponentType>> = {
  Concerned: Concerned,
  Default: Default,
  Disbelief: Disbelief,
  Eating: Eating,
  Grimace: Grimace,
  Sad: Sad,
  ScreamOpen: ScreamOpen,
  Serious: Serious,
  Smile: Smile,
  Tongue: Tongue,
  Twinkle: Twinkle,
  Vomit: Vomit,
}

const Mouth: React.FC<MouthProps> = ({ type }: MouthProps) => {
  const Component = lookup(components, type, 'Default')
  return Component ? <Component /> : null
}

export default Mouth;
