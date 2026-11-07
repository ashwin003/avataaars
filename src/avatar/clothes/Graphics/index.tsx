import * as React from 'react'

import lookup from '../../lookup'
import { Bat } from './bat'
import { Bear } from './bear'
import { Cumbia } from './cumbia'
import { Deer } from './deer'
import { Diamond } from './diamond'
import { Hola } from './hola'
import { Pizza } from './pizza'
import { Resist } from './resist'
import { Selena } from './selena'
import { Skull } from './skull'
import { SkullOutline } from './skull-outline'
import { Props } from './props'
import { GraphicsProps } from './type'

const components: Readonly<Record<string, React.ComponentType<Props>>> = {
  Bat: Bat,
  Cumbia: Cumbia,
  Deer: Deer,
  Diamond: Diamond,
  Hola: Hola,
  Pizza: Pizza,
  Resist: Resist,
  Selena: Selena,
  Bear: Bear,
  SkullOutline: SkullOutline,
  Skull: Skull,
}

const Graphics: React.FC<GraphicsProps> = ({ maskID, type }: GraphicsProps) => {
  const Component = lookup(components, type, 'Skull')
  return Component ? <Component maskID={maskID} /> : null
}

export default Graphics;
