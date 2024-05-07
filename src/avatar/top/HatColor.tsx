import React from 'react'

import { Selector } from '../../options'

export interface ColorProps {
  maskID: string;
  color?: string;
  defaultColor?: string;
}

const ColorComponent: React.FC<ColorProps> = ({ maskID, color }: ColorProps) => {
  return (
    <g
      id='Color/Palette/Gray-01'
      mask={`url(#${maskID})`}
      fillRule='evenodd'
      fill={color}>
      <rect id='🖍Color' x='0' y='0' width='264' height='280' />
    </g>
  )
}

const Colors: React.FC<ColorProps> = ({ maskID, color, defaultColor }: ColorProps) => {
  return <Selector defaultKey={defaultColor || 'Gray01'} selectedKey={color}>
    <ColorComponent maskID={maskID} key='Black' color='#262E33' />
    <ColorComponent maskID={maskID} key='Blue01' color='#65C9FF' />
    <ColorComponent maskID={maskID} key='Blue02' color='#5199E4' />
    <ColorComponent maskID={maskID} key='Blue03' color='#25557C' />
    <ColorComponent maskID={maskID} key='Gray01' color='#E6E6E6' />
    <ColorComponent maskID={maskID} key='Gray02' color='#929598' />
    <ColorComponent maskID={maskID} key='Heather' color='#3C4F5C' />
    <ColorComponent maskID={maskID} key='PastelBlue' color='#B1E2FF' />
    <ColorComponent maskID={maskID} key='PastelGreen' color='#A7FFC4' />
    <ColorComponent maskID={maskID} key='PastelOrange' color='#FFDEB5' />
    <ColorComponent maskID={maskID} key='PastelRed' color='#FFAFB9' />
    <ColorComponent maskID={maskID} key='PastelYellow' color='#FFFFB1' />
    <ColorComponent maskID={maskID} key='Pink' color='#FF488E' />
    <ColorComponent maskID={maskID} key='Red' color='#FF5C5C' />
    <ColorComponent maskID={maskID} key='White' color='#FFFFFF' />
  </Selector>;
};

export default Colors;