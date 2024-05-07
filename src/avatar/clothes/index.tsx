import React from 'react'

import BlazerShirt from './BlazerShirt'
import BlazerSweater from './BlazerSweater'
import CollarSweater from './CollarSweater'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import Overall from './Overall'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import { Selector } from '../../options'
import { ClotheProps } from './type'

const Clothes = ({ type, color, graphicType }: ClotheProps) => {
  return <Selector defaultKey='BlazerShirt' selectedKey={type}>
    <BlazerShirt key='BlazerShirt' />
    <BlazerSweater key='BlazerSweater' />
    <CollarSweater key='CollarSweater' color={color} />
    <GraphicShirt key='GraphicShirt' color={color} type={graphicType} />
    <Hoodie key='Hoodie' color={color} />
    <Overall key='Overall' color={color} />
    <ShirtCrewNeck key='ShirtCrewNeck' color={color} />
    <ShirtScoopNeck key='ShirtScoopNeck' color={color} />
    <ShirtVNeck key='ShirtVNeck' color={color} />
  </Selector>;
};

export default Clothes;
