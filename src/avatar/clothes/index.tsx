import * as React from 'react'

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

const Clothes = ({ type, color, graphicType }: ClotheProps) => {
  if (!type) return <BlazerShirt key='BlazerShirt' />;
  return {
    'BlazerShirt': <BlazerShirt key='BlazerShirt' />,
    'BlazerSweater': <BlazerSweater key='BlazerSweater' />,
    'CollarSweater': <CollarSweater key='CollarSweater' color={color} />,
    'GraphicShirt': <GraphicShirt key='GraphicShirt' color={color} type={graphicType} />,
    'Hoodie': <Hoodie key='Hoodie' color={color} />,
    'Overall': <Overall key='Overall' color={color} />,
    'ShirtCrewNeck': <ShirtCrewNeck key='ShirtCrewNeck' color={color} />,
    'ShirtScoopNeck': <ShirtScoopNeck key='ShirtScoopNeck' color={color} />,
    'ShirtVNeck': <ShirtVNeck key='ShirtVNeck' color={color} />
  }[type];
};

export default Clothes;
