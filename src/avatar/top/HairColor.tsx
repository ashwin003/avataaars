import React from 'react'

import { Selector } from '../../options'

export interface HairProps {
  maskID: string;
  color?: string;
}

const ColorComponent: React.FC<HairProps> = ({ maskID, color }: HairProps) => {
  return (
    <g
      id='Hair/👶🏽-03-Brown'
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform='translate(0.000000, 0.000000) ' id='Color'>
        <rect x='0' y='0' width='264' height='280' />
      </g>
    </g>
  )
}

const HairColor: React.FC<HairProps> = ({ maskID, color }: HairProps) => {
  return <Selector defaultKey='BrownDark' selectedKey={color}>
    <ColorComponent maskID={maskID} key='Auburn' color='#A55728' />
    <ColorComponent maskID={maskID} key='Black' color='#2C1B18' />
    <ColorComponent maskID={maskID} key='Blonde' color='#B58143' />
    <ColorComponent maskID={maskID} key='BlondeGolden' color='#D6B370' />
    <ColorComponent maskID={maskID} key='Brown' color='#724133' />
    <ColorComponent maskID={maskID} key='BrownDark' color='#4A312C' />
    <ColorComponent maskID={maskID} key='PastelPink' color='#F59797' />
    <ColorComponent maskID={maskID} key='Blue' color='#000fdb' />
    <ColorComponent maskID={maskID} key='Platinum' color='#ECDCBF' />
    <ColorComponent maskID={maskID} key='Red' color='#C93305' />
    <ColorComponent maskID={maskID} key='SilverGray' color='#E8E1E1' />
  </Selector>;
};

export default HairColor;
