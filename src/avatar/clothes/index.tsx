import * as React from 'react'

import lookup from '../lookup'
import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import { ClotheProps } from './type'

const components: Readonly<Record<string, React.ComponentType<ClotheProps>>> = {
  BlazerShirt: BlazerShirt,
  BlazerSweater: BlazerSweater,
  CollarSweater: CollarSweater,
  GraphicShirt: GraphicShirt,
  Hoodie: Hoodie,
  Overall: Overall,
  ShirtCrewNeck: ShirtCrewNeck,
  ShirtScoopNeck: ShirtScoopNeck,
  ShirtVNeck: ShirtVNeck,
}

const Clothes: React.FC<ClotheProps> = ({ type, color, graphicType }: ClotheProps) => {
  const Component = lookup(components, type, 'BlazerShirt')
  return Component ? <Component color={color} graphicType={graphicType} /> : null
}

export default Clothes;
