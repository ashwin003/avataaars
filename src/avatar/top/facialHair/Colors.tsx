import React from 'react'

import { Selector } from '../../../options'

export interface ColorProps {
  maskID: string;
  color?: string;
}

const ColorComponent: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  return (
    <g
      id='Color/Facial-Hair'
      mask={`url(#${maskID})`}
      fill={color}>
      <g transform='translate(-32.000000, 0.000000)' id='Color'>
        <rect x='0' y='0' width='264' height='244' />
      </g>
    </g>
  )
}

const Colors: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  return (
    <Selector defaultKey='BrownDark' selectedKey={color}>
      <ColorComponent maskID={maskID} color='#A55728' key='Auburn' />

      <ColorComponent maskID={maskID} color='#2C1B18' key='Black' />

      <ColorComponent maskID={maskID} color='#B58143' key='Blonde' />

      <ColorComponent maskID={maskID} color='#D6B370' key='BlondeGolden' />

      <ColorComponent maskID={maskID} color='#724133' key='Brown' />

      <ColorComponent maskID={maskID} color='#4A312C' key='BrownDark' />

      <ColorComponent maskID={maskID} color='#ECDCBF' key='Platinum' />

      <ColorComponent maskID={maskID} color='#C93305' key='Red' />

      <ColorComponent maskID={maskID} color='#E8E1E1' key='SilverGray' />
    </Selector>
  )
}

export default Colors;